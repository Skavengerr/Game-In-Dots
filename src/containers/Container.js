import {connect} from 'react-redux'
import {changeMode, changeName, endGame, fetchLeadersData} from '../store/actions'

import Game from '../components/Game'

const mapStateToProps = state => {
    return {
        mode:    state.game.mode,
        name:    state.game.name,
        start:   state.game.start,
        leaders: state.game.leaders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeMode: options => {
            dispatch(changeMode(options))
        },
        changeName: options => {
            dispatch(changeName(options))
        },
        endGame: options => {
            dispatch(endGame(options))
        },
        fetchLeaders: options => {
            dispatch(fetchLeadersData(options))
        },
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Game)

export default Container
