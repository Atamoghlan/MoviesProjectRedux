import React, { Component } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { ClearList } from "../Redux/actions";

class FavouriteList extends Component {
    render() {
        const list = this.props.list;
        movieId = 0;
        clearIcon = require('../images/Clear.png')
        return (
            <View>
                <ScrollView>
                    <View>
                        <TouchableOpacity
                        onPress={() => this.props.clear()}>
                            <Image
                                style={{ width: 125, height: 65, alignSelf: 'center', marginTop: 10 }}
                                source={clearIcon}
                                 />
                        </TouchableOpacity>
                    </View>
                    {list.map((movie) => (
                        <View
                            key={++movieId}
                            style={{
                                flexWrap: 'wrap', flexDirection: "row", justifyContent: 'center',
                                backgroundColor: "white"
                            }}>
                            <View>
                                <Text
                                    style={{ width: 250, height: 45, fontSize: 30, color: 'black', marginTop: 15 }}>{movie.name}</Text>
                                <Image
                                    style={{ width: 250, height: 250, borderRadius: 20, resizeMode: 'stretch' }}
                                    source={movie.icon} />
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
const mapDispatchToProps = (dispatch) => {
    return {
        clear: () =>  dispatch(ClearList()),
        dispatch
  
    }
  }

const favList = connect(mapStateToProps, mapDispatchToProps)(FavouriteList);

export default favList 