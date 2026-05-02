import CardWrapper from "@/components/auth/card-wrapper";
import RegisterForm from "@/components/auth/register-form";




const Register = () => {
    return (
        <CardWrapper
        label="Welcome"
        backButtonHref="/auth/login"
        backButtonLabel="Already have an account? Sign in Now"
        showSocial
        >
            <RegisterForm/>
        </CardWrapper>
    )
}


export default Register;