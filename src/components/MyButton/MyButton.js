import {StyleSheet,TouchableOpacity, View,Text } from 'react-native';
import React , { FC } from 'react';

interface Props{
  title:string
}

const MyButton : FC<Props> = ({title,onPress}) => {
return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
           <Text style={styles.title}>{title} </Text>
          </TouchableOpacity>
);

};

export default MyButton

const styles = StyleSheet.create({
  container:{

        height:50,
        justifyContent:"center",
         width:"100%",
        alignItems:"center",
         backgroundColor: "#3B71F3",
         borderRadius: 30
},
title: {
    color: 'white', // Add text color to make the text visible on the blue background
  },
})