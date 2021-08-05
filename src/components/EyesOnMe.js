// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component{

    // 2 ways you can add event handlers! 

    blur = () => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return(
            <button onFocus={() => console.log('Good!')} onBlur={this.blur}> Eyes on me, please! </button>
        )
    }

}

export default EyesOnMe