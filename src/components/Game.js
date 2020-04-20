import React from 'react'

import LeaderBoard from '../components/LeaderBoard'
import HeaderMenu from '../components/HeaderMenu'
import Field from '../components/Field'

function Game() {
    return (
        <div className='flex justrify-between mt-48 p-24'>
            <div className='w-1/2 h-full border-2'>
                <HeaderMenu />
                <Field />
            </div>
            <div className='w-1/2 h-full border-2'>
                <LeaderBoard />
            </div>
        </div>
    )
}

export default Game
