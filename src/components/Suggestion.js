import '../styles/Suggestion.scss'
import Profile from './Profile'

function Suggestion() {
  return (
    <div className="suggestion">
      <div className="suggestion__wrapper">
        <div className="suggestion__title">Suggestions For You</div>
        <a className="suggestion__link" href="/">See All</a>
      </div>
      <Profile 
        caption="Followed by mapvault + 3 more" 
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={ true } />
      <Profile 
        caption="Followed by mapvault + 3 more" 
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={ true } />
      <Profile 
        caption="Followed by mapvault + 3 more" 
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={ true } />
    </div>
  )
}

export default Suggestion