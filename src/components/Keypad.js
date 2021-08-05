// Code Keypad Component Here
import React, { Component } from 'react' 
// import EyesOnMe from './EyesOnMe'



class Keypad extends Component {

    handleUp = () => {
        console.log('Entering password...')
    }

    render(){
        return (
        <div>
            <input onKeyUp={this.handleUp} type="password" /> 
        </div> 
            
        )
    }
}

export default Keypad