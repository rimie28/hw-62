import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <nav className="p-3 navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
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
    </div>
  )
}

export default App
