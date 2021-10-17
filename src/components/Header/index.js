import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import {FaHamburger} from 'react-icons/fa'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const {activeTab} = props
  const activeHome = activeTab !== 'HOME' ? 'active' : ''
  const activeCart = activeTab !== 'CART' ? 'active' : ''

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dqnh9af86/image/upload/v1633077683/Frame_274_bxujyh.png"
            alt="website logo"
          />
        </Link>
        <Link to="/" className="heading-link">
          <h1 className="heading">Tasty Kitchens</h1>
        </Link>
        <ul className="nav-menu">
          <Link to="/" className={`nav-link ${activeHome}`}>
            <li className="list-header-item">Home</li>
          </Link>
          <Link to="/cart" className={`nav-link ${activeCart}`}>
            <li className="list-header-item">Cart</li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
          testid="logout-button"
        >
          Logout
        </button>
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button">
                <FaHamburger />
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="modal-container">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  <IoMdClose size="30" color="#616e7c" />
                </button>
                <ul className="nav-link-list">
                  <li>
                    <Link
                      to="/"
                      className="nav-mobile-link"
                      onClick={() => close()}
                    >
                      <p className="nav-link-item">Home</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      className="nav-mobile-link"
                      onClick={() => close()}
                    >
                      <p className="nav-link-item">Cart</p>
                    </Link>
                  </li>
                  <button
                    type="button"
                    className="logout-mobile-btn"
                    onClick={onClickLogout}
                  >
                    Logout
                  </button>
                </ul>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
