import CardWrapper from "@/components/auth/card-wrapper";
import LoginForm from "@/components/auth/login-form";




const Login = () => {
    return (
        <CardWrapper
        label="Welcome Back"
        backButtonHref="/auth/register"
        backButtonLabel="Don't have an account? Sign up Now"
        showSocial
        >
            <LoginForm/>
        </CardWrapper>
    )
}


export default Login;