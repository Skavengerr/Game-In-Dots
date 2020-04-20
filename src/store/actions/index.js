export const CHANGEMODE = 'CHANGEMODE'
export const CHANGENAME = 'CHANGENAME'

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
