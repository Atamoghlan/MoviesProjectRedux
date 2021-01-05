import React, { Component } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { clearList, deleteMovie } from "../Redux/actions";

class FavouriteList extends Component {
    render() {
        const list = this.props.list;
        movieId = 0;
        clearIcon = require('../images/Clear.png');
        delIcon = require('../images/del.png')
        return (
            <View>
                <ScrollView>
                    <View
                style={styles.mainView}>
                    <View>
                        <TouchableOpacity
                        onPress={() => this.props.clear()}>
                            <Image
                                style={styles.clearBtn}
                                source={clearIcon}
                                 />
                        </TouchableOpacity>
                    </View>
                    {list.map((movie, index) => (
                        <View
                            key={++movieId}
                            style={styles.mapView}>
                            <View>
                                <Text
                                    style={styles.movieName}>{movie.name}</Text>
                                <Image
                                    style={styles.movieImage}
                                    source={movie.icon} />
                            </View>
                            <TouchableOpacity
                        onPress={() => this.props.deletemovie(index)}>
                            <Image
                                style={styles.deleteBtn}
                                source={delIcon}
                                 />
                        </TouchableOpacity>
                        </View>
                    ))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center'
    },
    clearBtn: { width: 125, height: 65, alignSelf: 'center', marginTop: 10 },
    mapView: {
        flexWrap: 'wrap', flexDirection: "column", justifyContent: 'center',
        backgroundColor: "white"
    },
    movieName: {width: 250, height: 45, fontSize: 35, color: 'black', marginTop: 15 },
    movieImage: { width: 250, height: 250, borderRadius: 20, resizeMode: 'stretch' },
    deleteBtn: { width: 90, height: 75, alignSelf: 'center', margin: 10, resizeMode: 'stretch' },
})

const mapStateToProps = state => {
    return {
        list: state.ReducerForFavourite.movieList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clear: () =>  dispatch(clearList()),
        deletemovie: (index) => dispatch(deleteMovie(index)),
        dispatch
  
    }
  }

const favList = connect(mapStateToProps, mapDispatchToProps)(FavouriteList);

export default favList 

