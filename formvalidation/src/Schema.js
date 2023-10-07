import * as Yup from 'yup'


export const signup = Yup.object({
    name: Yup.string().min(2).max(25).required("please enter your name"),
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(8).required("Please enter a valid password"),
  repassword:Yup.string().required().oneOf([Yup.ref('password'),null],"password must match")
})