import React from "react";
import { TextInput, View ,Feather} from "react-native";
import styles from './SearchBox.style';

const SearchBox = () => {

    return(
        <View style = {styles.container}>
       
        <TextInput style = {styles.searchBox} placeholder = 'Search...'   />
        </View>
    )

}
export default SearchBox;