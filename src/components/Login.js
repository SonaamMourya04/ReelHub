import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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
      <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm &&<input
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        
        <button className="p-4 my-4 bg-red-600 w-full rounded-lg">
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
