import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TextInput ,Image, Text, TouchableOpacity} from 'react-native';
import {CheckModal} from '../components/CheckModal';
import { SearchMovie } from "../components/SearchMovie";
import { searchMovie, favouriteList, fetchUrl } from "../Redux/actions";
import { connect } from "react-redux";


export let url = 'http://api.tvmaze.com/search/shows?q=' 
export let myDefaultSearch = 'batman'

class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "Search movie",
      modalWindow: false ,
      changedData: []
    }
    
  }
 
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
    this.props.goToFetch()
  } 
  
  handledChangedText = (newText) =>{
    myDefaultSearch = newText
    this.searchUrl = url + newText
    this.componentDidUpdate()
    //console.log('handledChangedText')
  }
  componentDidMount = () => {
    console.log('my url=', url, 'my search=', myDefaultSearch)
    this.props.goToFetch()
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
      <View style={{backgroundColor: "black"}}>
        <ScrollView>
          <SearchMovie
          handledChangedText={this.handledChangedText}
          findMovie={this.findMovie}/>
          <Text style={{backgroundColor: 'white', fontSize: 22, marginVertical: 10, color:'white', backgroundColor: 'black'}}>You are searching: {this.searchText} </Text>
          {/* {console.log(this.state.data)}, */}
          <View style={{flexWrap: 'wrap', flexDirection: 'row', backgroundColor: "black"}}>
        
         {this.props.data.map((item,index)=> {
             icon = item.show.image?{uri:item.show.image.medium}: require("../images/popcorn.jpg")
             name = item?.show?.name;
             description= item?.show?.summary;
              return (
                <View>
                <Text style={styles.text}>{item.show.name}</Text>
             <TouchableOpacity key={index} 
             onPress={()=>this.workModal(item.show)}>      
                <Image style={{width:125,height:150,borderRadius: 15,margin: 9}} source={icon}/>
             </TouchableOpacity>
             <TouchableOpacity style={{width: 45, height: 45, margin: 5, marginLeft: 50}}
             onPress={() => this.props.favMovies(item.show)}>
               { console.log('item show zzzzzzzzzzz - ',item.show.id)}
                  <Image style={{width:45, height:45}}
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
const mapDispatchToProps = (dispatch) => {
  return {
      goToFetch: () =>  dispatch(fetchUrl()),
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

const styles=StyleSheet.create({
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
  }
})