import * as React from 'react'
import { Image, View, StyleSheet, Pressable, Text } from 'react-native'

export default function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/little-lemon-logo.png')} 
                style={styles.logo} />
            <Text style={styles.normalText}>Little Lemon, your local Mediterranian Bistro</Text>
                <Pressable style={({pressed}) => [
                    {backgroundColor: pressed ? '#33423D': '#495E57'}, styles.buttonContainer]}
                    onPressOut={() => { navigation.navigate('Subscribe') }}>
                    <Text style={styles.buttonText}>NewsLetter</Text>
                </Pressable> 
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.95,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: 80,
        marginBottom: 20
    },
    logo: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 150,
        height: 250,
        marginTop: 70,
    },
    normalText: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
    },
    buttonContainer: {
        // backgroundColor: '#495E57',
        paddingVertical: 8,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '400'
    }
    
})