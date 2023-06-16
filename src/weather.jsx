import React from 'react'
import backgroundimg from './bg.jpg'
const newstyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundImage: `url(${backgroundimg})`,
  backgroundRepeat: 'no-repeat'
}
 const nstyle={
  marginTop:400,
  justifyContent:'space-between'
}
const wstyle={
  marginRight:300,
  marginTop:500,

}
// const WeatherStyle={
//   Width:'100%',
//   height:"400px",
//   backgroundImage: `url(${backgroundimg})`,
// }


function Weather({ climate, wind, name }) {
  return (
    <div style={newstyle}>
      {climate.map((climate) => {
        return (
          <div >
            <h2 style={nstyle}>main:{climate.main}</h2>
            <h2>id:{climate.id}</h2>
            <h2>description:{climate.description}</h2>
          </div>
        )
      })}
      <h2 style={{align:'center', marginTop:80}}>Country's Name:{name}</h2>
      <h2 style={wstyle} >wind speed:{wind.speed}</h2>
    </div>
  )

}


export default Weather


