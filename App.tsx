/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Text, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import OnboardingScreen from './src/screens/OnBoardingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';

const SplashScreen = ({ onAnimationFinish }) => (
    <View style={[styles.splashContainer, Platform.OS === 'ios' ? styles.splashContainerIOS : styles.splashContainerAndroid]}>
        <LottieView

            source={require('./src/assets/SocialMediaIcons/loading-slider.json')}
            autoPlay
            loop={false}
            style={styles.logo}
            onAnimationFinish={onAnimationFinish} // Call onAnimationFinish when the animation finishes
        />
        <Text style={styles.appTitle}>Quotation Generator App</Text>
    </View>
);

const Stack = createStackNavigator();

const App = () => {
    const [splashVisible, setSplashVisible] = useState(true);

    useEffect(() => {
        const animationDuration = 5000; // Animation duration in milliseconds
        const splashTimeout = setTimeout(() => {
            setSplashVisible(false);
        }, animationDuration);

        return () => clearTimeout(splashTimeout);
    }, []);

    const handleAnimationFinish = () => {
        setSplashVisible(false);
    };

    return (
        <NavigationContainer>
            {splashVisible ? (
                <SplashScreen onAnimationFinish={handleAnimationFinish} />
            ) : (
                <Stack.Navigator initialRouteName="OnBoarding">
                    <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="login" component={SignInScreen} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6658ED',
    },
    splashContainerIOS: {
        backgroundColor: '#6658ED', // Customize for iOS
    },
    splashContainerAndroid: {
        backgroundColor: '#6658ED', // Customize for Android
    },
    logo: {
        width: 200,
        height: 200,
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
    },
});

export default App;

