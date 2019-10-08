import React from 'react'
import configureStore from '../Store/configureStore.js'
import firebase from 'firebase'

// const Home = (props) => {
//     return (
//         <div>
//             <h1>Expenses</h1>
//             <a onClick={this.props.location.state.unregisterAuthObserver}>Sign-out</a>
//         </div>
//     )
// }

class Home extends React.Component {

    render(){
        return(
            <div>
                <h1>Expenses</h1>
                <button onClick={() => firebase.auth().signOut()}>Log Out</button>
            </div> 
        )
    }
}

export default Home;
