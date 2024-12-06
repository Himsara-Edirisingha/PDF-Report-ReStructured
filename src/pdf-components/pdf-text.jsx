import { Text, View } from '@react-pdf/renderer'
import React from 'react'

const AddText = ({ content, wrap, isFixed, left = 0 }) => {
    return (
        <View fixed={isFixed} style={[{ left: {left} }]}>
            <Text wrap={wrap} style={{letterSpacing:0}}>{content}</Text>
        </View>
    )
}

export default AddText