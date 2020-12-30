import React from 'react';
import { View ,Image, Text, TouchableOpacity, ScrollView, Modal, StyleSheet} from 'react-native';
import { connect } from "react-redux";

export const CheckModal = (props) => {
    const {icon, name, description, onPress, modalWindow} = props;
    // console.log(description)
    // console.log(name)
    return(
        <View>
            <Modal visible={modalWindow}>
                <ScrollView>
                    <Image source={icon} style={mStyles.image}/>
                    <Text style={mStyles.name}>{name}</Text>
                    <Text style={mStyles.text}>{description?.replace(/(<([^>]+)>)/gi, "")? description?.replace(/(<([^>]+)>)/gi, ""):"No Description"}</Text>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={mStyles.textInTouchable}>Close</Text>
                    </TouchableOpacity>
                </ScrollView>
             </Modal>
        </View>
    )
}
const mStyles = StyleSheet.create({
    image: {
        borderRadius: 35,
        marginTop: 15,
        alignSelf: 'center',
        width:150,
        height:150
    },
    name: {
        marginTop: 10,
        textAlign: 'center', 
        fontSize: 20
    }, 
    text: {
        margin: 10,
        textAlign: 'center',
        fontSize: 15
    },
    textInTouchable:{
        width: 80,height: 35,marginTop: 10,textAlign: 'center',
        backgroundColor: 'red', alignSelf: 'center', fontSize: 25
    },
    calcLogoButton:{
        width: 80, 
        height: 80,
        borderRadius: 15,
        margin: 5
    },
    MenuLogoButton:{
        width: 70, 
        height: 70,
        borderRadius: 15,
        margin: 5
    }
})