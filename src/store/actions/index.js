import axios from 'axios'

export const FETCH_LEADERS_DATA = 'FETCH_LEADERS_DATA'
export const CHANGEMODE = 'CHANGEMODE'
export const CHANGENAME = 'CHANGENAME'
export const ENDGAME = 'ENDGAME'


export const changeMode = options => {
    return {
        type: CHANGEMODE,
        options,
    }
}

export const changeName = name => {
    return {
        type: CHANGENAME,
        name,
    }
}

export const endGame = () => {
    return {
        type: ENDGAME,
    }
}

export const fetchData = data => {
    return {
        type: FETCH_LEADERS_DATA,
        data,
    }
}

export const fetchLeadersData = () => {
    return dispatch => {
        return axios
            .get('https://starnavi-frontend-test-task.herokuapp.com/winners')
            .then(response => {
                dispatch(fetchData(response.data.reverse()))
            })
            .catch(error => {
                throw error
            })
    }
}
