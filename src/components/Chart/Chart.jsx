import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'

export default class Chart extends Component {
  constructor(props) {
      super(props);
      console.log(props.par);
      console.log(props.data);
      this.data2 = props.par;
      this.data = props.data;
   //this.colorPickerRef = React.createRef();
  }

  render() {
    var chartOptions = {
      scales: {
        yAxes: [{
	  gridLines: {
            display: false
          },
          ticks: {
	    stepSize: 3
          }
        }],
        yAxes: [{
	  gridLines: {
            display: false
          },
          ticks: {
	    stepSize: 3
          }
        }]
      }
    }

    return (
      <div>
        <Line ref="chart" data={this.data} options={chartOptions} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}
