
// function BarChart(props){
//     const {offsetX, offsetY, data, xScale, yScale, height, width} = props;
//     //task1: transform the <g> with the offsets so that the barchart can show properly 
//     //task2: import the components needed and uncomment the components in the return 
//     return <g>
//         {/* <Bars data={data} xScale={xScale} yScale={yScale} height={height}/>
//         <YAxis yScale={yScale} height={height} axisLable={"Bikers star from"}/>
//         <XAxis xScale={xScale} height={height} width={width} /> */}
//         </g>
// }

import React from 'react';
import Bars from './Bars'; 
import XAxis from './XAxis'; 
import YAxis from './YAxis'; 

function BarChart(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width, hoveredStation, setHoveredStation } = props;
    return (
        <g transform={`translate(${offsetX},${offsetY})`}>
            <Bars data={data} xScale={xScale} yScale={yScale} height={height} hoveredStation={hoveredStation} 
                setHoveredStation={setHoveredStation}/>
            <YAxis yScale={yScale} height={height} axisLabel={"Bikers start from"}/>
            <XAxis xScale={xScale} height={height} width={width} axisLabel={""} /> 
        </g>
    );
}


export default BarChart