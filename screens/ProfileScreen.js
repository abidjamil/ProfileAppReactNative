import React, { Component } from 'react';
import {Text, StyleSheet, Image, View, ImageBackground, ActivityIndicator, RefreshControl} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, AirbnbRating, Tile, Icon, Divider } from 'react-native-elements';
import { ThemeProvider } from '@react-navigation/native';
import ImageSlider from '../components/ImageSlider';
import MenuIcon from '../components/MenuButton';

class ProfileScreen extends Component {

    UNSAFE_componentWillMount () {
        this.GetData()
    }

  
   GetData = () => {
    fetch('https://abidjamil.mock.pw/api/mydata', {
        method: 'GET'
        
    })
    .then((response) => response.json())
   
    .then((responseJson) => {
      console.log (responseJson)
      this.setState({myData: responseJson, isdataReceived:true,refreshing: false});
      
    })
    .catch((error) => {
    alert (error)
    });
  };
  onRefresh() {
      this.setState({isdataReceived:false});
    this.GetData();
  }
      state = {
        refreshing: true,
        isdataReceived : false,
        isTwitterModalVisible: false,
        isFacebookModalVisible: false
      };
    render(){
        if(this.state.refreshing)
        {
            return (
                <View style={styles.Loadingcontainer}>
                <ActivityIndicator size="large" color="maroon" />
                </View>
               );
        }
        if (this.state.isdataReceived) {
        return(
            <ThemeProvider>
                <ScrollView style = {styles.scrollviewstyle}
                 refreshControl={
                    <RefreshControl
                      //refresh control used for the Pull to Refresh
                      refreshing={this.state.refreshing}
                      onRefresh={this.onRefresh.bind(this)}
                    />
                  }
                 >
                <View style = {styles.main}>

                 <ImageBackground source = {require ('../assets/header.jpg')} style = {{...styles.headerImage , paddingTop:10,}} resizeMode={'cover'} >
                 <View style={styles.menuicon}>
                 <MenuIcon navigation={this.props.navigation} color = 'white'  />
                    </View>
                 </ImageBackground>
                
                 <View style = {styles.avatarView}>
                 <Avatar
                rounded
                renderPlaceholderContent = { <View style={styles.Loadingcontainer}>
                <ActivityIndicator size="large" color="maroon" />
                </View>}
                size = 'xlarge'
                source = {{uri : this.state.myData.pictures[5]}}/>
                </View>

                <View style = {styles.titleContainer}>
                <Text style = {styles.myTitle}>
                 Abid Jamil
                </Text>
                <Text style = {styles.TitleText}>
                    Mobile Application Developer
                </Text>
                </View>
               
            <View style = {styles.biodataContainer}>
            <View style = {styles.biodataContainer1}>
            <Text style = {styles.biodataTitle}>Gender : </Text>
            <Text style = {styles.biodataText}>{this.state.myData.Gender}</Text>
                </View>
                <View style = {{...styles.biodataContainer1, marginLeft:20}}>
                <Text style = {{...styles.biodataTitle}}>Age : </Text>
            <Text style = {styles.biodataText}>{this.state.myData.Age}</Text>
            </View>

            </View>


            <View style = {{...styles.biodataContainer,marginTop:10}}>
            <View style = {styles.biodataContainer1}>
            <Text style = {styles.biodataTitle}>Height : </Text>
            <Text style = {styles.biodataText}>{this.state.myData.Height}</Text>
                </View>
                <View style = {{...styles.biodataContainer1, marginLeft:20}}>
                <Text style = {{...styles.biodataTitle}}>Weight : </Text>
            <Text style = {styles.biodataText}>{this.state.myData.Weight}</Text>
            </View>

            </View>
           
            <Divider style={styles.dividerHorizontalLarge} />

            <View style={styles.locationCardHeader}>
            <View style = {styles.locationCard}>
            <Icon
                size = {18}
                name='map-marker'
                type='font-awesome'
                color='maroon'
                onPress={() => console.log('hello')} />

            <Text style = {styles.locationText}>Location </Text>
           
            </View>
            <Text style = {styles.addressText}>  {this.state.myData.Address}</Text>
            </View>
            <Divider style={{...styles.dividerHorizontalLarge, marginTop:10}}/>

            <View style={styles.BioCardHeader}>
            <View style = {styles.locationCard}>
            <Icon
                size = {18}
                name='user'
                type='font-awesome'
                color='maroon'
                onPress={() => console.log('hello')} />

            <Text style = {styles.locationText}>Bio </Text>
           
            </View>
            <Text style = {styles.addressText}>{this.state.myData.Bio}</Text>
            </View>
            <Divider style={styles.dividerHorizontalLarge} />
                </View>
                <View>
                <ImageSlider pictures = {this.state.myData.pictures}/>
                </View>
                </ScrollView>
               
            </ThemeProvider>
       );
    }
    else
   {
     return (
      <View style={styles.Loadingcontainer}>
      <ActivityIndicator size="large" color="maroon" />
      </View>
     );
   } 
    }
}
export default ProfileScreen

const styles = StyleSheet.create ({
    
    scrollviewstyle:
    {
        
        backgroundColor:'#ededed'
    },
    main:
    {
        flex:1,
       
        backgroundColor:'#ededed'
    },
    avatarView:
    {   
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop:-80,
    },
    headerImage:
    {
        height : 130,
        marginTop : 0,
     
    },
    titleContainer:
    {
    
        alignContent:'center',
        alignItems: 'center',
    
    },
    myTitle:{
        fontWeight: "bold",
        marginTop : 10,
        fontSize : 40,
        color: '#363636'
    },
    TitleText:{
        fontSize : 14,
        color: '#363636'
    },
     
    container:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'white',
    },
    locationCard :
    {
        flexDirection: 'row'
    },
    locationCardHeader :
    {   width: '100%',
        marginTop : 20,
        marginLeft: 20,
        marginRight : 50,
        alignSelf :"flex-start",

    },
    locationText:
    {
        marginLeft : 8,
        fontSize : 14,
        fontWeight: "bold",
        color : 'maroon'
    },
    addressText:
    {
        marginTop:5,
        color: 'black',
       textAlign:'left'
    },
    dividerHorizontalLarge: {
        backgroundColor: 'black',
        
        height: 0.3,
        marginLeft:20,
        marginEnd:20,
        marginTop:5,
        alignItems: 'center',
      },
      BioCardHeader :
      {   
          marginTop : 10,
          marginLeft: 20,
          marginRight : 20,
          alignSelf :"flex-start",
  
      },
      biodataTitle:{
          fontSize:18,
          fontWeight:'bold',
          color:'maroon',
      },
      biodataText:{
        fontSize:16,
        textAlignVertical:'center',
        textAlign:'center',
    },
    
      biodataContainer:
      {
        flexDirection:'row',
        margin:20,
        marginTop:40,
        flex:1,
        justifyContent:'space-evenly'
      },
      biodataContainer1:
      {
        borderBottomColor:'grey',
        borderBottomWidth:1,
        flexDirection:'row',
        marginLeft:10,
        alignSelf:'center',
       
        justifyContent:'center',
        paddingBottom:10,
      },
      menuicon:
      {
          alignItems:'baseline',
          paddingStart:30,
          paddingTop:10,
        

      },
      Loadingcontainer: {
        flex: 1,
        justifyContent: 'center'
      },
   
 });