// Comments by Connor :)
// Imports

import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';



// Homescreen

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Fortress Home',
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
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              username: Math.floor(Math.random() * 100),
              otherParam: "Welcome!",
            })}
        />
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

// Define Navigation Parameters, Screens, Styles.

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    headerStyle: {
      backgroundColor: '#3575D3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
);

// Export App - Including all of the different screens defined in Rootstack

export default class App extends React.Component {
  render() {
    return <RootStack />;
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