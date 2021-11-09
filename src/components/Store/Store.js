import React from "react";
import { View, Image, Text } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import styles from './Store.style';

const Store = ({ products }) => {


    return (

        <View style={styles.container}>
            
                <Image style={styles.image} source={{ uri: products.imgURL }} />
                 <View style={styles.inner_container}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                <Text style = {styles.inStocks}>{products.inStock === true? ' ' : 'Out Of Stock'}</Text>
            </View>
        </View>
    )
}

export default Store;