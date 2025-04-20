import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EventOverview from "./pages/EventOverview";
import Registration from "./pages/Registration";
import Timeline from "./pages/Timeline";
import JuryMentors from "./pages/JuryMentors";
import Sponsorship from "./pages/Sponsorship";
import Awards from "./pages/Awards";
import MediaGallery from "./pages/MediaGallery";
import PostEvent from "./pages/PostEvent";
import Contact from "./pages/Contact";
import Tickets from "./pages/Tickets";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

// Admin components
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/admin/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminRegistrations from "./pages/admin/Registrations";
import AdminSponsorships from "./pages/admin/Sponsorships";
import AdminTickets from "./pages/admin/Tickets";
import AdminMedia from "./pages/admin/Media";
import AdminSettings from "./pages/admin/Settings";

import "./index.css";

function App() {
  return (
    <Router>
      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#FFFFFF",
            color: "#1F2937",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            borderRadius: "0.5rem",
            padding: "0.75rem 1rem",
            border: "1px solid #E5E7EB",
          },
          success: {
            style: {
              borderLeft: "4px solid #10B981",
            },
            iconTheme: {
              primary: "#10B981",
              secondary: "#FFFFFF",
            },
          },
          error: {
            style: {
              borderLeft: "4px solid #EF4444",
            },
            iconTheme: {
              primary: "#EF4444",
              secondary: "#FFFFFF",
            },
          },
          info: {
            style: {
              borderLeft: "4px solid #3B82F6",
            },
            iconTheme: {
              primary: "#3B82F6",
              secondary: "#FFFFFF",
            },
          },
        }}
      />

      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Public routes with header and footer */}
          <Route path="/" element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          } />
          
          <Route path="/event-overview" element={
            <>
              <Header />
              <EventOverview />
              <Footer />
            </>
          } />

          <Route path="/registration" element={
            <>
              <Header />
              <Registration />
              <Footer />
            </>
          } />

          <Route path="/timeline" element={
            <>
              <Header />
              <Timeline />
              <Footer />
            </>
          } />

          <Route path="/jury-mentors" element={
            <>
              <Header />
              <JuryMentors />
              <Footer />
            </>
          } />

          <Route path="/sponsorship" element={
            <>
              <Header />
              <Sponsorship />
              <Footer />
            </>
          } />

          <Route path="/awards" element={
            <>
              <Header />
              <Awards />
              <Footer />
            </>
          } />

          <Route path="/media-gallery" element={
            <>
              <Header />
              <MediaGallery />
              <Footer />
            </>
          } />

          <Route path="/post-event" element={
            <>
              <Header />
              <PostEvent />
              <Footer />
            </>
          } />

          <Route path="/contact" element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/tickets" element={
            <>
              <Header />
              <Tickets />
              <Footer />
            </>
          } />

          <Route path="/login" element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          } />

          <Route path="/signup" element={
            <>
              <Header />
              <Signup />
              <Footer />
            </>
          } />

          <Route path="/checkout/:ticketType" element={
            <>
              <Header />
              <Checkout />
              <Footer />
            </>
          } />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="registrations" element={<AdminRegistrations />} />
            <Route path="sponsorships" element={<AdminSponsorships />} />
            <Route path="tickets" element={<AdminTickets />} />
            <Route path="media" element={<AdminMedia />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={
            <>
              <Header />
              <NotFound />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;