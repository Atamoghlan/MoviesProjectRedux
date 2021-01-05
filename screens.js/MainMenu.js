import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TextInput ,Image, Text, TouchableOpacity} from 'react-native';
import {CheckModal} from '../components/CheckModal';
import { SearchMovie } from "../components/SearchMovie";
import { searchMovie, favouriteList, fetchUrl } from "../Redux/actions";
import { connect } from "react-redux";

class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "Search movie",
      modalWindow: false ,
      changedData: []
    }
    
  }
  url = 'http://api.tvmaze.com/search/shows?q=' 
  myDefaultSearch = 'batman'
 
  inputData = [];
  searchUrl = '';
  searchText = ''
    name=''
    description=''
    icon=''
  workModal = (item) => {
    this.setState({
      modalWindow: !this.state.modalWindow
    })
    this.name=item.name
    this.description=item.summary
    this.icon= item.image?{uri:item.image.medium}:require("../images/popcorn.jpg")
  } 
  changeData = (show) => {
    this.setState({
      changedData: show 
    })
  }

  findMovie = () => {
    this.props.goToFetch(this.url, this.searchText)
  } 
  
  handledChangedText = (newText) =>{
    this.searchText = newText
    this.searchUrl = this.url + newText
    this.componentDidUpdate()
    //console.log('handledChangedText')
  }
  componentDidMount = () => {
    console.log('my url=', this.url, 'my search=', this.myDefaultSearch)
    this.props.goToFetch(this.url, this.myDefaultSearch)
  }

  


  componentDidUpdate = async() => {
      // try{
      //   const response = await fetch(this.searchUrl)
      //   const data = await response.json()
      //   this.inputData = data
      //   // this.setState(prevState => ({data: prevState.data = data}))
      // }
      // catch(e){
      //   console.log('URL is wrong')
      // }

    }
  render (){
    //const {data} = this.props.data
    let icon = require('../images/popcorn.jpg');
    let heart = require('../images/heart.png');
    let name = '';
    let description = '';
    //console.log (data)
    return (
      <View style={styles.mainView}>
        <ScrollView>
          <SearchMovie
          handledChangedText={this.handledChangedText}
          findMovie={this.findMovie}/>
          <Text style={styles.searchText}>You are searching: {this.myDefaultSearch} </Text>
          {/* {console.log(this.state.data)}, */}
          <View style={styles.mapView}>
        
         {this.props.data.map((item,index)=> {
             icon = item.show.image?{uri:item.show.image.medium}: require("../images/popcorn.jpg")
             name = item?.show?.name;
             description= item?.show?.summary;
              return (
                <View>
                <Text style={styles.text}>{item.show.name}</Text>
             <TouchableOpacity key={index} 
             onPress={()=>this.workModal(item.show)}>      
                <Image style={styles.icon} source={icon}/>
             </TouchableOpacity>
             <TouchableOpacity style={styles.heartTO}
             onPress={() => this.props.favMovies(item.show)}>
                  <Image style={styles.heartImage}
                  source={heart}/>
                </TouchableOpacity>
             </View>
          )           
        })} 
          <CheckModal 
          icon={this.icon}
          name={this.name}
          description={this.description}
          modalWindow={this.state.modalWindow}
          onPress={this.workModal}/>
        </View>
           </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  text: {
    width:125, 
    height: 60,
    marginHorizontal: 9 ,
    marginTop: 20,
    fontSize: 25, 
    color: 'white'
  },
  mainView: {backgroundColor: "black"},
  searchText: {backgroundColor: 'white', fontSize: 22, marginVertical: 10, color:'white', backgroundColor: 'black'},
  mapView: {flexWrap: 'wrap', flexDirection: 'row', backgroundColor: "black"},
  icon: {width:125,height:150,borderRadius: 15,margin: 9},
  heartTO: {width: 45, height: 45, margin: 5, marginLeft: 50},
  heartImage: {width:45, height:45}

})

const mapDispatchToProps = (dispatch) => {
  return {
      goToFetch: (url, search) =>  dispatch(fetchUrl(dispatch, url, search)),
      favMovies: (movie) => dispatch(favouriteList(movie)), 
      dispatch

  }
}
const mapStateToProps = state => {
  return {
    data: state.ReducerForSearch.data
  }
}
const myApp = connect(mapStateToProps, mapDispatchToProps)(MainMenu);
export default myApp;

  