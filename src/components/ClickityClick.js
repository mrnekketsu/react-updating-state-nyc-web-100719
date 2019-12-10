// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
    constructor(){
        super()
    
        this.state = {
            hasBeenClicked: false,
            count: 0
        }
    }

    handleClick = () => {
        console.log(this.state.hasBeenClicked)
        //let newCount = this.state.count + 1
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked,
                count: previousState.count + 1
            }
        })
        
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}> Click meh!</button>
            </div>
        )
    }
}

export default ClickityClick
