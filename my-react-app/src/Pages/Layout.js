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
                <li>
                    <Link to="/EditMembership">Edit Membership</Link>
                </li>
                <li>
                    <Link to="/ProfessionalReg">Professional Registration</Link>
                </li>
                <li>
                <Link to="/VehicleReg">Vehicle Registration</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </>
)
};

export default Layout;