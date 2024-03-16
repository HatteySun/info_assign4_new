


// function YAxis(props){
//     const { yScale, height, axisLable } = props;
//     if(yScale){
//         return <g>
            
//         {/* //the if(yScale){...} means when xScale is not null, the component will return the y-axis; otherwise, it returns <g></g>
//         //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
//         //all your code should be put in this block. Remember to use typeof check if the xScale is linear or discrete. */}
   
//             <text style={{ textAnchor:'end', fontSize:'15px'}} transform={`translate(20, 0)rotate(-90)`}>
//                 {axisLable}
//             </text>
//         </g>
//     } else {
//         return <g></g>
//     }

// }
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function YAxis(props){
    const { yScale, height, axisLabel } = props;
    console.log("YAxis props:", props);
    const ref = useRef();

    useEffect(() => {
        if(yScale){
            const axisGenerator = d3.axisLeft(yScale);
            const axis = d3.select(ref.current);
            axis.call(axisGenerator)
            console.log(yScale);
        }
    }, [yScale]);

    if(yScale){
        // console.log("this if has been run")
        return <g ref={ref}>
            <text 
                style={{ textAnchor: 'end', fontSize: '15px', fill: 'black'}} 
                // transform={`translate(-30, ${height/2})rotate(-90)`}
                // transform={`translate(20, 10)`}
                // transform={`rotate(-90) translate(-${height}, 0)`}
                transform={`rotate(-90) translate(0, 20)`}

            >
                {axisLabel}
            </text>
            {/* <text x="0" y="0" style={{ fill: 'black' }}>Test Label</text> */}
        </g>;
    } else {
        console.log("this else has been run")
        return <g></g>;
    }
}

export default YAxis;
