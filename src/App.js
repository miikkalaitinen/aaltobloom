
// Import React Components
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Pages for Routes
import EventsPage from './pages/events/EventsPage';
import Mainpage from './pages/main/Mainpage';
import Navigation from './components/Navigation';
import BoardPage from './pages/board/BoardPage';
import JoinPage from './pages/join/JoinPage';
import Page404 from './pages/page404/Page404';

// Import Style
import 'normalize.css'
import './app.css'

function App() {

  return (
    <Router>
        <div className="App">
        <Navigation />
            <Routes>
              <Route path="/" element={<Mainpage/>}/>
              <Route path="/events" element={<EventsPage/>} />
              <Route path="/board" element={<BoardPage/>} />
              <Route path="/join" element={<JoinPage/>} />
              <Route path="*"element={<Page404 />}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;