
import React,{Component} from 'react'

class Form extends Component{
  render(){
   
    return (
      <div className="Form">
        <form onSubmit={this.props.getweather}>
            <input type="text" name="country" id="country"/>
            <input type="text" name="city" id="city"/>
            <input type="submit"  value=" Weather"/>
        </form>
      </div>
    );
  }
}



export default Form;
