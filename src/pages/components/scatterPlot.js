// import XAxis from './XAxis';
// import YAxis from './YAxis';
// import Points from './Points';
import xAxis from './xAxis';
import yAxis from './yAxis';
import points from './points';

// function ScatterPlot(props){
//     const { offsetX, offsetY, data, xScale, yScale, height, width } = props;
//     //task1: transform the <g> with the offsets so that the barchart can show properly 
//     //task2: import the components needed and uncomment the components in the return 
//     return <g>
//            {/* <Points data={data} xScale={xScale} yScale={yScale} height={height} width={width} />
//            <YAxis yScale={yScale} height={height} axisLable={"Trip duration end in"}/>
//            <XAxis xScale={xScale} height={height} width={width} axisLable={"Trip duration start from"}/> */}
//         </g>
// }

function ScatterPlot(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width, hoveredStation, setHoveredStation, setTooltipContent, setTooltipX, setTooltipY} = props;
    // console.log("scatter plot is called.")
    return (
        <g transform={`translate(${offsetX},${offsetY})`}>
            <points data={data} xScale={xScale} yScale={yScale} height={height} width={width} hoveredStation={hoveredStation} 
                setHoveredStation={setHoveredStation} setTooltipContent={setTooltipContent}
                setTooltipX={setTooltipX}
                setTooltipY={setTooltipY}/>
            <yAxis yScale={yScale} height={height} axisLabel={"Trip duration end in"}/>
            <xAxis xScale={xScale} height={height} width={width} axisLabel={"Trip duration start from"}/>
        </g>
    );
}

export default ScatterPlot