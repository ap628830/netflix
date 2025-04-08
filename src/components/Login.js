import { useRef, useState } from "react"
import Header from "./Header"
import { Validations } from '../utils/validations';
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetUser } from "../utils/userSlice";
import { userProfile } from "../utils/constants";


const Login = () => {
    const [isSignInForm, setSignInStatus] = useState(true)
    const [emailErrorMessage, setEmailErrorMessage] = useState(null)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()



    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const updateSignup = () => {
        setSignInStatus(!isSignInForm)
    }

    const handleFormClick = () => {
        const { passwordMessage, emailMessage } = Validations(email.current.value, password.current.value)
        setEmailErrorMessage(emailMessage)
        setPasswordErrorMessage(passwordMessage)
        if (emailMessage || passwordMessage) return
        // write sign in / sign up logic
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: userProfile
                      }).then((updatedUser) => {
                        // Profile updated!
                        // ...
                         const {uid,email,displayName,photoURL} = auth.currentUser;
                         dispatch(SetUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
                                  
                        setErrorMessage(null)
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                    
                    console.log("user ", user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("error code ", error)
                    navigate("/")
                    setErrorMessage(errorCode + ' ' + errorMessage)
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value,  password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("signed In ",user)
                    setErrorMessage(null)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ' ' + errorMessage)
                    navigate("/")
                });
        }
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg" alt="" />

            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black p-12 my-36 w-3/12 mx-auto left-0 right-0 text-white bg-opacity-90 rounded-lg">
                <h1 className=" m-2 font-bold text-3xl">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && (
                    <input type="text" ref={name} placeholder="Full Name" className="p-2 m-2 w-full bg-gray-700" />
                )}
                <input type="text" ref={email} placeholder="Email" className="p-2 m-2 w-full bg-gray-700" />
                {emailErrorMessage && (<p className="text-red-600 font-bold p-2 text-sm">{emailErrorMessage}</p>)}
                <input type="password" ref={password} placeholder="password" className="p-2 m-2 w-full bg-gray-700" />
                {passwordErrorMessage ? (<p className="text-red-600 font-bold p-2 text-sm">{passwordErrorMessage}</p>) : <></>}
                <button className="bg-red-600 p-2 m-2 w-full rounded-lg" onClick={handleFormClick}>{isSignInForm ? 'Sign In' : 'Sign Up'} </button>
                {errorMessage && (<p className="text-red-600 font-bold p-2 text-sm">{errorMessage}</p>)}
                <p className="p-2 cursor-pointer" onClick={updateSignup}> {isSignInForm ? 'New to Netflix?  Sign up now' : 'Already registered? Sign In'} </p>
            </form>
        </div>
    )
}

export default Login
