import React , { Component} from "react";
import {connect} from "react-redux";
import {Sparklines} from "react-sparklines";

class WeatherList extends React.Component {

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(city => this.renderWeather(city))}
                </tbody>
            </table>
        )
    }

    renderWeather(cityData) {
        const name =cityData.city.name;
        const temp = cityData.list.map(weather => weather.main.temp)
        return(
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines data={temp} height={200} width={150}>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={temp} height={200} width={150}>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={temp} height={200} width={150}>
                    </Sparklines>
                </td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    return {
     weather : state.weather
    }
}

export default connect(mapStateToProps)(WeatherList)