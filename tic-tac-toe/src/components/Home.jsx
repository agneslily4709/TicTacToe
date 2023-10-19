import React, { useState } from 'react'

const Cell = ({firstPlayer,setFirstPlayer}) => {
        return (
                <div className='cell' onClick={()=>setFirstPlayer((prev)=>!prev)}>
                        {firstPlayer ? "Player 1":"Player 2"}
                </div>
        )
}

const Home = () => {
        const [cellText,setCellText] = useState("")
        const [firstPlayer,setFirstPlayer] = useState(false)
        const cellArray = [1,2,3,4,5,6,7,8,9]
  return (
    <div className='home'>
        <div className='playground'>
                <div className='notification'>
                        <h1>Player 1 turn</h1>
                        <h1>Player 2 turn</h1>
                </div>
                <div className='board'>
                        {cellArray.map((cell)=>
                                (
                                        <div className='cell' onClick={()=>setFirstPlayer((prev)=>!prev)}>
                                                {firstPlayer ? "Player 1":"Player 2"}
                                        </div>
                                )
                        )}
                </div>
        </div>
        <div className='results'>

        </div>
    </div>
  )
}

export default Home