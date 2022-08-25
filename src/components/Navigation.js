import '../styles/Navigation.scss'
import '../styles/Search.scss'
import logo from '../images/logo.png'
import iconSearch from '../images/icon-search.png'
import Menu from './Menu'

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="navigation__wrapper">
          <img className="navigation__logo" src={ logo } alt="myinstagram logo" />
          <div className="search">
            <img className="search__icon" src={ iconSearch } alt="search icon" />
            <span className="search__text">Search</span>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Navigation