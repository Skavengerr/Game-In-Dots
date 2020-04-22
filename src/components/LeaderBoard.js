import React, {useEffect} from 'react'
import {Typography} from '@material-ui/core'

function LeaderBoard({start, leaders, fetchLeaders}) {
    useEffect(() => {
        fetchLeaders()
    }, [fetchLeaders, start])

    return (
        <div className='max-w-2xl p-24 m-auto text-center'>
            <Typography variant='h4' className='text-gray mb-24'>
                Leader Board
            </Typography>
            {leaders.length &&
                leaders.map(leader => (
                    <div className='text-left m-auto max-w-xs' key={leader.id}>
                        <div className='bg-blue-gray-100 m-2 flex justify-between'>
                            <Typography className='p-8 text-16 text-gray-700'>
                                {leader.winner}
                            </Typography>
                            <Typography className='p-8 text-13 text-gray-700'>
                                {leader.date}
                            </Typography>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default LeaderBoard
