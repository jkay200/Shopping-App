import React from "react";
import {View,Text,StyleSheet, Button,Image, TouchableOpacity,TextInput} from 'react-native';


 export function Login({navigation}){
     

    return (
     <View style={styles.container}>
     
     
     <View>
      <Text style={styles.underline}>Welcome To Joeken Shopping Mall</Text>
     </View>
     <Image
        style={{
          transform: [{ rotate: "45deg" }],
          borderRadius: 20,
          marginTop:50,
          marginBottom: 30,
          width: 150,
          height: 150,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
      />
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          
        />
      </View>
      <TouchableOpacity 
       onPress={() => {
          navigation.navigate("Products");
        }}
      
      style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
     
    </View>
    );
}
const styles = StyleSheet.create({
  container:{
 backgroundColor: "blue",
      flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
      
  },
   prompt :{
    marginBottom: 40,
     borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,

  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
   TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn:{
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#FF1493",
  },
   underline: {
     fontSize: 20,
     fontWeight: 'bold',
     fontStyle: 'italic'
    }
    
    
});

export default Login;