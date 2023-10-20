import React, { useState } from 'react';

const Home = () => {
    const playerList = ["Player1", "Player2"];
    const [isOdd, setIsOdd] = useState(true);
    const [cellArray, setCellArray] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false });

    return (
        <div className='home'>
            <div className='playground'>
                <div className='notification'>
                    <h1>{playerList[isOdd ? 0 : 1]} turn!</h1>
                </div>
                <div className='board'>
                    {cellArray && Object.keys(cellArray).map((idx) => (
                        <div key={idx} className='cell' onClick={() => {
                            setIsOdd((prev) => !prev);
                            setCellArray({ ...cellArray, [idx]: true });
                        }}>
                            {cellArray[idx] === true ? (
                                isOdd ? <div className="circle">hi</div> : <div className="cross">hi</div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
            <div className='results'></div>
        </div>
    );
}

export default Home;
