import React, { PureComponent } from 'react';

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
      name: "Jun '19", uv: 5
  },
  {
      name: "Jul '19", uv: 1
  },
  {
      name: "Aug '19", uv: 9
  },
  {
      name: "Sep '19", uv: 6
  },
  {
      name: "Oct '19", uv: 7
  },
  {
      name: "Nov '19", uv: 0.1
  },
  {
      name: "Dec '19", uv: 8
  },
];

export default class Chart2 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <AreaChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="name" axisLine={false} tickLine={false}/>
        <YAxis type="number" tickSize={3} axisLine={false} tickLine={false}/>
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Area name="Companies" type="monotone" dataKey="uv" stroke="#0" fillOpacity={1} fill="url(#colorUv)"/>
	<defs>
	  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f853e7" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#f853e7" stopOpacity={0}/>
       </linearGradient>
	  </defs>
      </AreaChart>
    );
  }
}

