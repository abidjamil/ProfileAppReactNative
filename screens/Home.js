import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ActivityIndicator, RefreshControl } from 'react-native'
import { Avatar, ThemeProvider, Divider, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import MenuIcon from '../components/MenuButton';



class MyApp extends Component {

  UNSAFE_componentWillMount() {
    this.GetData()
  }


  GetData = () => {
    fetch('https://abidjamil.mock.pw/api/mydata', {
      method: 'GET'

    })
      .then((response) => response.json())

      .then((responseJson) => {
        console.log(responseJson)
        this.setState({ myData: responseJson, isdataReceived: true, refreshing: false });

      })
      .catch((error) => {
        alert(error)
      });
  };
  onRefresh() {
    this.setState({ isdataReceived: false });
    this.GetData();
  }
  state = {
    refreshing: true,
    isdataReceived: false,
    isTwitterModalVisible: false,
    isFacebookModalVisible: false
  };
  toggleModalTwitter = () => {
    this.setState({ isTwitterModalVisible: !this.state.isTwitterModalVisible });
  };
  toggleModalFacebook = () => {
    this.setState({ isFacebookModalVisible: !this.state.isFacebookModalVisible });
  };
  render() {
    if (this.state.isdataReceived) {
      return (

        <ThemeProvider style={styles.MainView}>

          <Modal
            onSwipeComplete={() => this.setState({ isVisible: false })}
            swipeDirection="left"
            animationIn="zoomIn"
            animationOut="zoomOut"
            onBackdropPress={this.toggleModalTwitter}
            onBackButtonPress={this.toggleModalTwitter}
            isVisible={this.state.isTwitterModalVisible}>
            <View style={{ width: '100%', height: 380, alignContent: 'center', alignItems: 'center', }}>
              <View style={{ backgroundColor: 'white', borderRadius: 10, flex: 1, width: '100%', alignContent: 'center', alignItems: 'center', paddingTop: 20 }}>
              <Avatar
                rounded
                renderPlaceholderContent = { <View style={styles.Loadingcontainer}>
                <ActivityIndicator size="large" color="maroon" />
                </View>}
                size = 'xlarge'
                source = {{uri : this.state.myData.pictures[5]}}/>
                <Text style={styles.myTitleTwitterCard}>
                  {this.state.myData.Title}
                </Text>

                <Text style={styles.myTitleSmallTwitter}>
                  {this.state.myData.TwitterUserName}
                </Text>

                <Text style={{ ...styles.AddressText, marginTop: 15, fontSize: 16, fontWeight: 'bold' }}>
                  {this.state.myData.Hobbies}
                </Text>

                <Text style={{ ...styles.AddressText, marginTop: 5, }}>
                  {this.state.myData.Address}
                </Text>

                <Text style={{ ...styles.AddressText, color: '#0097d1', }}>
                  {this.state.myData.Url}
                </Text>

                <Divider style={styles.dividerHorizontalSmall} />

                <View style={{ ...styles.containerTwitterStats }}>

                  <View style={{ ...styles.StatsBox, backgroundColor: 'white', flexDirection: 'column', marginTop: 10 }}>
                    <Icon
                      name='users'
                      type='font-awesome'
                      color='#1DA1F2' />
                    <Text style={{ marginTop: 10, color: 'grey', fontSize: 14, fontWeight: 'bold' }}>  {this.state.myData.TwitterFollower} </Text>
                  </View>



                  <View style={{ ...styles.StatsBox, backgroundColor: 'white', flexDirection: 'column', marginTop: 10 }}>
                    <Icon

                      name='twitter-square'
                      type='font-awesome'
                      color='#1DA1F2' />
                    <Text style={{ marginTop: 10, color: 'grey', fontSize: 14, fontWeight: 'bold' }}>  {this.state.myData.TwitterTweets} </Text>

                  </View>



                  <View style={{ ...styles.StatsBox, backgroundColor: 'white', flexDirection: 'column', marginTop: 10 }}>
                    <Icon

                      name='user-plus'
                      type='font-awesome'
                      color='#1DA1F2' />
                    <Text style={{ marginTop: 10, color: 'grey', fontSize: 14, fontWeight: 'bold' }}> {this.state.myData.TwitterFollowing}</Text>

                  </View>

                </View>
              </View>
            </View>
          </Modal>


          <Modal
            onSwipeComplete={() => this.setState({ isVisible: false })}
            swipeDirection="left"
            animationIn="zoomIn"
            animationOut="zoomOut"
            onBackdropPress={this.toggleModalFacebook}
            onBackButtonPress={this.toggleModalFacebook}
            isVisible={this.state.isFacebookModalVisible}>
            <View style={{ width: '100%', height: 400, alignContent: 'center', alignItems: 'center', }}>
              <View style={{ backgroundColor: '#242424', borderTopRadius: 10, borderBottomRadius: 10, flex: 1, width: '100%', alignContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                <View style={{ width: '100%', height: 280, alignContent: 'center', alignItems: 'center', }}>
                  <Image source={require('../assets/github.png')} style={{ resizeMpde: 'cover', flex: 1, aspectRatio: 1, marginTop: 10 }} />
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30, color: '#bababa' }}> Github</Text>
                  <Text style={{ fontSize: 12, marginTop: 0, color: '#bababa' }}> @abidjamil</Text>
                </View>
              </View>




              <View style={{ ...styles.containerTwitterStats }}>

                <View style={{ ...styles.StatsBox, backgroundColor: 'white', flexDirection: 'column', marginTop: 10 }}>
                  <Icon
                    name='users'
                    type='font-awesome'
                    color='#242424' />
                  <Text style={{ marginTop: 10, color: 'grey', fontSize: 14, fontWeight: 'bold' }}> {this.state.myData.GitHubFollower}  </Text>
                </View>



                <View style={{ ...styles.StatsBox, backgroundColor: 'white', flexDirection: 'column', marginTop: 10 }}>
                  <Icon

                    name='user-plus'
                    type='font-awesome'
                    color='#242424' />
                  <Text style={{ marginTop: 10, color: 'grey', fontSize: 14, fontWeight: 'bold' }}> {this.state.myData.GitHubFollowing} </Text>

                </View>



                <View style={{ ...styles.StatsBox, backgroundColor: 'white', flexDirection: 'column', marginTop: 10 }}>
                  <Icon

                    name='github-square'
                    type='font-awesome'
                    color='#242424' />
                  <Text style={{ marginTop: 10, color: 'grey', fontSize: 14, fontWeight: 'bold' }}> {this.state.myData.GitHubRepo}</Text>

                </View>

              </View>
            </View>
          </Modal>



          <View style={styles.menuicon}>
            <MenuIcon navigation={this.props.navigation} />
          </View>
          <ScrollView style={styles.MainView}  refreshControl={
                    <RefreshControl
                      //refresh control used for the Pull to Refresh
                      refreshing={this.state.refreshing}
                      onRefresh={this.onRefresh.bind(this)}
                    />
                  }>
            <View style={styles.MainView}>

              <View style={styles.container}>
              <Avatar
                rounded
                renderPlaceholderContent = { <View style={styles.Loadingcontainer}>
                <ActivityIndicator size="large" color="maroon" />
                </View>}
                size = 'xlarge'
                source = {{uri : this.state.myData.pictures[5]}}/>
              </View>

              <View style={styles.container}>
                <Text style={styles.myTitle}>
                  {this.state.myData.Title}
                </Text>
              </View>
              <View>

              </View>
              <View style={styles.contactcontainer}>
                <Text style={styles.myTitleSmall}>
                  @abidjamil
         </Text>

                <Divider style={styles.dividerVerticalSmall} />
                <Text style={styles.myTitleSmall}>
                  chabidgill
         </Text>
              </View>

              <View style={styles.contactcontainer}>
                <Text style={styles.AddressText}>
                  {this.state.myData.Address}
                </Text>
              </View>

              <View style={styles.containerStats}>

                <View style={{ ...styles.StatsBox, borderColor: 'grey', borderRightWidth: 0.5, }}>
                  <Icon

                    name='code'
                    type='font-awesome'
                    color='black'
                  />

                </View>



                <View style={{ ...styles.StatsBox, borderColor: 'grey', borderRightWidth: 0.5, }}>
                  <Icon

                    name='suitcase'
                    type='font-awesome'
                    color='grey'
                  />

                </View>



                <View style={{ ...styles.StatsBox, borderColor: 'grey', borderRightWidth: 0.5, }}>
                  <Icon

                    name='camera'
                    type='font-awesome'
                    color='grey'
                  />

                </View>


                <View style={styles.StatsBox}>

                  <Icon
                    name='android'
                    type='font-awesome'
                    color='grey'
                  />

                </View>
              </View>
              <View style={styles.container}>

                <Text style={styles.description}>
                  {this.state.myData.Introduction}
                </Text>
              </View>

              <View style={styles.ContactButtonContainer}>

                <View style={{ ...styles.ContactButtonBox, borderColor: 'grey', borderRightWidth: 0.5, }} onPress={this.toggleModal}>
                  <Icon
                    name='twitter'
                    color='#2f98f5'
                    type='font-awesome'
                    onPress={this.toggleModalTwitter} />
                  <Text onPress={this.toggleModalTwitter}> Follow</Text>
                </View>



                <View style={styles.ContactButtonBox}>
                  <Icon
                    name='github-square'
                    color='#242424'
                    type='font-awesome'
                    onPress={this.toggleModalFacebook} />
                  <Text onPress={this.toggleModalFacebook}>  Github</Text>
                </View>


              </View>

              <View style={{ ...styles.container, borderColor: 'grey', borderBottomWidth: 0.6, padding: 10 }}>
                <Text style={styles.myTitle}>
                  Qualification
         </Text>
                <Text style={styles.myTitleSmall}>
                  {this.state.myData.Qualification}
                </Text>

              </View>

              <View style={{ ...styles.container, paddingBottom: 50 }}>

                <Text style={styles.myTitle}>
                  Contact Details
          </Text>
                <Text style={styles.myTitleSmall}>
                  {this.state.myData.ContactDetails}
                </Text>
              </View>


            </View>

          </ScrollView>
        </ThemeProvider>

      );
    }
    else {
      return (
        <View style={styles.Loadingcontainer}>
          <ActivityIndicator size="large" color="maroon" />
        </View>
      );
    }


  }
}

const styles = StyleSheet.create({

  MainView:
  {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 5
  },
  menuicon:
  {
    alignItems: 'flex-start',
    paddingStart: 30,
    paddingTop: 20,
    backgroundColor: 'white',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  containerStats: {

    marginTop: 10,
    height: 81,
    borderColor: 'grey',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    backgroundColor: 'white',
    flexDirection: 'row',

  },
  containerTwitterStats: {

    marginTop: 0,
    height: 81,
    backgroundColor: 'white',
    flexDirection: 'row',

  },
  StatsBox: {
    flex: 1,
    height: 80,
    backgroundColor: '#f2f2f2',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  contactcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  image: {
    marginTop: 10
  },
  myTitle: {
    marginTop: 10,
    fontSize: 20,
    color: '#363636'
  },
  myTitleTwitterCard: {
    marginTop: 5,
    fontSize: 30,
    color: '#0097d1',
    fontWeight: 'bold',
  },
  myTitleSmallTwitter: {
    marginTop: -1,
    fontSize: 12,
    color: 'grey',
  },
  myTitleSmall: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 8,
    marginLeft: 8,
    marginTop: 5,
    fontSize: 14,
    color: '#363636',
  },
  QualificationText: {
    marginRight: 8,
    marginLeft: 8,
    marginTop: 2,
    fontSize: 14,
    color: '#363636',
  },

  AddressText: {
    margin: 8,
    fontSize: 15,
    color: '#363636',
  },
  dividerVerticalSmall: {
    backgroundColor: 'grey',
    width: 0.5,
    height: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 3,
    alignItems: 'center',
  },
  dividerVerticalLarge: {
    backgroundColor: 'grey',
    width: 0.5,
    height: 80,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
  },
  dividerHorizontalSmall: {
    backgroundColor: 'grey',
    width: 300,
    height: 0.5,
    marginTop: 20,
    alignItems: 'center',
  },
  dividerHorizontalLarge: {
    backgroundColor: 'grey',
    width: 200,
    height: 0.5,

    alignItems: 'center',
  },
  description:
  {
    margin: 16,
    textAlign: 'justify',
    fontSize: 14,
    color: '#363636',
  },
  ContactButtonContainer:
  {
    marginTop: 10,
    height: 61,
    borderColor: 'grey',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  ContactButtonBox:
  {
    flex: 1,
    height: 60,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  Loadingcontainer: {
    flex: 1,
    justifyContent: 'center'
  },



});
export default MyApp