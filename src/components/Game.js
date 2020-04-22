import React from 'react'

import LeaderBoard from '../components/LeaderBoard'
import HeaderMenu from '../components/HeaderMenu'
import Field from '../components/Field'

function Game(props) {
    return (
        <div className='flex justrify-between mt-48 p-24'>
            <div className='w-1/2 h-full border-2'>
                <HeaderMenu
                    name={props.name}
                    start={props.start}
                    mode={props.mode}
                    changeMode={props.changeMode}
                    changeName={props.changeName}
                />
                <Field
                    fetchLeaders={props.fetchLeaders}
                    name={props.name}
                    start={props.start}
                    endGame={props.endGame}
                    mode={props.mode}
                />
            </div>
            <div className='w-1/2 h-full border-2'>
                <LeaderBoard
                    fetchLeaders={props.fetchLeaders}
                    leaders={props.leaders}
                    start={props.start}
                />
            </div>
        </div>
    )
}

export default Game
