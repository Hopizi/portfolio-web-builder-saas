import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signUpSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required(),
    fullName: yup.string().required("Name is required"),
    userName: yup.string().required("Please enter a username"),
    password: yup.string().min(6).matches(passwordRules, "Password must contain of 6 character min and at least 1 uppercase, 1 lower case and 1 number" ).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password Must Match").required("Required")
})