import {createMuiTheme} from '@material-ui/core/styles'

export default createMuiTheme({
    overrides: {
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: 'B0BEC5',
                    borderColor: 'B0BEC5',
                },
            },
        },
        MuiOutlinedInput: {
            root: {
                '&$focused $notchedOutline': {
                    borderColor: '#B0BEC5',
                },
            },
        },
        MuiButton: {
            root: {
                '&:disabled': {
                    color: '#767676',
                },
            },
        },
    },
})
