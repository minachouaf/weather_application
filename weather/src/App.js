
import React,{Component} from 'react'
import './App.css';
import Weather from './component/Weather';
import Form from './component/Form'
const api_key="3d6a1c9b08fb1497abf87c246438c5f6";
class App extends Component{
  state={
    temperature:'',
    city:'',
    contry:'',
    humidity:'',
    description:'',
    error:''

  }
  getweather=async (e)=>{
    e.preventDefault();
    const contry=e.target.elements.country.value;
    const city=e.target.elements.city.value;
    console.log(city);
    console.log(contry)
const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&c=${contry}&appid=e36ed364400282e43250b6c4c0274d44`);
const data=await api.json();
console.log(data);
if(city && contry)
{
  this.setState({
    temperature:data.main.temp,
    city:data.name,
    contry:data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error:''
    

  })
}
else{
  this.setState({

    temperature:'',
    city:'',
    contry:'',
    humidity:'',
    description:'',
    error:'no data fund'

  })

}

  }

  render(){
    return (
      <div className="App">
        <h1>weather application</h1>
        <Form getweather={this.getweather}/>
        <Weather  data={this.state}/>
      </div>
    );
  }
}



export default App;
