

// function Bars(props) {
//     const {data, xScale, yScale, height} = props;

//     //Note: 
//     //the if(data){...} means when data is not null, the component will return the bars; otherwise, it returns <g></g>
//     //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
//     if(data){
//         return <g>
//             {/* {task:
//                     1. remove this comments and put your code here
//                     2. pay attention to the height of the bars, it should be height-yScale(d.start)} */}
//             </g>
//     } else {
//         return <g></g>
//     }
// }

// export default Bars
import React, { useState } from 'react';
import * as d3 from 'd3';


function Bars(props) {
    const { data, xScale, yScale, height, hoveredStation, setHoveredStation} = props;
    // const [hoveredStation, setHoveredStation] = useState(null);

    // Function to determine the color of the bar
    const getColor = (station) => {
        return station === hoveredStation ? 'red' : 'steelblue';
    };

    // Mouse event handlers
    const handleMouseEnter = (station) => {
        setHoveredStation(station);
    };

    const handleMouseOut = () => {
        setHoveredStation(null);
    };

    if (!data) {
        return <g></g>;
    }

    return (
        <g>
            {data.map((d, index) => {
                return (
                    <rect
                        key={index}
                        x={xScale(d.station)}
                        y={yScale(d.start)}
                        width={xScale.bandwidth()}
                        height={height - yScale(d.start)}
                        fill={getColor(d.station)}
                        onMouseEnter={() => handleMouseEnter(d.station)}
                        onMouseOut={handleMouseOut}
                    />
                );
            })}
        </g>
    );
}

export default Bars;



