import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './components/MainPage';


export default class todo extends React.Component {
  render() {
    return (
      <MainPage />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
