import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class DoughnutChart extends Component {
	render() {

		var risk=0;
		var moderate=0;
		var safe=0;
		var result=this.props.resuProp;
		 var speed=0;
		result.map((e,i)=>
		{     speed=e.distance/e.time;
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
				text: "Time Graph(Hrs)"
			},
			subtitles: [{
				text: "Total - "+ result.length,
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				
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

export default DoughnutChart;