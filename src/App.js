import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import DoughnutChart from './view/Doughnut Chart';
import SplineChart from './view/spline';
import Distance from './view/distance';


export default class App extends React.Component{
    constructor(){
      super();
      this.state = {
        result : []
      };
    };
    componentDidMount(){
        axios.get("http://localhost:8080/fetch")
             .then((posRes)=>{
				 console.log("hello",posRes);
                this.setState({
                  result:posRes.data
                })
             },(errRes)=>{
            console.log(errRes);
        });
    };
    render(){
      return(
        <div className="App">
				
				<div>
				<div> <SplineChart resuProp = {this.state.result} /></div>
				 <div> <DoughnutChart resuProp = {this.state.result} /></div>
				
				 <Distance resuProp = {this.state.result} />
				 </div>
	
        </div>
      )
    };
};