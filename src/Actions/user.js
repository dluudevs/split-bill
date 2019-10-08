// export const setSignedIn = (user) => ({
//     type: 'SET_SIGN_IN',
//     user
// })

// destructure the uid property from user object, if user is not object, default to empty object and default to 0 if property is undefined.
export const getUid = ({uid = 0} = {}) => ({
    type: 'GET_UID',
    uid
})

export const getUsername = ({displayName = ""} = {}) => ({
    type: 'GET_USERNAME',
    name: displayName
})

// const objA = { uid: 123 }
// const { uid } = objA