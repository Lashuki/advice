
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice")

      ////აქსიოსის დროს აღარ გვჭირდება პირდაპირ json ბრუნდება
      // const data = await response.json()
      console.log(response)
      setPost(response.data.slip)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getPost()

  }, [])


  console.log(post);


  return (
    <div className='hero'>
      <div className='appear'>
        <p className='mainId'>
          avice  #{post.id}
        </p>
        <div className='ma_div'>
          <p className='mainText'>
            {post.advice}
          </p>
          <div className='main_div'>
            <div className='line'></div>
            <div className='mm_div'>
              <img className='pr' src="./Group.svg" alt="" />
            </div>
            <div className='line'></div>
          </div>
          <img onClick={getPost} className='btn' src="./btn.svg" alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default App
