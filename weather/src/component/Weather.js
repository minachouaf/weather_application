
import React,{Component} from 'react'

class Weather extends Component{
  render(){
    return (
      <div className="Weather">
      {this.props.data.temerature && <p>temerature:{this.props.data.temperature}</p>}
      {this.props.data.humidity && <p>humidity:{this.props.data.humidity}</p>}
      {this.props.data.description && <p>description:{this.props.data.description}</p>}
      {this.props.data.city && <p>city:{this.props.data.city}</p>}
      {this.props.data.contry && <p>country:{this.props.data.contry}</p>}
      {this.props.data.error && <p>{this.props.data.error}</p>}
      </div>
    );
  }
}



export default Weather;
