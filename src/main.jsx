import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Pricing from './Pricing.jsx';
import AirTicketPrices from './AirTicketPrices.jsx';
import TouristVisaPrices from './TouristVisaPrices.jsx';
import OtherServices from './OtherServices.jsx';
import AdminPanel from './Admin/AdminPanel.jsx';
import Dashboard from './Admin/Dashboard.jsx';
import AddSlip from './Admin/AddSlip.jsx';
import SlipList from './Admin/SlipList.jsx';
import UpdateList from './Admin/UpdateList.jsx';
import AuthenticationProvider from './Authentication/AuthenticationProvider.jsx';
import Login from './Admin/Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AuthenticationProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/slip_price" element={<Pricing />} />
          <Route path="/air_ticket_prices" element={<AirTicketPrices />} />
          <Route path="/tourist_visa_prices" element={<TouristVisaPrices />} />
          <Route path="/other_services" element={<OtherServices />} />
          <Route path="/admin" element={<AdminPanel />}>
            {/* Children routes for /admin/dashboard */}
            <Route index element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="addSlip" element={<PrivateRoute><AddSlip /></PrivateRoute>} />
            <Route path="slipList" element={<PrivateRoute><SlipList /></PrivateRoute>} />
            <Route
              path="slipList/updateSlipPricing/:id"
              element={<PrivateRoute><UpdateList /></PrivateRoute>}
              loader={({ params }) => fetch(`https://visa-ghor-server.vercel.app/updateSlipPricing/${params.id}`).then(res => res.json())}
            />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthenticationProvider>
    </HashRouter>
  </React.StrictMode>
);
