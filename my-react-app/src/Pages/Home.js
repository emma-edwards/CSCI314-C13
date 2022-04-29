import { Outlet, Link as RouterLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home</h1>;

            <RouterLink to="/SignIn">Customer Sign In</RouterLink>
            <br />
            <RouterLink to="/SignUp">Customer Sign Up</RouterLink>
            <br />
            <RouterLink to="/ProfessionalReg">Professional Registration</RouterLink>
            <br />

            <Outlet />

        </>
    )

};

export default Home;