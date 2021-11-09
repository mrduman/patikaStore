import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "./components/Header/Header";
import Store from './components/Store';
import store_data from './store_data.json';
import SearchBox from "./components/SearchBox/SearchBox";



function App() {

  const renderProduct = (({ item }) => <Store products={item} />)

  return (

    <View style={styles.container}>
      <Header />
      <SearchBox />
      <FlatList

        keyExtractor={item => item.id.toString()}
        data={store_data}
        renderItem={renderProduct}
        numColumns={2}
        horizontal={false}
      />
    </View>


  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'
  },


})

export default App;
