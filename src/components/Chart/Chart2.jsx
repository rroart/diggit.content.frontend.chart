import React, { PureComponent } from 'react';

import {
  AreaChart, Area, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

export default class Chart2 extends PureComponent {
  constructor(props) {
      super(props);
      this.name = props.name;
      this.data = props.data;
      this.defs = props.defs;
      console.log(this.defs);
  }
    
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <AreaChart
        width={500}
        height={300}
        data={this.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="name" axisLine={false} tickLine={false}/>
        <YAxis type="number" tickSize={3} axisLine={false} tickLine={false}/>
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Area name={this.name} type="monotone" dataKey="uv" stroke="#0" fillOpacity={1} fill="url(#colorUv)"/>
	<defs>
	  {this.defs}
	  </defs>
      </AreaChart>
    );
  }
}

