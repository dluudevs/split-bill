//hide config - config file is in git ignore but imported here
import { config } from '../config';
import React, {useState, useEffect} from 'react';
//https://github.com/firebase/firebaseui-web-react
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebaseui from 'firebaseui'
import firebase from 'firebase';
import configureStore from '../Store/configureStore.js'
import { getUid, getUsername, setSignedIn} from '../Actions/user';

// Configure Firebase.
const firebaseConfig = config.firebaseConfig;

firebase.initializeApp(firebaseConfig);
const url = window.location.href;

const uiConfig = {
    // route
    signInSuccessfulUrl: `${url}?mode=select&signInSuccessUrl=dashboard`,
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
        // save credentials to firebase on successful login - dont use local state
    }
};

const store = configureStore();

export default function SignIn (props){
    
    const [ isSignedIn, toggleSignedIn ] = useState(false);

    useEffect(() => {
        
        // if not signed in - route to home
        // if signed in - route to dashboard
            //refer to redirect docs - put the route in app router
        // state of signedin must be managed across two components

        firebase.auth().onAuthStateChanged( user => {

            // need to update state locally
                // the setter causes side-effect (updates state) which invokes useEffect and trigger re-render (login vs logout)
                // if auth listener is outside of useEffect, the below 'login render' will not be able to access redux's state before running the if statement
            toggleSignedIn(!!user);
            store.dispatch(setSignedIn(!!user));
            
            if(isSignedIn){
                // console.log('run signed in functions')
                const user = firebase.auth().currentUser;
                // // use this UID to search/create database
                store.dispatch(getUid(user));
                store.dispatch(getUsername(user));
            } else {
                // no parameters result in undefined - trigger default value in the action's parameters
                // to clear logged out user info
                store.dispatch(getUid());
                store.dispatch(getUsername());
            }
        })
    })

    if(!isSignedIn){
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }

    // show an error message if sign in doesn't work
    return (
        <div>
            <button onClick={() => firebase.auth().signOut()}>Log Out</button>
        </div>
    );
}