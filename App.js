import { createStackNavigator, createAppContainer } from 'react-navigation';
// import HomeScreen from './src/screens/HomeScreen';
import SkillsPage from "./src/screens/SkillsPage";

const navigator = createStackNavigator(
  {
    // Home: HomeScreen
    SkillsPage: SkillsPage 
  },
  // {
  //   initialRouteName: 'Home',
  //   defaultNavigationOptions: {
  //     title: 'Imad Ahmed'
  //   }
  // },
  {
    initialRouteName: 'SkillsPage',
    defaultNavigationOptions: {
      title: 'Skills'
    }
  }
);

export default createAppContainer(navigator);
