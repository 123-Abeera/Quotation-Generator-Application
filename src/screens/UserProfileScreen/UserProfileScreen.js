import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const UserProfileScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [aboutYou, setAboutYou] = useState('');
    const [favQuotation, setFavQuotation] = useState('');
    const [userUID, setUserUID] = useState('');

    useEffect(() => {
        // Simulated user UID, replace with actual user UID retrieval logic
        const fetchedUserUID = 'ReplaceWithCurrentUserUID';
        setUserUID(fetchedUserUID);

        const fetchUserProfile = async () => {
            try {
                const userProfileSnapshot = await firestore().collection('userProfiles').doc(fetchedUserUID).get();
                const userProfileData = userProfileSnapshot.data();

                if (userProfileData) {
                    setFirstName(userProfileData.firstName || '');
                    setLastName(userProfileData.lastName || '');
                    setAboutYou(userProfileData.aboutYou || '');
                    setFavQuotation(userProfileData.favQuotation || '');
                }
            } catch (error) {
                console.error('Error fetching user profile data:', error);
            }
        };

        fetchUserProfile();
    }, []);

    const saveUserProfile = async () => {
        try {
            await firestore().collection('userProfiles').doc(userUID).set({
                firstName,
                lastName,
                aboutYou,
                favQuotation,
            });

            Alert.alert('Success', 'User profile saved successfully!');
            console.log('User profile saved successfully!');
        } catch (error) {
            console.error('Error saving user profile:', error);
        }
    };

    const updateUserProfile = async () => {
        try {
            await firestore().collection('userProfiles').doc(userUID).update({
                firstName,
                lastName,
                aboutYou,
                favQuotation,
            });

            Alert.alert('Success', 'User profile updated successfully!');
            console.log('User profile updated successfully!');
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>User Profile</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.inputHeading}>First Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your first name"
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputHeading}>Last Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your last name"
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputHeading}>About You:</Text>
                <TextInput
                    style={styles.multilineInput}
                    placeholder="Tell us about yourself"
                    value={aboutYou}
                    onChangeText={(text) => setAboutYou(text)}
                    multiline
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputHeading}>Favorite Quotation:</Text>
                <TextInput
                    style={styles.multilineInput}
                    placeholder="Your favorite quote"
                    value={favQuotation}
                    onChangeText={(text) => setFavQuotation(text)}
                    multiline
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Save" onPress={saveUserProfile} />
                <Button title="Update" onPress={updateUserProfile} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333',
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    inputHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#5372F0',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
    },
    multilineInput: {
        height: 80,
        width: '100%',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});

export default UserProfileScreen;

