import React from 'react'

const Content = () => {
  return (
    <div className='main-content'>
        <div className='left-content'>
            <h1>Hi, My name is Dhruv <br /> and i am a passionate <br /> <span>Web Developer <br />& Video Editor.</span></h1>
            <div className='btn'>
                <button className='download-btn'>Downlode</button>
                <button className='github-btn'>Vist GitHub</button>
            </div>
        </div>
        
        <div className='right-content'>
            <img src="https://plus.unsplash.com/premium_photo-1727967194388-d838e1f37dec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
        </div>
    </div>
  )
}

export default Content