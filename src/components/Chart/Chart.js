import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
    return <div className="chart">
        {props.dataPoint.map(dataPoint=><ChartBar value={dataPoint.value} maxValue={null} label={dataPoint.label}  />)}
    </div>
}

export default Chart