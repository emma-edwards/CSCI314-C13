import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './index.css';
//import App from './App';
//import Layout from './Pages/Layout';
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
<<<<<<<<< Temporary merge branch 1
import CalloutLocation from "./Pages/CalloutLocation";
=========
import MemberHome from './Pages/MemberHome';
import ProfessionalHome from './Pages/ProfessionalHome';
import AvJobs from './Pages/AvJobs';
import CurrentJobs from './Pages/CurrentJobs';
import PNav from './Pages/PNav';
>>>>>>>>> Temporary merge branch 2


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Layout />}> */}
                <Route index element={<Home />} />
                <Route path="SignIn" element={<SignIn />} />
                <Route path="SignUp" element={<SignUp />} />
                <Route path="Pricing" element={<Pricing />} />
                <Route path="ProfessionalReg" element={<ProfessionalReg />} />

                <Route path="/" element={<Nav />}>
                    <Route index element={<MemberHome />} />
                    <Route path="Subscriptions" element={<Subscriptions />} />
                    <Route path="Pricing" element={<Pricing />} />
                    <Route path="EditMembership" element={<EditMembership />} />
                    <Route path="VehicleReg" element={<VehicleReg />} />
                    <Route path="SubmitClaim" element={<SubmitClaim />} />
<<<<<<<<< Temporary merge branch 1
                    <Route path="SignUp" element={<SignUp />} />
                    <Route path="CalloutLocation" element={<CalloutLocation />} />


=========
                    <Route path="MemberHome" element={<MemberHome />} />
                </Route>
>>>>>>>>> Temporary merge branch 2

                <Route element={<PNav />}>
                    <Route path="ProfessionalHome" element={<ProfessionalHome />} />
                    <Route path="AvJobs" element={<AvJobs />} />
                    <Route path="CurrentJobs" element={<CurrentJobs />} />
                </Route>

            </Routes>

        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
