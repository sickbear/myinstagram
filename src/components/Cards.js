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
        image="https://randart.ru/art/JD99/wallpapers?h=1080&w=1920&q=100" 
        comments={ commentsOne } 
        linkedByText="iwantmalinka" 
        lidedByNumber={ 59 } 
        hours={ 3 }
      />
      <Card 
        profileName="mynameiszuzu" 
        storyBorder={ true } 
        image="https://randart.ru/art/JD99/wallpapers?h=1024&w=1280&q=100" 
        comments={ commentsTwo } 
        linkedByText="bluesky" 
        lidedByNumber={ 36 } 
        hours={ 9 }
      />
      <Card 
        profileName="metallikafan" 
        storyBorder={ true } 
        image="https://randart.ru/art/JD99/wallpapers?h=900&w=1600&q=100" 
        comments={ commentsThree } 
        linkedByText="mynameiszuzu" 
        lidedByNumber={ 87 } 
        hours={ 15 }
      />
    </div>
  )
}

export default Cards