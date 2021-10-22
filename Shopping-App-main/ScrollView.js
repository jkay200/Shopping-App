import React, {Component} from 'react';
import {Text, Image,ScrollView, StyleSheet, View} from 'react-native';

class ScrollviewEx extends Component{
	state = {
				names: [ 
							{name: 'Ben', id: 1},{name: 'Sam', id: 2}, {name: 'Alfred', id: 3},
							{name: 'Jude', id: 4},{name: 'Jade', id: 5},{name: 'Alvin', id: 6},
							{name: 'Luke', id: 7},{name: 'Josh', id: 8},{name: 'Wade', id: 9},
							{name: 'John', id: 10},{name: 'Blade', id: 11},{name: 'Ann', id: 12},
						]
			}
	alertitem = (item) =>{
		alert(item.name)
	}
	render(){
				return(
					<View>
						<ScrollView>
						{
							this.state.names.map((item,index) =>(
								<View key = {item.id} style ={styles.container}>
									<Text onPress={()=>this.alertitem(item)}>{item.name}</Text>
								</View>)
							)
						}
						</ScrollView>
					</View>
				)
			}
}
export default ScrollviewEx			

const styles = StyleSheet.create({
container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 30,
			margin: 2,
			borderColor: '#2a4944',
			borderWidth: 1,
			backgroundColor: '#d2f7f1'
}
})