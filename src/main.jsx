import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Pricing from './Pricing.jsx';
import AirTicketPrices from './AirTicketPrices.jsx';
import TouristVisaPrices from './TouristVisaPrices.jsx';
import OtherServices from './OtherServices.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/slip_price" element={<Pricing />} />
        <Route path="/air_ticket_prices" element={<AirTicketPrices />} />
        <Route path="/tourist_visa_prices" element={<TouristVisaPrices />} />
        <Route path="/other_services" element={<OtherServices />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
