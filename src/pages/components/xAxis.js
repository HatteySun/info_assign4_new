//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate




// function XAxis(props){
//     const { xScale, height, width, axisLable } = props;
//     //Note:
//     //1. XAxis works for two cases: the xScale is linear (i.e., scatter plot) and the xScalse is discrete (i.e., bar chart)
//     //2. you can use typeof(xScale.domain()[0]) to decide the return value
//     //3. if typeof(xScale.domain()[0]) is a number, xScale is a linear scale; if it is a string, it is a scaleBand.
    
//     if(xScale) {
//         return <g>
//         {/* //the if(xScale){...} means when xScale is not null, the component will return the x-axis; otherwise, it returns <g></g>
//         //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
//         //all your code should be put in this block. Remember to use typeof check if the xScale is linear or discrete. */}
//         </g>
//     }else {
//     return <g></g>
// }
// }

// import

// function XAxis(props) {
//     const { xScale, height, width, axisLabel } = props;
//     const ref = useRef();

//     useEffect(() => {
//         if (xScale) {
//             const axisGenerator = d3.axisBottom(xScale);
//             const axis = d3.select(ref.current);
//             axis.call(axisGenerator);
//         }
//     }, [xScale]);

//     if (xScale) {
//         const isLinear = typeof(xScale.domain()[0]) === 'number';
//         // assume it's always linear for the scatter plot
//         return (
//             <g ref={ref} transform={`translate(0,${height})`}>
//                 <text
//                     style={{ textAnchor: 'middle', fontSize: '15px' }}
//                     x={width / 2}
//                     y={40} 
//                 >
//                     {axisLabel}
//                 </text>
//             </g>
//         );
//     } else {
//         return <g></g>;
//     }
// }



import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function XAxis(props) {
    const { xScale, height,axisLabel, width, margin } = props;
    const ref = useRef();

    useEffect(() => {
        const axisGenerator = d3.axisBottom(xScale).tickSizeOuter(0);
        const axis = d3.select(ref.current);
        axis.call(axisGenerator);


        // Check if made up of strings (band scale) or numbers (linear scale)
        const isBandScale = typeof xScale.domain()[0] === 'string';

        if (isBandScale) {
            // Apply a translation to center the labels under the ticks
            axis.selectAll(".tick text")
                .style("text-anchor", "middle") 
                .attr("transform", "rotate(90)") 
                .attr("dy", "-0.5em") 
                .attr("x", "65"); 
        } 
        else {
            axis.selectAll('.tick text')
                .style('text-anchor', 'middle')
                .attr('dx', '0em')
                .attr('dy', '0.5em')
                .attr('transform', 'rotate(0)');
        }
    }, [xScale, height]);

    return (
        // <g ref={ref} transform={`translate(0,${height})`} className="x-axis" />
        <g ref={ref} transform={`translate(0,${height})`} className="x-axis">
            {axisLabel && (
                <text
                    style={{ textAnchor: "middle", fontSize: "15px",fill: 'black' }}
                    // transform={`translate(${width / 2}, -10)`} // Adjust the Y offset as needed
                    transform={`rotate(0) translate(490,-5)`}
                    >
                    {axisLabel}
                </text>
            )}
        </g>
       
    );
}

export default XAxis;

