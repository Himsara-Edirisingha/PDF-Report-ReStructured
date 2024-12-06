import { Image, Text } from '@react-pdf/renderer'
import React from 'react'


const AddImage = ({ src, width = 10, height = 10, left = 0, top = 0, isFixed = false }) => {
    try {
        if (!src) {
            return <Text>No image source provided.</Text>;
        }
        const customStyle = {
            width: `${width}`,
            height: `${height}`,
        };
        if (top !== 0) customStyle.top = `${top}`;
        if (left !== 0) customStyle.left = `${left}`;
        return <Image src={src} style={customStyle} fixed={isFixed} />;

    } catch (e) {
        return <Text>Error Rendering Image!! - {e.message}</Text>;
    }
};

export default AddImage