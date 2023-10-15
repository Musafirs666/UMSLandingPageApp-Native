import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { globalStyles } from '../globalStyle'

const Footer = () => {
    const socialMediaList = [
        { id: 1, imgUrl: require('../assets/icon/facebook.png') },
        { id: 2, imgUrl: require('../assets/icon/twitter.png') },
        { id: 3, imgUrl: require('../assets/icon/youtube.png') },
        { id: 4, imgUrl: require('../assets/icon/instagram.png') },
        { id: 5, imgUrl: require('../assets/icon/huruft.png') },
        { id: 6, imgUrl: require('../assets/icon/tiktok.png') },
    ]
    return (
        <View style={[styles.footerContainer, { alignItems: 'center' }]}>
            <Image
                source={require('../assets/icon/logoUMS.png')}
                style={[{ width: 200, height: 80, resizeMode: 'contain' }]}
            />
            <View style={styles.footerMenuContainer}>
                <Text style={[globalStyles.textLg, { color: 'white' }]}>
                    Admisi
                </Text>
                <Text style={[globalStyles.textLg, { color: 'white' }]}>
                    Program Studi
                </Text>
                <Text style={[globalStyles.textLg, { color: 'white' }]}>
                    FAQ
                </Text>
                <Text style={[globalStyles.textLg, { color: 'white' }]}>
                    Brosur PMB
                </Text>
            </View>
            <View style={[{ width: '100%', height: 40, alignItems: 'center' }]}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={socialMediaList}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.socialMediaIcon}>
                            <Image
                                source={item.imgUrl}
                                style={[{ width: 20, height: 20 }]}
                            />
                        </View>
                    )}
                />
            </View>

            <View style={[globalStyles.whiteLiner]}>
                <View
                    style={[
                        { width: '100%', height: 1, backgroundColor: 'white' },
                    ]}
                />
            </View>
            <Text
                style={[
                    globalStyles.textLg,
                    { color: 'white', fontWeight: '300' },
                ]}
            >
                Copyright @ 2023 | PMB UMS
            </Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer: {
        width: '100%',
        height: 420,
        backgroundColor: '#32327e',
        justifyContent: 'space-between',
        paddingVertical: 45,
    },
    footerMenuContainer: {
        flexDirection: 'row',
        width: '100%',
        gap: 20,
        justifyContent: 'center',
    },
    socialMediaIcon: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        marginEnd: 8,
        marginStart: 8,
    },
})
