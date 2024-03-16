
// function Points(props) {
//     const {data, xScale, yScale, height, width} = props;
//     //Note: 
//     //the if(data){...} means when data is not null, the component will return the points; otherwise, it returns <g></g>
//     //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
//     if(data){
//         return <g>
//         {/* task:1. remove this comments and put your code here */}

//         </g>
//     } else {
//         return <g></g>
//     }
// }


// function Points(props) {
//     const {data, xScale, yScale, height, width} = props;

//     if(data){
//         return <g>
//             {data.map((d, i) => (
//                 <circle key={i} cx={xScale(d.start)} cy={yScale(d.end)} 
//                         r={5} fill={"steelblue"} />
//             ))}
//         </g>;
//     } else {
//         return <g></g>;
//     }
// }


// export default Points;

import React, { useState } from 'react';

function Points(props) {
    const { data, xScale, yScale, hoveredStation, setHoveredStation, setTooltipContent, setTooltipX, setTooltipY } = props;

    // State hook to track the selected station.
    // const [selectedStation, setSelectedStation] = useState(null);

    // Event handlers
    // const handleMouseEnter = (station) => {
    //     setHoveredStation(station);
    // };
    const handleMouseEnter = (d, event) => {
        setHoveredStation(d.station);
        setTooltipContent(d);
        setTooltipX(event.pageX);
        setTooltipY(event.pageY);
    };

    // const handleMouseOut = () => {
    //     setHoveredStation(null);
    // };
    const handleMouseOut = () => {
        setHoveredStation(null);
        setTooltipContent(null);
        setTooltipX(null);
        setTooltipY(null);
    };


    // Helper functions to get color and radius
    const getColor = (station) => {
        return station === hoveredStation ? 'red' : 'steelblue';
    };

    const getRadius = (station) => {
        return station === hoveredStation ? 10 : 5;
    };

    return (
        <g>
            {/* Rect to cover all points if a point is selected */}
            {hoveredStation && (
                <rect width={props.width} height={props.height} fill="yellow" />
            )}

            {/* Points */}
            {data.map((d, i) => (
                <circle key={i}
                        cx={xScale(d.start)}
                        cy={yScale(d.end)}
                        r={getRadius(d.station)}
                        fill={getColor(d.station)}
                        // onMouseEnter={() => handleMouseEnter(d.station)}
                        onMouseEnter={(event) => handleMouseEnter(d, event)}
                        onMouseOut={handleMouseOut} />
            ))}

            {/* Draw selected point again to bring it in front */}
            {hoveredStation && (
                <circle cx={xScale(data.find(d => d.station === hoveredStation).start)}
                        cy={yScale(data.find(d => d.station === hoveredStation).end)}
                        r={10}
                        fill="red" />
            )}
        </g>
    );
}

export default Points;

