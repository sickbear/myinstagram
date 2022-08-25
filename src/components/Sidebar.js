import '../styles/Sidebar.scss'
import Sticky from "react-sticky-el";
import Profile from './Profile'
import Suggestion from './Suggestion'
import Footer from './Footer'
import image from '../images/avatar.jpg'

function Sidebar() {
  return (
    <Sticky topOffset={ -80 }>
      <div className="sidebar">
        <Profile 
          username="e.suloev" 
          caption="Eugene Suloev" 
          urlText="Switch" 
          iconSize="big" 
          image={ image } 
        />
        <Suggestion />
        <Footer />
      </div>
    </Sticky>
  )
}

export default Sidebar