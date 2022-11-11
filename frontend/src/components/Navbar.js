import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src='./img/logo.png' className="logo" alt='logo'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            {user && (
            <>
              <span className="p-2">{user.email}</span>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">A propos de</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/courses">Cours</Link>
              </li>
              <li className="nav-item">
                <button to='/logout' className="nav-link border-0 bg-light" onClick={handleClick}>Déconnexion</button>
              </li>
            </>
            )}
            {!user && (
                <>
                <li className="nav-item ">
                <Link className="nav-link" to="/login">Connexion</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">S'inscrire</Link>
                </li>
                </>
              )}
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar