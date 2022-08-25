import '../styles/Card.scss'
import Profile from './Profile'
import { ReactComponent as CardButton } from '../images/card-button.svg'
import CardMenu from './CardMenu'
import Comment from './Comment'

function Card(props) {
  const {
    storyBorder,
    image,
    comments,
    likedByText,
    lidedByNumber,
    hours
  } = props
  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={ storyBorder } />
        <CardButton className="card__button" />
      </header>
      <img className="card__img" src={ image } alt="" />
      <CardMenu />
      <div className="card__likedby">
        <Profile iconSize="small" hideProfileName={ true } />
        <span>
          Liked by <strong>{ likedByText }</strong> and <strong>{ lidedByNumber } others</strong>
        </span>
      </div>
      <div className="card__comment">
        { comments.map(comment => {
          return (
            <Comment 
              key={ comment.id }
              profileName={ comment.user }
              comment={ comment.text } 
            />
          )
        }) }
      </div>
      <div className="card__time-posted">{ hours } HOURS AGO</div>
      <div className="card__add-comment">
        <div className="card__comment-text">Add a comment...</div>
        <div className="card__post-text"></div>
      </div>
    </div>
  )
}

export default Card