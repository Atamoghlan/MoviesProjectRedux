import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  favList from "./FavouriteList";
import myApp from "../screens.js/MainMenu";


const MoviesTab = createBottomTabNavigator();

export const MoviesMenu = () => {
    return(
        <MoviesTab.Navigator
        tabBarOptions={{
            activeTintColor: "black",
            inactiveTintColor: "black",
            activeBackgroundColor: '#00FFFF',
            inactiveBackgroundColor: '#5F9EA0',
            labelStyle: {
                fontSize: 25,
                fontWeight: 'bold'
            },
            tabStyle: {
                paddingBottom: 10
            }
        }}>
            <MoviesTab.Screen name='Main' component={myApp}/>
            <MoviesTab.Screen name='Favourite List' component={favList}/>
        </MoviesTab.Navigator>
    )
}