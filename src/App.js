
// Import React Components
import React, { useContext } from 'react'
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

  const LanguageContext = React.createContext({
    language: "EN",
    setLanguage: () => { }
  })

  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const item = localStorage.getItem("kahvi")

  if(item === process.env.REACT_APP_TEST_PASSWORD || prompt("Password") === process.env.REACT_APP_TEST_PASSWORD) {

    if(!item) localStorage.setItem("kahvi", process.env.REACT_APP_TEST_PASSWORD)

    return (
      <Router>
          <div className="App">
          <LanguageContext.Provider>
          <Navigation />
              <br />
              <Routes>
                <Route path="/" element={<Mainpage/>}/>
                <Route path="/events" element={<EventsPage/>} />
                <Route path="/board" element={<BoardPage/>} />
                <Route path="/join" element={<JoinPage/>} />
                <Route path="*"element={<Page404 />}/>
              </Routes>
          </LanguageContext.Provider>
          </div>
      </Router>
    );
  }
  else {
    return(
      <>
        <h3>Access Denied</h3>
      </>
    )
  }
}

export default App;