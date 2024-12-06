import React from 'react';
import { Text, View, G, Svg,Rect, Line } from '@react-pdf/renderer';


const calculateBarHeight = (value, maxValue, chartHeight ) => {
    return (value / maxValue) * chartHeight;
};

const BarChart = ({ data, width, height,barGap =1.25 }) => {
    const maxValue = Math.max(...data.map(item => item.value));
    const barWidth = width / (data.length * 3);
    const chartHeight = height - 50;
    const y_offset = 20
    const x_offset = 40
    const yScaleCount = 12;
    const yScaleStep = maxValue / yScaleCount;
    const yScaleHeightStep = (chartHeight) / yScaleCount;

    const bars = [];
    const labels = [];
    const yScales = [];

    data.forEach((item, index) => {
        const barHeight = calculateBarHeight(item.value, maxValue, chartHeight);
        const x = ((index) * (barWidth * barGap)) + x_offset;
        const y = chartHeight - barHeight + y_offset;
        const valuelable = item.value ? item.value : "";
        bars.push(
            <Rect
                key={`bar-${index}`}
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={item.color || '#007bff'}
                stroke="#000"
                strokeWidth={0.5}
            />
        );

        labels.push(
            <Text
                key={`value-label-${index}`}
                x={x + barWidth / 2}
                y={y - 5}
                style={{letterSpacing:0,fontSize:10}}
                fill="#000"
                textAnchor="middle"
            >
                {String(valuelable)}
            </Text>
        );
        labels.push(
            <Text
                key={`x-label-${index}`}
                x={x + barWidth / 2}
                y={chartHeight + 12 + y_offset}
                style={{letterSpacing:0,fontSize:10}}
                fill="#000"
                textAnchor="middle"
            >
                {item.label}
            </Text>
        );
    });

    const xAxisEnd = (data.length - 1) * (barWidth * 1.25) + barWidth;

    for (let i = 0; i <= yScaleCount; i++) {
        const y = chartHeight + y_offset - (i * yScaleHeightStep);
        const value = (i * yScaleStep).toFixed(1);
        yScales.push(
            <G key={`y-scale-${i}`}>
                <Line
                    x1={0 + (x_offset / 2)}
                    y1={y}
                    x2={xAxisEnd + (x_offset * 1.5)}
                    y2={y}
                    stroke="#e0e0e0"
                    strokeWidth={0.5}
                />
                <Text
                    x={x_offset - 10}
                    y={y + 2}
                    style={{letterSpacing:0,fontSize:10}}
                    fill="#000"
                    textAnchor="end"
                >
                    {value}
                </Text>
            </G>
        );
    }

    return (
        <Svg height={height} width={width} >
            <G>
                {yScales}
                {labels}
                {bars}
                <Line
                    x1={0 + x_offset}
                    y1={chartHeight + y_offset}
                    x2={xAxisEnd + 20 + x_offset}
                    y2={chartHeight + y_offset}
                    stroke="#000"
                    strokeWidth={1}
                />
                <Line
                    x1={0 + x_offset}
                    y1={0}
                    x2={0 + x_offset}
                    y2={chartHeight + y_offset}
                    stroke="#000"
                    strokeWidth={1}
                />
            </G>
        </Svg>
    );
};

const AddBarChart = ({ data, width = 600, height = 500, left = 150 }) => {
    return (
        <View style={[{ left: left }]}>
            <BarChart data={data} width={width} height={height} />
        </View>
    );
};



export default AddBarChart