import '../styles/Profile.scss'
import ProfileIcon from './ProfileIcon'
import users from '../data/users'

function Profile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideProfileName,
    image
  } = props

  let profileName = username ? username : users[Math.floor(Math.random() * users.length)].username

  return (
    <div className="profile">
      <ProfileIcon iconSize={ iconSize } storyBorder={ storyBorder } image={ image } />
      { 
        (profileName || caption) && !hideProfileName && (
          <div className="profile__wrapper">
            <span className="profile__name">{ profileName }</span>
            <span className={ `profile__caption ${ captionSize }` }>{ caption }</span>
          </div>
        ) 
      }
      <a href="/">{ urlText }</a>
    </div>
  )
}

export default Profile