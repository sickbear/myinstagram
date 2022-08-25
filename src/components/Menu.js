import '../styles/Menu.scss'
import { ReactComponent as Home } from '../images/icon-home.svg'
import { ReactComponent as Inbox } from '../images/icon-inbox.svg'
import { ReactComponent as Explore } from '../images/icon-explore.svg'
import { ReactComponent as Notification } from '../images/icon-notifications.svg'
import image from '../images/avatar.jpg'
import ProfileIcon from './ProfileIcon'

function Menu () {
  return (
    <div className="menu">
      <Home className="menu__icon" />
      <Inbox className="menu__icon" />
      <Explore className="menu__icon" />
      <Notification className="menu__icon" />
      <ProfileIcon iconSize="small" image={ image } storyBorder={ true } />
    </div>
  )
}

export default Menu