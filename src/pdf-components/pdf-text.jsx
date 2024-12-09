import { Text, View } from '@react-pdf/renderer';
import React from 'react';

const AddText = ({ content, wrap = false, isFixed, left = 0, lineseperator = null ,letterSpacing=0,fontSize=10 }) => {

    let result = lineseperator ? content.split(lineseperator) : [content];

    return (
        <View fixed={isFixed} style={[{ left: left }]}>
            {result.map((item, index) => (
                <Text wrap={wrap} key={ index} style={{letterSpacing:0,fontSize:10 ,fontWeight: "bold"}}>
                    {item}
                </Text>
            ))}
        </View>
    );
};

export default AddText;
