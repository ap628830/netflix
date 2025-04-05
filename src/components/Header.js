import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ()=>{
    const navigate = useNavigate()
    const user = useSelector(store=>store.user)
    
    const signOutUser = () =>{
        signOut(auth).then(() => {
          // Sign-out successful.
            navigate('/')
        }).catch((error) => {
          // An error happened.
        });
    }
    return (
        <div className='absolute z-10 py-2 px-20 bg-gradient-to-b from-black w-full flex justify-between'>
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" width={200} height={150}/>

           {user && ( <div className="flex p-2">
                {console.log("user info ",user)}
            <img  src={user?.photoURL} alt="" className="w-12 h-12 " />
            <button onClick={signOutUser}>(sign out)</button>
            </div>)}

        </div>
        
    )
}

export default Header