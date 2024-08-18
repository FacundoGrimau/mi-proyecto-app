import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator';
import OrderStackNavigator from './OrderStackNavigator';
import Header from '../components/Header';
import { colors } from '../global/colors';

import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MyProfileStackNavigator from './MyProfileStackNavigator';

const Tab = createBottomTabNavigator() 

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        header: () => {
          return <Header title={route.name}/>
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen 
        name='Shop'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Fontisto name="shopping-store" size={24} color={focused ? "black" : colors.lightBlue}/>
              </View>
            )
        }}}
      />
      <Tab.Screen 
        name='Cart'
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <MaterialCommunityIcons name="cart-variant" size={24} color={focused ? "black" : colors.lightBlue}/>
              </View>
            )
        }}}
      />
      <Tab.Screen
        name='Order'
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Ionicons name="receipt" size={24} color={focused ? "black" : colors.lightBlue}/>
              </View>
            )
        }}}
      />
      <Tab.Screen
        name='My Buttom Profile'
        component={MyProfileStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <FontAwesome name="user" size={24} color={focused ? "black" : colors.lightBlue}/>
            </View>
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.darkGray,
    height: 60,
  }
})