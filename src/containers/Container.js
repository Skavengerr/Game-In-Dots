import {connect} from 'react-redux'
import {increment, decrement, reset} from '../store/actions'

import Game from "../components/Game";

const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: options => {
            dispatch(increment(options))
        },
        decrement: options => {
            dispatch(decrement(options))
        },
        reset: options => {
            dispatch(reset(options))
        },
    }
}

const RequestsContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default RequestsContainer
