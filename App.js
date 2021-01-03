import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { MoviesMenu } from "./components/TabNavigator";

export default class App extends Component {
  
  render (){
    return (
      <NavigationContainer>
          <MoviesMenu/>
      </NavigationContainer>
    )
  }
}