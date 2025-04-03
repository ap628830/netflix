import { useRef, useState } from "react"
import Header from "./Header"
import {Validations} from '../utils/validations'

const Login= ()=>{
    const [isSignInForm,setSignInStatus] = useState(true)
    const [emailErrorMessage, setEmailErrorMessage] = useState(null)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(null)
   
    const email = useRef(null)
    const password = useRef(null)

    const updateSignup = ()=>{
        setSignInStatus(!isSignInForm)
    }

    const handleFormClick = ()=> {
        const {passwordMessage,emailMessage} = Validations(email.current.value,password.current.value)
        setEmailErrorMessage(emailMessage)
        setPasswordErrorMessage(passwordMessage)
        console.log("password ",passwordMessage)
        console.log("email ",emailMessage)
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg" alt="" />

            </div>
           <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black p-12 my-36 w-3/12 mx-auto left-0 right-0 text-white bg-opacity-90 rounded-lg">
            <h1 className=" m-2 py-4 font-bold text-3xl">{isSignInForm? 'Sign In': 'Sign Up'}</h1>
            {!isSignInForm && (
                    <input type="text" placeholder="Full Name" className="p-2 m-2 w-full bg-gray-700"/>
            )}
           <input type="text" ref={email} placeholder="Email" className="p-2 m-2 w-full bg-gray-700"/>
           {emailErrorMessage && (<p className="text-red-600 text-sm">{emailErrorMessage}</p>)}
            <input type="text" ref={password} placeholder="password" className="p-2 m-2 w-full bg-gray-700"/>
            {passwordErrorMessage? (<p className="text-red-600 text-sm">{passwordErrorMessage}</p>):<></>}
            <button className="bg-red-600 p-2 m-2 w-full rounded-lg" onClick={handleFormClick}>{isSignInForm? 'Sign In': 'Sign Up'} </button>
            <p className="p-2 cursor-pointer" onClick={updateSignup}> {isSignInForm? 'New to Netflix?  Sign up now': 'Already registered? Sign In'} </p>
           </form>
        </div>
    )
}

export default Login
