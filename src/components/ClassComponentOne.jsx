import React, { Component } from 'react'

class ClassComponentOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    incrementCount=()=>
    {
       this.setState({
           count:this.state.count+1
       })
    }
    decrementCount=()=>
    {
       this.setState({
           count:this.state.count-1
       })
    }
    resetCount=()=>
    {
       this.setState({
           count:0
       })
    }

    incrementCountByTen=()=>
    {
        for(let i=1;i<=10;i++)
        {
        this.setState(prevState=>({
           count:prevState.count+1
       }))
        }
        console.log('Updated State :',this.state.count)
    }
    render() {
        return (
            <div>
                <h3>Welcome To Class Component</h3>
                <h4>Count : {this.state.count}</h4>
                <button onClick={this.incrementCount} className='btn btn-primary'>Increment</button>
                &nbsp;
                <button onClick={this.decrementCount} className='btn btn-info'>Decrement</button>
                &nbsp;
                <button onClick={this.resetCount} className='btn btn-danger'>Reset</button>
                &nbsp;
                <button onClick={this.incrementCountByTen} className='btn btn-success'>Increment By 10</button>
                
                
            </div>
        )
    }
}

export default ClassComponentOne
