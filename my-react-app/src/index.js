import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
//import App from './App';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Subscriptions from './Pages/Subscriptions';
import Pricing from './Pages/Pricing';
import reportWebVitals from './reportWebVitals';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="SignIn" element={<SignIn />} />
                    <Route path="Subscriptions" element={<Subscriptions />} />
                    <Route path="Pricing" element={<Pricing />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
