import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class SplineChart extends Component {
	render() {
		var resarr=[];
		var result=this.props.resuProp;
         var speed=0;
		result.map((e,i)=>
		{       speed=e.distance/e.time;
			resarr.push({ x: new Date(e.date), y: speed })
		})
		const options = {
			animationEnabled: true,
			title:{
				text: "daily speed graph"
			},
			
				 axisX:{
       
        valueFormatString:  "hh:mm TT"   // move comma to change formatting
     
			},
			axisY: {
				title: "speed in km",
				
				includeZero: false
			},
			data: [{
			
				type: "spline",
				dataPoints:resarr
			}]
		}
		
		return (
		<div>
			
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SplineChart;                           