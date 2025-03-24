import Logo from "../utils/Logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    /*logo image  */
    <div className=" absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-60" src={Logo} alt="Logo" /> {/* Use imported image */}
      <div className="flex p-8">
        <img className="w-12 h-12 " src={user?.photoURL} alt="usericon" />
        <button
          onClick={handleSignOut}
          className="text-sm font-bold text-white"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
