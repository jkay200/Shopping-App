import  React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View} from 'react-native'
import{FontAwesome} from '@expo/vector-icons'
import Cart from './Cart.js'
import Home from './Home.js'

const Tab = createBottomTabNavigator();
const tabs=({route})=>({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: 'orange',
				tabBarInactiveTintColor: 'black',
				tabBarStyle:{backgroundColor: "#eeedf2"},
				tabBarIcon:({color, size})=>{
				let iconName;
				if(route.name=="Home"){
					iconName="home"
					color="black"
					size=24
				}
				else if(route.name=="Cart"){
					iconName="shopping-cart"
					color="black"
					size=24
				}
				else if (route.name=="Mic"){
					iconName="microphone"
					color="white"
					size=18
				}
				return <View><FontAwesome name={iconName} size={size} color={color} /></View>
			}
			})
const tab=()=>({
	tabBarItemStyle:{
		backgroundColor: "black", 
		borderRadius: 900, 
		bottom: 30,  
		marginLeft: 100, 
		marginRight: 100, 
		paddingTop: 10, 
		paddingBottom: 10, 
		marginTop: -5, 
		marginBottom: -5
		}
	})
function HomeScreen(){
	return(
		<Tab.Navigator initialRouteName="Home" backBehavior="initialRoute" 
			screenOptions={tabs}>
			<Tab.Screen name="Home" component={Home} />
<Tab.Screen name="Mic" component={Home} options={tab}/>
			<Tab.Screen name="Cart" component={Cart} />
		</Tab.Navigator>
		)
}
export default HomeScreen
