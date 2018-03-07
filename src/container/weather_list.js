import React , { Component} from "react";
import {connect} from "react-redux";

class WeatherList extends React.Component {
    // constructor(props){
    //     super(props);
    //     // this.renderWeather=this.renderWeather.bind(this)
    //
    // }
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
        return(
            <tr key={name}>
                <td>{name}</td>
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