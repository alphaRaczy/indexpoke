

import React, { Component } from 'react'
import Weather from './weather';
import './App.css';
class App extends Component {
  state = {
    name: '',
    weather: [],
    wind: {}


  }
  async weather() {
    let climate = await fetch('https://api.openweathermap.org/data/2.5/weather?id=524901&appid=1e79fe4727aa394f77067ae350e52977')
    let climateResult = await climate.json();
    console.log(climateResult)



    this.setState({
      name: climateResult.name,
      weather: climateResult.weather,
      wind: climateResult.wind

    })
  }
  componentDidMount() {
    this.weather()
  }


  render() {
    return (
      <div>
        
        <Weather climate={this.state.weather} wind={this.state.wind} name={this.state.name} />
        
      </div>
    )
  }

}
export default App

