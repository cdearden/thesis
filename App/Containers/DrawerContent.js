import React, { Component } from 'react'
import { ScrollView, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      };
      return false
    })
  };

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressMapView = () => {
    this.toggleDrawer()
    NavigationActions.mapScreen()
  }
  handlePressLoginScreen = () => {
    this.toggleDrawer()
    NavigationActions.loginScreen()
  }
  handlePressMapScreen = () => {
    this.toggleDrawer()
    NavigationActions.mapScreen()
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerButton text='Map View' onPress={this.handlePressMapView} />
        <DrawerButton text='Login' onPress={this.handlePressLoginScreen} />
        <DrawerButton text='Map Screen' onPress={this.handlePressMapScreen} />

      </ScrollView>
    )
  };

};

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
