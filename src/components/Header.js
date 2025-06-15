import Logo from "../utils/Logo.png";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";



const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        navigate("/error");
      }); 
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        localStorage.clear();
        sessionStorage.clear();
        navigate("/")
      }
    });
    //Unsubscribe when component unmounts
    return ()=> unsubscribe();
  }, []);
  return (
    /*logo image  */
    <div className=" absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-60" src={Logo} alt="Logo" /> {/* Use imported image */}
      {user &&
      (<div className="flex p-8">
        <img className="w-12 h-12 " 
         alt="usericon"
         src={user?.photoURL} />
        <button
          onClick={handleSignOut}
          className="text-sm font-bold text-white"
        >
          Sign Out
        </button>
      </div>)}
    </div>
  );
};

export default Header;
