import '../styles/Cards.scss'
import Stories from './Stories'
import Card from './Card'

function Cards() {
  const commentsOne = [
    {
      user: "bluesky",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "iwantmalinka",
      text: "Like!",
      id: 2,
    },
    {
      user: "metallikafan",
      text: "Niceeeee!",
      id: 3,
    },
  ]

  const commentsTwo = [
    {
      user: "mynameiszuzu",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ]

  const commentsThree = [
    {
      user: "waterfall",
      text: "Love this!",
      id: 5,
    },
  ]

  return (
    <div className="cards">
      <Stories />
      <Card 
        profileName="bluesky" 
        storyBorder={ true } 
        image="https://razumnotravel.ru/wp-content/uploads/2019/02/maxresdefault-min-1.jpg" 
        comments={ commentsOne } 
        linkedByText="iwantmalinka" 
        lidedByNumber={ 59 } 
        hours={ 3 }
      />
      <Card 
        profileName="mynameiszuzu" 
        storyBorder={ true } 
        image="https://images6.alphacoders.com/943/943105.jpg" 
        comments={ commentsTwo } 
        linkedByText="bluesky" 
        lidedByNumber={ 36 } 
        hours={ 9 }
      />
      <Card 
        profileName="metallikafan" 
        storyBorder={ true } 
        image="http://almode.ru/uploads/posts/2021-06/1624031449_21-almode_ru-p-dom-v-lesu-u-ozera-23.jpg" 
        comments={ commentsThree } 
        linkedByText="mynameiszuzu" 
        lidedByNumber={ 87 } 
        hours={ 15 }
      />
    </div>
  )
}

export default Cards