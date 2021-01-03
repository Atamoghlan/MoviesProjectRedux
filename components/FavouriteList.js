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
                            <View  key={++movieId}>
                                <Text>{movie.name}</Text>
                                <Image
                                source={movie.icon}/>
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