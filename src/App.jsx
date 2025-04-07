// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
// import HomePage from "./pages/HomePage"
// import EventOverview from "./pages/EventOverview"
// import Registration from "./pages/Registration"
// import Timeline from "./pages/Timeline"
// import JuryMentors from "./pages/JuryMentors"
// import Sponsorship from "./pages/Sponsorship"
// import Awards from "./pages/Awards"
// import MediaGallery from "./pages/MediaGallery"
// import PostEvent from "./pages/PostEvent"
// import Contact from "./pages/Contact"
// import Tickets from "./pages/Tickets"
// import Login from "./pages/Login"
// import Signup from "./pages/Signup"
// import AdminLogin from "./pages/AdminLogin"
// import Dashboard from "./pages/admin/Dashboard"

// // import AdminTickets from "./pages/admin/Tickets"
// import Checkout from "./pages/Checkout"
// import "./index.css"

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Routes>
//           {/* Admin routes without header/footer */}
//           <Route path="/admin/login" element={<AdminLogin />} />
//           <Route path="/admin/dashboard" element={<Dashboard />} />
         
        

//           {/* Regular routes with header/footer */}
//           <Route
//             path="*"
//             element={
//               <>
//                 <Header />
//                 <main className="flex-grow">
//                   <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/event-overview" element={<EventOverview />} />
//                     <Route path="/registration" element={<Registration />} />
//                     <Route path="/timeline" element={<Timeline />} />
//                     <Route path="/jury-mentors" element={<JuryMentors />} />
//                     <Route path="/sponsorship" element={<Sponsorship />} />
//                     <Route path="/awards" element={<Awards />} />
//                     <Route path="/media-gallery" element={<MediaGallery />} />
//                     <Route path="/post-event" element={<PostEvent />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/tickets" element={<Tickets />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/checkout/:ticketType" element={<Checkout />} />
                    

//                   </Routes>
//                 </main>
//                 <Footer />
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import EventOverview from "./pages/EventOverview"
import Registration from "./pages/Registration"
import Timeline from "./pages/Timeline"
import JuryMentors from "./pages/JuryMentors"
import Sponsorship from "./pages/Sponsorship"
import Awards from "./pages/Awards"
import MediaGallery from "./pages/MediaGallery"
import PostEvent from "./pages/PostEvent"
import Contact from "./pages/Contact"
import Tickets from "./pages/Tickets"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AdminLogin from "./pages/AdminLogin"
import Dashboard from "./pages/admin/Dashboard"
import AdminRegistrations from "./pages/admin/Registrations"
import AdminSponsorships from "./pages/admin/Sponsorships"
import AdminTickets from "./pages/admin/Tickets"
import AdminMedia from "./pages/admin/Media"
import AdminSettings from "./pages/admin/Settings"
import AdminLayout from "./components/admin/layout/AdminLayout"
import Checkout from "./pages/Checkout"
import { Toaster } from "react-hot-toast"
import "./index.css"

function App() {
  return (
    <Router>
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
          {/* Admin routes without header/footer */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin routes with admin layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="registrations" element={<AdminRegistrations />} />
            <Route path="sponsorships" element={<AdminSponsorships />} />
            <Route path="tickets" element={<AdminTickets />} />
            <Route path="media" element={<AdminMedia />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Regular routes with header/footer */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/event-overview" element={<EventOverview />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/jury-mentors" element={<JuryMentors />} />
                    <Route path="/sponsorship" element={<Sponsorship />} />
                    <Route path="/awards" element={<Awards />} />
                    <Route path="/media-gallery" element={<MediaGallery />} />
                    <Route path="/post-event" element={<PostEvent />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/tickets" element={<Tickets />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/checkout/:ticketType" element={<Checkout />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App


