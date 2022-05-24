import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './index.css';
//import App from './App';
//import Layout from './Pages/Layout';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Subscriptions from './Pages/Subscriptions';
import Pricing from './Pages/Pricing';
import EditMembership from './Pages/EditMembership';
import EditProfile from './Pages/EditProfile';
import reportWebVitals from './reportWebVitals';
import ProfessionalReg from './Pages/ProfessionalReg';
import VehicleReg from './Pages/VehicleReg';
import SubmitClaim from './Pages/SubmitClaim';
import SignUp from './Pages/SignUp';
import CalloutLocation from './Pages/CalloutLocation';
import MemberHome from './Pages/MemberHome';
import ProfessionalHome from './Pages/ProfessionalHome';
import AvJobs from './Pages/AvJobs';
import CurrentJobs from './Pages/CurrentJobs';
import PNav from './Pages/PNav';
import EditProfProfile from './Pages/EditProfProfile';
import ServiceReport from './Pages/ServiceReport';
import CancelClaim from './Pages/CancelClaim';
import 'bootstrap/dist/css/bootstrap.css';
import PSignIn from './Pages/PSignIn';
import PageNotFound from './Pages/PageNotFound';
import Layout from './Pages/Layout';

import Payment from './Pages/Payment';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<MemberHome />} />
          <Route path="Subscriptions" element={<Subscriptions />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="EditMembership" element={<EditMembership />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="VehicleReg" element={<VehicleReg />} />
          <Route path="SubmitClaim" element={<SubmitClaim />} />
          <Route path="CalloutLocation" element={<CalloutLocation />} />
          <Route path="ServiceReport" element={<ServiceReport />} />
          <Route path="CancelClaim" element={<CancelClaim />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="MemberHome" element={<MemberHome />} />
        </Route>

        <Route element={<PNav />}>
          <Route path="ProfessionalHome" element={<ProfessionalHome />} />
          <Route path="AvJobs" element={<AvJobs />} />
          <Route path="CurrentJobs" element={<CurrentJobs />} />
          <Route path="EditProfProfile" element={<EditProfProfile />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="ProfessionalReg" element={<ProfessionalReg />} />
          <Route path="PSignIn" element={<PSignIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
