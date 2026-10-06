import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutDinka from './pages/AboutDinka'
import Culture from './pages/Culture'
import Articles from './pages/Articles'
import HistoryArticle from './pages/HistoryArticle'
import Contact from './pages/Contact'
import Donation from './pages/Donation'
import CultureArticle from './pages/CultureArticle'
import IdentityArticle from './pages/IdentityArticle'
import MigrationArticle from './pages/MigrationArticle'
import CattleArticle from './pages/CattleArticle'
import CommunityArticle from './pages/CommunityArticle'
import Gallery from './pages/Gallery'

function App() {
  return (
    <div className="website">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/about-dinka"
          element={<AboutDinka />}
        />

        <Route
          path="/culture"
          element={<Culture />}
        />

        <Route
          path="/articles"
          element={<Articles />}
        />
        <Route path="/history-article" element={<HistoryArticle />} />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route path="/culture-article" element={<CultureArticle />} />

        <Route path="/migration-article" element={<MigrationArticle />} />

        <Route path="/cattle-article" element={<CattleArticle />} />

        <Route path="/community-article" element={<CommunityArticle />} />

        <Route path="/identity-article" element={<IdentityArticle />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route
        
          path="/donation"
          element={<Donation />}
        />

         </Routes>

      <Footer />

    </div>
  )
}

export default App