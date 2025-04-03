export const Validations = (email,password)=>{
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    return {
        passwordMessage: isValidPassword?null: 'Password is incorrect',
        emailMessage: isValidEmail?null: 'Email Id is incorrect'
    }
}