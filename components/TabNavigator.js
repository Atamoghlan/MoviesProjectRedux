import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainMenu from "../screens.js/MainMenu";
import  favList from "./FavouriteList";
import myApp from "../screens.js/MainMenu";


const MoviesTab = createBottomTabNavigator();

export const MoviesMenu = () => {
    return(
        <MoviesTab.Navigator>
            <MoviesTab.Screen name='myApp' component={myApp}/>
            <MoviesTab.Screen name='FavouriteList' component={favList}/>
        </MoviesTab.Navigator>
    )
}