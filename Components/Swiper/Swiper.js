import React, {Component} from 'react'
import Swiper from 'react-native-deck-swiper'

import Card from '../Card'


class SwiperComp extends Component {

  resetDeck = () => {
    this.swiper.jumpToCardIndex(0)
  };

  render() {
    let {cards, onChange} = this.props;
    return (
      <Swiper
        goBackToPreviousCardOnSwipeLeft={true}
        stackSize={2}
        showSecondCard={true}
        renderCard={(value) => <Card number={value}/>}
        cards={cards}
        ref={swiper => {
          this.swiper = swiper
        }}
        onSwiped={onChange}
      />
    );
  }
}


export default SwiperComp
