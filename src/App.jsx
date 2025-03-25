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
import "./index.css"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

