import React, { Component } from "react";
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './tabs/HomeTab'
import SearchTab from './tabs/SearchTab'
import CameraTab from './tabs/CameraTab'
import LikesTab from './tabs/LikesTab'
import ProfileTab from './tabs/ProfileTab'

const Tab = createBottomTabNavigator();

function AppTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search';
                    } else if (route.name === 'Snap') {
                        iconName = focused ? 'camera-alt' : 'camera-alt';
                    } else if (route.name === 'Likes') {
                        iconName = focused ? 'md-heart' : 'md-heart';
                        return <Ionicons name={iconName} size={size} color={color} />
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'perm-identity' : 'perm-identity';
                    }
        
                    // You can return any component that you like here!
                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeTab} />
            <Tab.Screen name="Search" component={SearchTab} />
            <Tab.Screen name="Snap" component={CameraTab} />
            <Tab.Screen name="Likes" component={LikesTab} />
            <Tab.Screen name="Profile" component={ProfileTab} />
        </Tab.Navigator>
    );
  }

class MainScreen extends Component {
    render() {
        return (
            <AppTabNavigator/>
        );
    }
}
export default MainScreen;