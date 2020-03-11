import { AirbnbRating } from 'react-native-elements';
import React, { Component } from 'react';
import { Rating, Icon, Divider } from 'react-native-elements';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MenuIcon from '../components/MenuButton';


class skills extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <ScrollView style={styles.MainView}>
            <View style={styles.menuicon}>
            <MenuIcon navigation={this.props.navigation} color = 'white'  />
                    </View>
                    <Divider style={{...styles.dividerHorizontalLarge,  marginTop : 12,}} />
                    <View style = {styles.titleContainer}>
                <Text style = {styles.myTitle}>
                 Skills
                </Text>

                </View>
                <Divider style={{...styles.dividerHorizontalLarge,  marginTop : 12,}} />
     

        <View style={{...styles.SkillsCard,  marginTop : 30}}>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Android </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Java </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Kotlin </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={4} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> MVVM </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> MVP </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Dependency Injection </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Reactive Programming </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={3} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Google Material Design </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Firebase </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={4} imageSize={15} style={styles.RatingStarsStyle} />
          </View>
        </View>



        <View style={styles.SkillsCard}>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Google Map </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Geo Location  </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Geo Fancing </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Retrofit</Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Dagger 2</Text>
            <Rating readonly type='star' ratingCount={5} startingValue={4} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> RxJava</Text>
            <Rating readonly type='star' ratingCount={5} startingValue={4} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Butter Knife </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={4} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Glide </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Intercom </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

        </View>


        <View style={styles.SkillsCard}>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Agile </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> SDLC  </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={4} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> STLC </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={4} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> SVN, GitHub </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

          <View style={styles.SkillsItem}>
            <Text style={styles.SkillsItemText}> Continous Integration </Text>
            <Rating readonly type='star' ratingCount={5} startingValue={5} imageSize={15} style={styles.RatingStarsStyle} />
          </View>

        </View>

      </ScrollView>

    );
  }
}

export default skills;

const styles = StyleSheet.create({
  MainView:
  {
   
    backgroundColor : '#666565',
    flex: 1,
    padding:8,
  },
  SkillsCard:
  {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',

  },
  SkillsItem:
  {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SkillsItemText:
  {
    margin: 10,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    alignContent: 'flex-start'
  },
  RatingStarsStyle:
  {
    flex: 1,
    marginRight: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignContent: 'flex-end'

  },
  container: {
    flex: 1,
    padding: 20,
		paddingTop:25,
		backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:30,
  },
  menuicon:
  {
      alignItems:'flex-start',
      paddingStart:20,
      padding:10,
    

  },
  titleContainer:
  {
      marginTop:10,
      alignContent:'center',
      alignItems: 'center',
  
  },
  myTitle:{
      fontWeight: "bold",
      marginTop : 10,
      fontSize : 30,
      color: 'white'
  },
  dividerHorizontalLarge: {
    backgroundColor: 'white',
    width:  window.width,
    height: 0.3,
    marginLeft:20,
    marginEnd:20,
    marginTop:15,
    alignItems: 'center',
  },

});
