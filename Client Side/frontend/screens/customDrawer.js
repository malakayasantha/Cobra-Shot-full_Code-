import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Dimentions, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

export default function CustomDrawer(props){
    return(
        <ImageBackground source = {require('../assets/images/drawerbg.jpg')} style={styles.bgContainer } >
            <SafeAreaView style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image  source={require('../assets/images/CobraLogo.png')} style={styles.logo}/>
                </View>
                <ScrollView>
                    <DrawerItems 
                    {...props}
                    />
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{

    },
    logo: {
        width: 200,
        height: 137.5,
    },
    imageContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    bgContainer: {
        width: '100%',
        height: '100%',
    }
})