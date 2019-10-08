// import * as firebase from 'firebase/app'
// import * as firebaseui from 'firebaseui'
// import 'firebase/auth';
// import 'firebase/database'

// var firebaseConfig = {
//     apiKey: "AIzaSyAYHYUa64-1nCyhaNAG2wGv9Kbxuh87Fng",
//     authDomain: "split-bill-dluudevs.firebaseapp.com",
//     databaseURL: "https://split-bill-dluudevs.firebaseio.com",
//     projectId: "split-bill-dluudevs",
//     storageBucket: "",
//     messagingSenderId: "509238630511",
//     appId: "1:509238630511:web:5e686a434673365ce2959a"
// };

// var uiConfig = {
//     callbacks: {
//         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//             // User successfully signed in.
//             // Return type determines whether we continue the redirect automatically
//             // or whether we leave that to developer to handle.
//             return true;
//         },
//         uiShown: function () {
//             // The widget is rendered.
//             // Hide the loader.
//             document.getElementById('loader').style.display = 'none';
//         }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',

//     // signInSuccessUrl: '<url-to-redirect-to-on-success>',
//     signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
//     ],
//     // tosUrl and privacyPolicyUrl accept either url string or a callback
//     // function.
//     // Terms of service url/callback.
//     // tosUrl: '<your-tos-url>',
//     // Privacy policy url/callback.
//     // privacyPolicyUrl: function () {
//     //     window.location.assign('<your-privacy-policy-url>');
//     // }
// };


// firebase.initializeApp(firebaseConfig);

// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#firebaseui-auth-container', uiConfig)

// export default firebase;
