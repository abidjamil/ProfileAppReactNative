import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

class myApp extends Component {
  constructor(props) {
    super(props);
    console.log (props.pictures)
    let a = props.pictures;
    let b = a.map(item => {return {uri:item}})
    this.state = {
      images: b
    };
  }

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width
    });
  };

  render() {
    return (
      <View style={styles.sliderContainer} onLayout={this.onLayout}>
        <SliderBox
          autoplay={true}
          circleLoop={true}
          images={this.state.images}
          sliderBoxHeight={200}
          parentWidth={this.state.width}
        />
      </View>
    );
  }
}
export default myApp
const styles = StyleSheet.create({

  sliderContainer:
  {
    backgroundColor: 'white',
    margin: 20,
  },

});