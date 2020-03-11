import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import {
    StyleSheet,
    View
} from 'react-native';
import { withNavigation } from 'react-navigation';

class myApp extends Component {

    render() {
        return (<View style={styles.menuicon}>
            <Icon
                name='ellipsis-h'
                type='font-awesome'
                color={this.props.color}
                onPress={() => this.props.navigation.toggleDrawer()} />
        </View>
        );
    }
}
export default withNavigation(myApp);;
const styles = StyleSheet.create({

    menuicon:
    {
        alignItems:'baseline',
        paddingStart:10,
        paddingTop:10,
      
  
    },
});