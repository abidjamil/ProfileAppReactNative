import React, { Component } from 'react';
import {Icon, Divider } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Timeline from 'react-native-timeline-flatlist-mg'

import MenuIcon from '../components/MenuButton';

export default class Example extends Component {
  constructor(){
    super()
    this.data = [
        {time: '\t\tDate     ', title: 'NextBridge', description: 'Senior Software Engineer \n\n \n Responsible for the design, build, deployment, debug & maintenance of Android applications for Google play Insured all applications were developed with the SDLC Software Development lifecycle \n\n Responsible for designing distinctive screens for tablet optimization and a cleaner layout \n\n Tested applications on multiple devices to insure compatibility standards \n\n Programmed with clean, modular, robust code using Java and XML with Android SDK platform \n\n Fixed bugs with code, design patterns and miscellaneous occurrences during projects.'},
      {time: 'Feb 2020 ', title: 'Softdesk', description: 'Senior Software Engineer \n\n\n Responsible for the design, build, deployment, debug & maintenance of Android applications for Google play \n\n Insured all applications were developed with the SDLC Software Development lifecycle \n\n Worked on location nearby agents with respect to the customer with the ability to navigate to the agent and call the agent location directly by using Google API \n\n Responsible for designing distinctive screens for tablet optimization and a cleaner layout \n\n Responsible for applying android architectures like MVP, MVVM \n\n  Programmed with clean, modular, robust code using Java and XML with Android SDK platform.\n\n Fixed bugs with code, design patterns and miscellaneous occurrences during projects'},
      {time: 'Nov 2019', title: 'Technocation', description: 'Software Engineer \n\n\n Responsible for designing, building, debugging and deploying android application \n\n Responsible to solve different structural issues by applying android architectures \n\n Implemented Location Listener to show exact location on Google Maps \n\n Programmed with clean, modular, robust code using Java and XML \n\n Used Polylines to draw path on Google Maps with accurate GPS location changes \n\n Developed the database wrapper functions for data staging and modeled the data objects relevant to the mobile application \n\n Responsible for designing distinctive screens for tablet optimization and a cleaner layout \n\n Tested applications on multiple devices to insure compatibility standards.'},
      {time: 'July 2015', title: 'Foundation University', description: 'Bachelors of Computer Software Engineering \n\n 2011 - 2015 '},
      {time: 'Sep 2011 ', title: '', description: ' '},

    ]
  } 

  render() {
    
    return (
      <View style={styles.container}>
            <MenuIcon navigation={this.props.navigation}  />
                    <Divider style={{...styles.dividerHorizontalLarge,  marginTop : 17,}} />
                    <View style = {styles.titleContainer}>
                <Text style = {styles.myTitle}>
                 Experience
                </Text>

                </View>
                <Divider style={{...styles.dividerHorizontalLarge,marginTop : 20,} }/>
          <View style = {{ flex:1, marginTop:10}}>
          <Timeline 
         circleSize={20}
         circleColor='maroon'
         lineColor='maroon'
         timeContainerStyle={{minWidth:40, marginTop: 5}}
         timeStyle={{textAlign: 'center', backgroundColor:'maroon', color:'white', padding:15, borderRadius:5,}}
          style={styles.list}
          data={this.data}
        />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
		paddingTop:10,
		backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:30,
  },
  menuicon:
  {
      alignItems:'baseline',
      paddingStart:20,
      paddingTop:10,
    

  },
  titleContainer:
  {
  
      marginTop:10,
      alignContent:'center',
      alignItems: 'center',
  
  },
  myTitle:{
      fontWeight: "bold",
      marginTop : 15,
      fontSize : 30,
      color: '#363636'
  },
  dividerHorizontalLarge: {
    backgroundColor: 'black',
    width:  window.width,
    height: 0.3,
    marginLeft:20,
    marginEnd:20,
    marginTop:15,
    alignItems: 'center',
  },
});