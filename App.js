import React, {Component} from 'react';
import Swiper from './Components/Swiper'
import {StyleSheet, View} from 'react-native';

import Button from './Components/Button'


export default class App extends Component {
  state = {
    cards: [
      '1',
      '2',
      '3',
      '4',
      '5',
    ],
  };

  handleChange = (cardIndex) => {
    console.log('CardChanged', cardIndex)
  };

  resetDeck = () => {
    this.swiper.resetDeck()
  };

  render() {
    const { cards } = this.state;

    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          cards={cards}
          onChange={this.handleChange}
        />
        <Button onPress={this.resetDeck} label="Сбросить колоду" style={{ marginTop: 25 }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    flexDirection: 'column-reverse'
  },
});
