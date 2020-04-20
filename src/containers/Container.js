import {connect} from 'react-redux'
import {changeMode, changeName} from '../store/actions'

import Game from '../components/Game'

const mapStateToProps = state => {
    return {
        mode: state.game.mode,
        name: state.game.name,
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
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Game)

export default Container
