// App.js
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './layout/home'
import WebsiteBuilderDashboard from './component/WebsiteBulder/WebsiteBuilderDashboard'
import WebDashboard from './component/WebsiteBulder/dashboard'
import Login from './component/Authnication/login'
import DomainPage from './layout/Domain'
import Hosting from './layout/hosting'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<WebsiteBuilderDashboard />} />
        <Route path="/WebDashboard" element={<WebDashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/DomainPage" element={<DomainPage />} />
        <Route path="/Hosting" element={<Hosting />} />
      </Routes>
    </Router>
  )
}

export default App
