import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import transactionScreen from './screens/transaction';
import searchScreen from './screens/searchScreen';
import { render } from 'react-dom';

export default class App extends React.Components{

    render(){
      return(
        <AppContainer/>
      );
    }

}

const TabNavigator = createBottomTabNavigator({
  transaction:{screen:transactionScreen},
  Search:{screen:searchScreen}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"aqua",
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"center",
  }
})














