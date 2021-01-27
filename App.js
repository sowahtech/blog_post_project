import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import BlogArticle from './src/components/BlogArticle';
import BlogArticelList from './src/screens/BlogArticelList';
import BlogDetails from './src/screens/BlogDetails'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const Stack = createStackNavigator();
export default function App() {
	
	return (
		<NavigationContainer>

			<Stack.Navigator>
				<Stack.Screen 
					name = "List" 
					component= {BlogArticelList}
					options={{
						headerTitleAlign: "center",
						title: "Discover",
						headerTitleStyle: {
							fontSize: 26,
							fontWeight: "bold"
						},
						headerLeft: ()=>(<Ionicons style = {{marginLeft: 15}} name="ios-apps" size={24} color="black" />),
						headerRight: ()=>(<Ionicons style = {{marginRight: 15}} name="md-search-sharp" size={24} color="black" />)
					}} />
				<Stack.Screen 
					name = "Details" component= {BlogDetails}
					options={{
						headerLeft: ()=>(<Ionicons name="chevron-back-sharp" size={24} color="black" />),
						title: "Beauty",
						headerTitleAlign: "left",
						headerTitleStyle: {
							fontSize: 25,
							fontWeight: "bold",
							marginLeft: -45
						},
						headerRight: ()=>(
							<View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems:"center"}}>
								<Feather style={{marginHorizontal: 10}} name="headphones" size={24} color="black" />
								<FontAwesome style={{marginHorizontal: 10}} name="heart-o" size={24} color="black" />
								<EvilIcons style={{marginHorizontal: 5, fontSize: 35}} name="share-google" size={24} color="black" />
							</View>
						)
					}} />
			</Stack.Navigator>

		</NavigationContainer>
	);
}

