
import { StyleSheet, Dimensions } from "react-native";





export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#eceff1',
        padding: 10,
        margin: 8,
        borderRadius: 10,
        alignItems : 'center',
        justifyContent: 'center',
        height:300




    },

    image: {

        height: Dimensions.get('window').height / 4.8,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginTop : 10
        
        

    },

    inner_container: {
        padding: 5
    },

    title: {
        fontWeight: '700',
        fontSize: 20,
        color: 'black',
    },

    price: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 5
    },
    inStocks : {

        fontWeight : 'bold',
        fontSize : 20,
        color : 'red',
        marginTop : 5

    },
    header : {
        fontWeight : 'bold'
    }



})

