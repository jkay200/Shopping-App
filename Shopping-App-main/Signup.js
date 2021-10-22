import React, {useState} from 'react';
import {Text,View,StyleSheet, Image, TouchableOpacity,TextInput, Picker} from 'react-native';

const Signup=({navigation})=>{
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPass] = useState("");
	const [gender, setGender] = useState("");

	const nameHandler = (text) =>{
		setName(text);
	}
	const emailHandler = (text) =>{
		setEmail(text);
	}
	const passwordHandler = (text) =>{
		setPass(text);
	}
	const genderHandler = (text) =>{
		setGender(text);
	}
	const loginHandler = (uname,gend,mail,pass) => {
		alert('Name: '+uname+'\n'+'Gender: '+ gender+'\n'+'Email: '+ mail+'\n'+'Password: '+pass)
	}
        return(
            <View style={styles.containerr}>
			<Image source = {require('./assets/favicon.png')} style={{width: 80 , height: 80, marginLeft: 20}}/>
					
					<TextInput style={styles.input}
                     underlineColorAndroid = "transparent"
                      placeholder = 'Name'
                      placeholderTextColor = '#9a73ef'
                      autoCapitalize= 'none'
                      onChangeText= {nameHandler}/>
					  
                    <TextInput style={styles.input}
                     underlineColorAndroid = "transparent"
                      placeholder = 'Email'
                      placeholderTextColor = '#9a73ef'
                      autoCapitalize= 'none'
                      onChangeText= {emailHandler}/>

					<TextInput style={styles.input}
                       underlineColorAndroid = 'transparent'
                       placeholder = 'Password'
                       placeholderTextColor = '#9a73ef'
                       autoCapitalize = 'none'
                       onChangeText = {passwordHandler}/>
					   
					<Picker selectedValue={gender} onValueChange={genderHandler} style={styles.pick} >
						<Picker.Item label="Female" value="female" />
						<Picker.Item label="Male" value="male" />
					</Picker>

					<TouchableOpacity style = {styles.sub}
                      onPress = {()=>loginHandler(name, gender,email,password)}>
                      <Text style = {styles.subt}>Submit</Text>
					</TouchableOpacity>
					<TouchableOpacity style = {styles.sub}
                       onPress = {()=>navigation.navigate("Signing In...")}>
                       <Text style = {styles.subt}>Next</Text>
					</TouchableOpacity>
            </View>
            )
      }
export default Signup

const styles = StyleSheet.create ({
 input: {
  margin: 15,
  height: 40,
  borderColor: '#7a42f4',
  borderWidth: 1
  },
  sub: {
  backgroundColor: '#7a42f4',
  padding: 10,
  width: 200,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 85,
  height: 40,
  marginTop: 15
  },
  subt:{
  color: 'white',
  },
  pick:{
	  marginTop: -40,
	  marginBottom: -50
  },
  containerr: {
      flex: 1,
      justifyContent: 'center',
    }
 })
