import {CHANGEMODE} from '../actions'

const initialState = {
    mode: '',
}

export const game = (state = initialState, action) => {
    switch (action.type) {
        case CHANGEMODE: {
            return {
                ...state,
                mode: action.options,
            }
        }
        default: {
            return state
        }
    }
}
