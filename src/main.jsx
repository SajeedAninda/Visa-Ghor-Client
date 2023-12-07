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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/slip_price" element={<Pricing />} />
        <Route path="/air_ticket_prices" element={<AirTicketPrices />} />
        <Route path="/tourist_visa_prices" element={<TouristVisaPrices />} />
        <Route path="/other_services" element={<OtherServices />} />
        <Route path="/admin" element={<AdminPanel />}>
          {/* Children routes for /admin/dashboard */}
          <Route index element={<Dashboard />} />
          <Route path="addSlip" element={<AddSlip />} />
          <Route path="slipList" element={<SlipList />} />
          <Route
            path="updateSlipPricing/:id"
            element={<SlipList />}
            loader={({ params }) => fetch(`https://sovereign-asset-solutions-server.vercel.app/updateAsset/${params.id}`).then(res => res.json())}
          />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
