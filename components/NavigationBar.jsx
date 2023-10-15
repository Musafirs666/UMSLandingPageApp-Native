import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { globalStyles } from '../globalStyle'

const NavigationBar = ({ navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.mainHeaderContainer}>
                <View style={styles.leftHeaderContainer}>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Image
                            source={require('../assets/icon/menu.png')}
                            style={styles.navbarIcon}
                        />
                    </TouchableWithoutFeedback>
                    <Image
                        source={require('../assets/icon/logoUMS.png')}
                        style={styles.logoIcon}
                    />
                </View>
                <View style={styles.rightHeaderContainer}>
                    <Image
                        source={require('../assets/icon/search.png')}
                        style={styles.searchIcon}
                    />
                    <View style={styles.langContainer}>
                        <Image
                            source={require('../assets/icon/indonesia.png')}
                            style={styles.flagIcon}
                        />
                        <Image
                            source={require('../assets/icon/dropdown.png')}
                            style={styles.dropdownIcon}
                        />
                    </View>
                    <Text style={[globalStyles.textLg, { color: 'white' }]}>
                        LogIn
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',
        backgroundColor: '#32327e',
        width: '100%',
        height: 65,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    mainHeaderContainer: {
        width: '100%',
        flexDirection: 'row',
        padding: 15,
    },
    leftHeaderContainer: {
        flexDirection: 'row',
        width: '50%',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
    },
    rightHeaderContainer: {
        flexDirection: 'row',
        width: '50%',
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10,
    },
    langContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },

    //
    navbarIcon: {
        width: 20,
        height: 20,
    },
    logoIcon: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    searchIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    flagIcon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    dropdownIcon: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
    },
})

export default NavigationBar
