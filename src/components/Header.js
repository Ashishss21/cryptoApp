import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Header = () =>{
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.header}>
                Crypto App
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer:{
        display:'flex',
        marginTop:5,
        alignItems:'center'
    },
    header:{
        fontWeight:'bold',
        fontSize:20,
    }
})

const {headerContainer, header} = styles;

export default Header;