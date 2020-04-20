import {CHANGEMODE, CHANGENAME} from '../actions'

const initialState = {
    mode: '',
    name: ''
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
            }
        }
        default: {
            return state
        }
    }
}
