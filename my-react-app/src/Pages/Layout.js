import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/SignIn">SignIn</Link>
                </li>
                <li>
                    <Link to="/Subscriptions">Subscriptions</Link>
                </li>
                <li>
                    <Link to="/Pricing">Pricing</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </>
)
};

export default Layout;