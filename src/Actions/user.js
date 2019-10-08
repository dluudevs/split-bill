// export const setSignedIn = (user) => ({
//     type: 'SET_SIGN_IN',
//     user
// })

// destructure the uid property, if property is not provided default to 0
export const getUid = ({uid} = 0) => ({
    type: 'GET_UID',
    uid
})

// destructure the uid property, if property is not provided default to ''
export const getUsername = ({displayName} = '') => ({
    type: 'GET_USERNAME',
    name: displayName
})
