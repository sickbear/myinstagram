import '../styles/Story.scss'
import ProfileIcon from './ProfileIcon'
import users from '../data/users'

function Story() {
  let userName = users[Math.floor(Math.random() * users.length)].username

  if (userName.length > 10) {
    userName = userName.substring(0, 10) + '...'
  }

  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={ true } />
      <span className="story__name">{ userName }</span>
    </div>
  )
}

export default Story