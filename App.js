import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/Home';
import Contatos from './src/Contatos';


const AppNavigator = createStackNavigator({
  Home:{
    screen: Home
      },
  Contatos:{
    screen:Contatos
    }
    
},{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    headerBackTitle:null
  }
}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;




