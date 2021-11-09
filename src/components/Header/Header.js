import React from "react";
import { Text, View } from 'react-native';
import styles from './Header.style';


const Header = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PATIKA STORE</Text>
        </View>
    )

}

export default Header;
