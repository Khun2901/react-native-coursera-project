import * as React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert, ScrollView } from 'react-native'
import { validateEmail } from '../utils/index.js'

const SubscribeButton = () => 
    <Pressable style={({pressed}) => [
        {backgroundColor: pressed ? '#33423D': '#495E57'},
        styles.buttonContainer]}
        onPressOut={() => Alert.alert('Thanks for subscribing, stay tuned!')}>
        <Text style={styles.buttonText}>Subscribe</Text>
    </Pressable>

const GreySubscribeButton = () =>
    <View style={styles.greyButtonContainer}>
        <Text style={styles.buttonText}>Subscribe</Text>
    </View>

export default function SubscribeScreen() {

    const [email, setEmail] = useState('')

    return (
        <ScrollView style={styles.container}
            keyboardDismissMode='on-drag'>
            <Image style={styles.logo} source={require('../assets/little-lemon-logo-grey.png')} />
            <Text style={styles.normalText}>
                Subscribe to our newsletter for our latest delicious recipes!
            </Text>
            <TextInput 
                style={styles.emailInput}
                value={email}
                onChangeText={setEmail}
                placeholder='Email'
                keyboardType='email-address'
                clearButtonMode='always'
            />
            {
                validateEmail(email) ? <SubscribeButton /> : <GreySubscribeButton />
            }
            {/* <View style={styles.greyButtonContainer}>
                <Text style={styles.buttonText}>Subscribe</Text>
            </View>
            <Pressable style={({pressed}) => [
                {backgroundColor: pressed ? '#33423D': '#495E57'},
                styles.buttonContainer]}
                onPressOut={() => Alert.alert('Thanks for subscribing, stay tuned!')}>
                <Text style={styles.buttonText}>Subscribe</Text>
            </Pressable> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 25,
    },
    logo: {
        alignSelf: 'center',
        width: 100,
        height: 160,
        resizeMode: 'contain',
        marginVertical: 10
    },
    normalText: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
        marginVertical: 10
    },
    emailInput: {
        fontSize: 20,
        marginVertical: 20,
        paddingVertical: 5,
        paddingLeft: 10,
        borderWidth: 1.5,
        borderColor: 'black',
        borderRadius: 5,
    },
    buttonContainer: {
        marginVertical: 10,
        // backgroundColor: '#495E57',
        paddingVertical: 5,
        borderRadius: 5,
    },
    buttonText: {
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white'
    },
    greyButtonContainer: {
        marginVertical: 10,
        backgroundColor: '#B5B5B5',
        paddingVertical: 5,
        borderRadius: 5,
    }
})