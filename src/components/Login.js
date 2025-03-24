import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from  "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
 



  const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick = ()=>{

    //validate the form data
  const message = checkValidData(email.current.value , password.current.value);
   setErrorMessage(message);

   if(message)return;

   //Sign In Sign Up Logic
   if(!isSignInForm){
    //Sign Up Logic
  
  createUserWithEmailAndPassword(
    auth, 
    email.current.value,
    password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
     photoURL: "https://avatars.githubusercontent.com/u/199350039?v=4",
    }).then(() => {
    const { uid, email, displayname, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayname: displayname,
                photoURL: photoURL,
              })
            );
    navigate("/browse")
    }).catch((error) => {
     setErrorMessage(error.message)
    });

    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+ errorMessage)
    
  });

   }
   else{
    signInWithEmailAndPassword(
      auth,
      email.current.value ,
       password.current.value
      )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  navigate("/browse");
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+errorMessage);
  });


   }



  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sign In/Sign Up Form */}
      <form  onSubmit={(e)=>e.preventDefault()}
      className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/*   The && operator returns the second value if the first value is true. 
        Otherwise, it returns the first value. */}
        {!isSignInForm &&<input
        ref={name}
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />}

        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2"> {errorMessage}</p>
        <button className="p-4 my-4 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Reelhub? Sign Up Now"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};


export default Login;
