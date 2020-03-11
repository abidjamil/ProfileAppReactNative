import React, { Component } from 'react';
import {Image, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnimationTypingText from '../components/AnimationText';


class SplashPage extends Component {

    UNSAFE_componentWillMount () {
  
        setTimeout (() => {
           
            this.props.navigation.navigate('MyDrawer')
        }, 2000); 
    }
    render () {
        return (
            <View style={{flex: 1, backgroundColor: '#666565', alignItems: 'center', justifyContent: 'center'}}>
                <AnimationTypingText
          text="Abid Jamil"
        />
            </View>
        );
    }
}

module.exports = SplashPage;