import {connect} from 'react-redux'
import {changeMode} from '../store/actions'

import Game from '../components/Game'

const mapStateToProps = state => {
    return {
        mode: state.game.mode,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeMode: options => {
            dispatch(changeMode(options))
        },
    }
}

const RequestsContainer = connect(mapStateToProps, mapDispatchToProps)(Game)

export default RequestsContainer
