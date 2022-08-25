import '../styles/Sidebar.scss'
import StickyBox from 'react-sticky-box'
import Profile from './Profile'
import Suggestion from './Suggestion'
import Footer from './Footer'
import image from '../images/avatar.jpg'

function Sidebar() {

  return (
    <div style={{display: "flex", alignItems: "flex-start"}}>
      <StickyBox offsetTop={ 60 }>
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
      </StickyBox>
    </div>
  )
}

export default Sidebar