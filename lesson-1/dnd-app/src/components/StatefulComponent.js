import React, {Component} from 'react'
import FunctionalComponent from './FunctionalComponent'

class StatefulComponent extends Component {
  constructor(){
    super()
    this.state = {
      color: ''
    }
    this.changeColor = this.changeColor.bind(this)
    this.styleFunction = this.styleFunction.bind(this)
  }
  
changeColor(){
  this.setState({...this.state, color:'red'})
}
styleFunction(){
  return(
    {color: this.state.color}
  )
}

  render(){
    return(
      <div>
        <h3 style={this.styleFunction()}>This is our stateful component</h3>
        <button onClick={this.changeColor}>Change COlor</button>
        <FunctionalComponent color = {this.state.color}/>
      </div>
    )
  }
}

export default StatefulComponent