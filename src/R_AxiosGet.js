import React, { Component } from 'react';
import axios from 'axios';

class R_AxiosGet extends Component{
    componentDidMount(){
        axios.get('https://data.jsontest.com/')
        .then(response => {alert(response.date.date)})
    }

    render(){
        return(
            <h1>axios get</h1>
        )
    }
}

export default R_AxiosGet;