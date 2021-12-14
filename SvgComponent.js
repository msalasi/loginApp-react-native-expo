import React from "react";
import {Image} from 'react-native';

export default function  SvgComponent () {
    return (
        <Image 
            source={require('./assets/wave.png')}
        />
    );
}

