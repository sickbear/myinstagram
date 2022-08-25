import '../styles/Comment.scss'

function Comment(props) {
  const { profileName, comment } = props

  return (
    <div className="comment">
      <div className="comment__name">{ profileName }</div>
      <div className="comment__text">{ comment }</div>
    </div>
  )
}

export default Comment