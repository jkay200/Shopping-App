import React, {useState, useEffect, useLayoutEffect} from 'react'
import {View,ActivityIndicator, TouchableOpacity,Text, StyleSheet} from 'react-native'

const Load =({navigation})=>{
	const [state, setState] = useState(true);
	
	const activity =()=>{
		setTimeout(()=>setState(false), 5000);
		setTimeout(()=>navigation.navigate("Home"),4000);
	}
	useLayoutEffect(()=>{activity()});
	console.log(state);
	const animating = state;
	return(
		<View style={styles.container}>
			<ActivityIndicator
				size = 'large'
				animating ={state}
				color = '#446802'
				style = {styles.activityIndicator} />
		</View>
	)
}
export default Load
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80
	}
})