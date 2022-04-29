import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
//import App from './App';
import Layout from './Pages/Layout';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Subscriptions from './Pages/Subscriptions';
import Pricing from './Pages/Pricing';
import EditMembership from "./Pages/EditMembership";
import reportWebVitals from './reportWebVitals';
import ProfessionalReg from "./Pages/ProfessinalReg";
import VehicleReg from "./Pages/VehicleReg";
import SubmitClaim from "./Pages/SubmitClaim";
import SignUp from "./Pages/SignUp";
import MemberHome from './Pages/MemberHome';


export default function App() {
    return (
        /*<BrowserRouter>
            <Routes>
                {/!* <Route path="/" element={<Layout />}> *!/}
                <Route path="/" element={<Nav />}>
                    <Route index element={<Home />} />
                    <Route path="SignIn" element={<SignIn />} />
                    <Route path="Subscriptions" element={<Subscriptions />} />
                    <Route path="Pricing" element={<Pricing />} />
                    <Route path="EditMembership" element={<EditMembership />} />
                    <Route path="ProfessionalReg" element={<ProfessionalReg />} />
                    <Route path="VehicleReg" element={<VehicleReg />} />
                    <Route path="SubmitClaim" element={<SubmitClaim />} />
                    <Route path="SignUp" element={<SignUp />} />
                    <Route path="MemberHome" element={<MemberHome />} />



                </Route>
            </Routes>

        </BrowserRouter>*/

        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Layout />}> */}
                <Route path="/" element={<Home />}>
                    <Route path="SignIn" element={<SignIn />} />
                    <Route path="SignUp" element={<SignUp />} />
                    <Route path="ProfessionalReg" element={<ProfessionalReg />} />
                    <Route path="MemberHome" element={<Nav />}>
                        <Route index element={<MemberHome />} />
                        <Route path="Subscriptions" element={<Subscriptions />} />
                        <Route path="Pricing" element={<Pricing />} />
                        <Route path="EditMembership" element={<EditMembership />} />
                        <Route path="VehicleReg" element={<VehicleReg />} />
                        <Route path="SubmitClaim" element={<SubmitClaim />} />
                        <Route path="MemberHome" element={<MemberHome />} />
                    </Route>
                </Route>


            </Routes>

        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
