import '../styles/Cards.scss'
import Stories from './Stories'
import Card from './Card'

function Cards() {
  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "therealadamsavage",
      text: "Like!",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ]

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ]

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "Love this!",
      id: 5,
    },
  ]

  return (
    <div className="cards">
      <Stories />
      <Card 
        profileName="rafagrassetti" 
        storyBorder={ true } 
        image="https://razumnotravel.ru/wp-content/uploads/2019/02/maxresdefault-min-1.jpg" 
        comments={ commentsOne } 
        linkedByText="dadatlacak" 
        lidedByNumber={ 59 } 
        hours={ 15 }
      />
      <Card 
        profileName="rafagrassetti" 
        storyBorder={ true } 
        image="https://images6.alphacoders.com/943/943105.jpg" 
        comments={ commentsOne } 
        linkedByText="dadatlacak" 
        lidedByNumber={ 36 } 
        hours={ 9 }
      />
      <Card 
        profileName="rafagrassetti" 
        storyBorder={ true } 
        image="http://almode.ru/uploads/posts/2021-06/1624031449_21-almode_ru-p-dom-v-lesu-u-ozera-23.jpg" 
        comments={ commentsOne } 
        linkedByText="dadatlacak" 
        lidedByNumber={ 87 } 
        hours={ 3 }
      />
    </div>
  )
}

export default Cards