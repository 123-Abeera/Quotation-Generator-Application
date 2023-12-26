import {Image,StyleSheet , Text,View} from 'react-native'
import React from 'react'


const SocialMedia =() =>{
return (
<View  style={{flexDirection:"row"}}>

 <Image
    source={require("../../assets/SocialMediaIcons/facebook.png")}
     style={styles.image}
     />
     <View style={{ width: 20 }} />
     <Image
    source={require("../../assets/SocialMediaIcons/twitter.png")}
       style={styles.twitterIcon}
    />
     <View style={{ width: 20 }} />
     <Image
    source={require("../../assets/SocialMediaIcons/google.png")}
     style={styles.image}
    />



</View>

)
}

export default SocialMedia


const styles = StyleSheet.create({
image:{
height:40,
width:40,

},
twitterIcon:{
height:40,
width:60,
marginTop:5,

},
container:{
flexDirection:"row",
justifyContent:"space-evenly",
width:"100%",
alignItems:"center"


}



})