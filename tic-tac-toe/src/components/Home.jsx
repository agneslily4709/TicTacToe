import React from 'react'

const Cell = () => {
        return (
                <div>h1</div>
        )
}

const Home = () => {
  return (
    <div className='home'>
        <div className='playground'>
                <div className='notification'>
                        <h1>Player 1 turn</h1>
                        <h1>Player 2 turn</h1>
                </div>
                <div className='board'>
                        
                </div>
        </div>
        <div className='results'>

        </div>
    </div>
  )
}

export default Home