export const checkValidData = (mail,pasword) =>{
    const isEmailValid=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(mail);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(pasword);

   if (!isEmailValid) return "Email is Not Valid";
   if (!isPasswordValid) return "Password is Not Valid";
   return null;// no error

}