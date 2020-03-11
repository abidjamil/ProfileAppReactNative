import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
export default function Index() {
    return (
      <Text>Index</Text>
    );
  }
AppRegistry.registerComponent(appName, () => App);
