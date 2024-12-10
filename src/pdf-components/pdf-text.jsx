import { Text, View } from '@react-pdf/renderer';
import React from 'react';


const AddText = ({ content, wrap = false, isFixed = false, left = 0, lineseperator = null, letterSpacing = 0, fontSize = 10, containerWidth = 25, textcolour = 'black', textDecoration = ''
    , fontFamily = 'Roboto', fontWeight = 'normal', textAlign = '' }) => {

    let result = lineseperator ? content.split(lineseperator) : [content];

    return (
        <View fixed={isFixed} style={[{ left: left, width: `${containerWidth}%` }]}>
            {result.map((item, index) => (
                <Text wrap={wrap} key={index} style={{
                    letterSpacing: letterSpacing, fontSize: fontSize, textAlign: textAlign, color: textcolour, textDecoration: textDecoration,
                    fontFamily: fontFamily, fontWeight: fontWeight
                }}>
                    {item}
                </Text>
            ))}
        </View>
    );
};

export default AddText;
