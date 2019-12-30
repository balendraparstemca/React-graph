import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Distance extends Component {
	
	render() {
		var risk=0;
		var moderate=0;
		var safe=0
		var result=this.props.resuProp;
		console.log("hh2",result);
       var speed=0;
		result.map((e,i)=>
		{     speed=e.distance/e.time;
              console.log(speed);
			if(speed>70)
			{
				risk=risk+1;
			}

			else if(speed>50 && speed<70)
			{
				moderate=moderate+1;
			}
			else
			{
				safe=safe+1;
			}
		})

		const options = {
			animationEnabled: true,
			title: {
				text: "Distance  Graph(Km)"
			},
			subtitles: [{
				text: "Total - " + result.length,
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				indexLabel: "{name}: {y}",
				
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Risky", y: risk },
					{ name: "Moderate", y: moderate },
					{ name: "Safe", y: safe }
				]
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

export default Distance;