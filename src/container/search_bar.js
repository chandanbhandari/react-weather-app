import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions";

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term :''
        }
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }

    onFormSubmit(event){
        event.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({term:''})
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    value={this.state.term}
                    onChange = {event => this.setState({term :event.target.value})}
                    placeholder="ENTER CITY TO SEARCH"
                    className="form-control"
                />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary">SUBMIT</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather : fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);