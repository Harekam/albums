/**
 * Created by harekamsingh on 15/04/17.
 */
import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyles}>
            {props.children}
        </View>
    )
};

const styles = {
    containerStyles: {
        padding: 5,
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;