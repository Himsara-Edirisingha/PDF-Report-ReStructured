import React from 'react'
import { Text, View, G, Svg, Path, Rect } from '@react-pdf/renderer';


const calculatePieSlice = (x, y, radius, startAngle, endAngle) => {
    const radians = (degrees) => (degrees * Math.PI) / 180;
    const startX = x + radius * Math.cos(radians(startAngle));
    const startY = y + radius * Math.sin(radians(startAngle));
    const endX = x + radius * Math.cos(radians(endAngle));
    const endY = y + radius * Math.sin(radians(endAngle));
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `
      M ${x} ${y}
      L ${startX} ${startY}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
      Z
    `;
};

const PieChart = ({ data, centerX, centerY, radius }) => {
    const total = data.reduce((sum, item) => sum + parseFloat(item.count), 0);
    let cumulativeAngle = 0;

    const paths = [];
    const labels = [];
    const legendItems = [];

    data.forEach((item, index) => {
        const sliceAngle = (parseFloat(item.count) / total) * 360;
        const startAngle = cumulativeAngle;
        const endAngle = startAngle + sliceAngle;
        cumulativeAngle = endAngle;

        const midAngle = startAngle + sliceAngle / 2;
        const radians = (degrees) => (degrees * Math.PI) / 180;
        const labelX = centerX + (radius / 1.5) * Math.cos(radians(midAngle));
        const labelY = centerY + (radius / 1.5) * Math.sin(radians(midAngle));

        const path = calculatePieSlice(centerX, centerY, radius, startAngle, endAngle);

        paths.push(
            <Path
                key={`slice-${index}`}
                d={path}
                fill={item.colour}
                stroke="#000"
                strokeWidth={0.5}
            />
        );

        labels.push(
            <Text
                key={`label-${index}`}
                x={labelX}
                y={labelY}
                fontSize="10"
                fill="#000"
                textAnchor="middle"
            >
                {`${((item.count / total) * 100).toFixed(1)}%`}
            </Text>
        );
        legendItems.push(
            <G key={`legend-${index}`} transform={`translate(10, ${index * 20})`}>
                <Rect x={0} y={0} width={15} height={15} fill={item.colour} />
                <Text
                    x={20}
                    y={12}
                    
                    style={{letterSpacing:0,fontSize:10}}
                    fill="#000"
                >
                    {item.label}
                </Text>
            </G>
        );
    });

    return (
        <Svg height={radius * 2} width={radius * 2 + 100}>
            <G>
                {paths}
                {labels}
            </G>
            <G transform={`translate(${radius * 2 + 10}, ${10})`}>
                {legendItems}
            </G>
        </Svg>
    );
};

const AddPieChart = ({ data, centerX, centerY, radius, left = 0 }) => {
    return (
        <View style={[ { left: left}]} >
            <PieChart data={data} centerX={100} centerY={100} radius={100} />
        </View>
    );
}

export default AddPieChart