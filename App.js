import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TextInput ,Image, Text, TouchableOpacity} from 'react-native';
import {CheckModal} from './components/CheckModal';
import { SearchMovie } from "./components/SearchMovie";

const url = 'http://api.tvmaze.com/search/shows?q=' 

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      userInput: "super",
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
    this.icon= item.image?{uri:item.image.medium}:require("./images/popcorn.jpg")
  } 
  changeData = (show) => {
    this.setState({
      changedData: show 
    })
  }

  findMovie = () => {
    //console.log('findmovie')
    this.setState(prevState => ({data: prevState.data = this.inputData}));
    
  } 
  
  handledChangedText = (newText) =>{
    this.searchText = newText
    this.searchUrl = url + newText
    this.componentDidUpdate()
    //console.log('handledChangedText')
  }
  componentDidMount = async() => {
    try{
      const response = await fetch(url + this.state.userInput)
      const data = await response.json()
      this.setState({ 
        data
      })
     //console.log(this.state.data)
    }
    catch(e){
     console.log("URL is wrong")
    }

  this.componentDidUpdate = async() => {
      try{
        const response = await fetch(this.searchUrl)
        const data = await response.json()
        this.inputData = data
        // this.setState(prevState => ({data: prevState.data = data}))
      }
      catch(e){
        console.log('URL is wrong')
      }

    }
  }
  render (){
    const {data}=this.state
    let icon = require("./images/popcorn.jpg");
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
        
         {data.map((item,index)=> {
             icon = item.show.image?{uri:item.show.image.medium}: require("./images/popcorn.jpg")
             name = item?.show?.name;
             description= item?.show?.summary;
              return (
             <TouchableOpacity key={index} onPress={()=>this.workModal(item.show)}>      
                <Text style={styles.text}>{item.show.name}</Text>
                <Image style={{width:125,height:150,borderRadius: 15, margin: 9}} source={icon}/>
             </TouchableOpacity>
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