import { Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home.tsx';
import AboutUs from './Components/AboutUs.tsx';
import Contacts from './Components/Contacts.tsx';

function App() {

  return (
    <div style={{width: '100%', height: '100%'}}>
      <nav className="p-3 m-0 navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({isActive}) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/aboutus"
                  className={({isActive}) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contacts"
                  className={({isActive}) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
      </nav>

      <div style={{width: '100%', height: '100%'}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default App
