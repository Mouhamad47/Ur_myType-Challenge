import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.centeredView}>
        <View style={styles.outerFirstView}>
          <View style={styles.firstView}>
            <View style={styles.parentSmallSquare}>
              <View style={styles.smallSquare}></View>
            </View>
            <View style={styles.nameOuterView}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Name</Text>
              </View>
            </View>

            <View style={styles.parentSmallSquare}>
              <View style={styles.smallSquare}></View>
            </View>
          </View>
        </View>
        <View style={styles.outerSecondView}>
          <View style={styles.secondView}>
            <View style={styles.captionView}>
              <Text style={styles.captionText}>Balance</Text>
            </View>
          </View>
        </View>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1c22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    backgroundColor: 'white',
    flexDirection: 'column',
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 4,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 15,
  },
  firstView: {
    flex: 3,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: 'white',
    borderBottomLeftRadius: 35,
  },
  parentSmallSquare: {
    height: 35
  },
  smallSquare: {
    width: 38,
    height: 38,
    backgroundColor: '#0f1c22',
    borderRadius: 7,
    flex: 2
  },
  nameView: {
    alignSelf: 'center',
  },
  nameText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
  },
  nameOuterView: {
    flex: 2
  },
  secondView: {
    flex: 3,
    backgroundColor: '#f4f5fb',
    borderTopRightRadius: 35,
    height: '50%',
  },
  captionView: {
    alignSelf: 'center',
  },
  captionText: {
    textAlign: 'center',
    paddingTop: '50%',
    fontSize: 22,
    fontWeight: '500'
  },
  outerFirstView: {
    flex: 3,
    backgroundColor: '#f4f5fb',
    width: '100%',
  },
  outerSecondView: {
    flex: 3,
    backgroundColor: 'white',
    width: '100%',
    borderTopRightRadius: 35,
  }


});
