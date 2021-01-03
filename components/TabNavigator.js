import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import myApp from "../App";
import  favList from "./FavouriteList";


const MoviesTab = createBottomTabNavigator();

export const MoviesMenu = () => {
    return(
        <MoviesTab.Navigator>
            <MoviesTab.Screen name='myApp' component={myApp}/>
            <MoviesTab.Screen name='FavouriteList' component={favList}/>
        </MoviesTab.Navigator>
    )
}