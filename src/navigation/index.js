import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import OnBoardingScreen from '../screens/OnBoardingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Stack =createStackNavigator();

const Navigation = () =>
{

return (
  <NavigationContainer>
  <Stack.Navigator  screenOptions={{}}>
     <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
     <Stack.Screen name="SignUp" component={SignUpScreen} />
   <Stack.Screen name="login" component={SignInScreen} />
   <Stack.Screen name="HomeScreen" component={HomeScreen} />
   <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />


    </Stack.Navigator>
    </NavigationContainer>
);
};
export default Navigation;