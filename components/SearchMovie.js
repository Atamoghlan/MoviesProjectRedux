import React from "react";
import {View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';

export const SearchMovie = (props) => {
    const {handledChangedText , findMovie} = props;
    return(
        <View style={styles.view}>
            <TextInput 
          style={styles.textSearch}
          placeholder={' e.g. superman'}
              onChangeText = {handledChangedText}>
          </TextInput>
          <TouchableOpacity style={styles.findButton}
            onPress={()=>findMovie()}>
              <Text styles={styles.findButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row", flex: 1
},
 textSearch: {
   marginVertical: 10, backgroundColor: 'white', 
 fontSize: 25, flex: 0.75
},
findButtonText: {
  color: 'white', textAlign: 'center'
},
findButton: {
  marginHorizontal: 5,borderWidth: 6, borderColor: "#D3D3D3", 
  backgroundColor: 'blue', flex: 0.25,
  alignSelf: "center", justifyContent: 'center',height: 55, backgroundColor: 'white', alignItems: 'center'
  
}
})