// Comments by Connor :)
// Imports

import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class LogoTitle extends React.Component {
  render() {
    return (
      <Text style={{color: "white", fontSize: 20}}>Fortress Home</Text>
    );
  }
}



// Homescreen

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: "Fortress Home",
    headerRight: (
      <Button
        onPress={() => alert('This will be a "Settings" Page')}
        title="Settings"
        color="#fff"
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>Fortress</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              username: "Connor",
              otherParam: 'Welcome to Fortress',
            });
          }}
        />
      </View>
    );
  }
}


// Details Screen

class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'Details',
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('username', 'NO-USER');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>{JSON.stringify(itemId)}!</Text>
        <Text>{JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}


// Settings Screen
class SettingsScreen extends React.Component {

  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

// Stack Navigator Creation (Headers, Titles, Nav Stacks)
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const DetailsStack = createStackNavigator({
  Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Setings: SettingsScreen,
});

// TabStack - Bottom Navigation 

const TabStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Details: DetailsStack,
    Settings: SettingsStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Details') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings'){
          iconName = `ios-speedometer${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: "#3575D3",
      }
    },
  }
);

// Export App - Including all of the different screens defined in Rootstack

export default class App extends React.Component {
  render() {
    return <TabStack />;
  }
}


// Stylesheets - Kinda Like CSS

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
  },
  text: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 60,
    paddingLeft: 60,
    backgroundColor: "#3575D3",
    color: "white",
    fontWeight: "700",
    textAlign: "left",
    fontSize: 30,
  },
  details: {

    padding: 20,
    
  },

})