import Logo from "../utils/Logo.png"; 

const Header = () => {
    return (
     /*logo image  */
        <div className=" absolute  px-8 py-2 bg-gradient-to-b from-black z-20" > 
            <img 
            className="w-90"
            src={Logo}
            alt="Logo"  /> {/* Use imported image */}
        </div>
    );
};

export default Header;
