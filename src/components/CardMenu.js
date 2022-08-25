import '../styles/Card-menu.scss'
import { ReactComponent as Inbox } from "../images/icon-inbox.svg";
import { ReactComponent as Comments } from "../images/icon-comments.svg";
import { ReactComponent as Notifications } from "../images/icon-notifications.svg";
import { ReactComponent as Bookmark } from "../images/icon-bookmark.svg";

function CardMenu() {
  return (
    <div className="card-menu">
      <div className="card-menu__interactions">
        <Notifications className="card-menu__icon" />
        <Comments className="card-menu__icon" />
        <Inbox className="card-menu__icon" />
      </div>
      <Bookmark className="card-menu__icon" />
    </div>
  )
}

export default CardMenu