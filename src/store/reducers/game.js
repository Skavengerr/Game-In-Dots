import {CHANGEMODE, CHANGENAME, ENDGAME, FETCH_LEADERS_DATA} from '../actions'

const initialState = {
    mode: '',
    name: '',
    start: false,
    leaders: []
}

export const game = (state = initialState, action) => {
    switch (action.type) {
        case CHANGEMODE: {
            return {
                ...state,
                mode: action.options,
            }
        }
        case CHANGENAME: {
            return {
                ...state,
                name: action.name,
                start: true,
            }
        }
        case ENDGAME: {
            return {
                ...state,
                start: false,
            }
        }
        case FETCH_LEADERS_DATA:
            return {
                ...state,
                leaders: action.data
            }
        default: {
            return state
        }
    }
}
