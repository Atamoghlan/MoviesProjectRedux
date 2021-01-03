import React, {Component} from "react";
import { View , ScrollView , Text, Image } from "react-native";
import { connect } from "react-redux";

class FavouriteList extends Component {
    render() {
        const list = this.props.list;
        movieId = 0
        console.log(list)
        return(
            <View>
                <ScrollView>
                        {list.map((movie) => (
                            <View
                            key={++movieId}
                            style={{flexWrap: 'wrap', flexDirection: "row", justifyContent: 'center', 
                            backgroundColor: "black"}}>
                            <View>
                                <Text
                                style={{width: 250, height: 45, fontSize: 30, color: 'white', marginTop: 15}}>{movie.name}</Text>
                                <Image
                                style={{width: 250, height: 250, borderRadius: 20,  resizeMode: 'stretch'}}
                                source={movie.icon}/>
                            </View>
                            </View>
                        ))}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.ReducerForFavourite.movieList
    }
}

const favList = connect(mapStateToProps)(FavouriteList);

export default favList 