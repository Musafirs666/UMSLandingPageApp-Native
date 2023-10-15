/* eslint-disable */
import React from 'react'
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    ImageBackground,
    FlatList,
    SafeAreaView
} from 'react-native'
import NavigationBar from '../components/NavigationBar'
import { globalStyles } from '../globalStyle'
import Footer from '../components/Footer'
import { LinearGradient } from 'expo-linear-gradient'

function HomeScreen({ navigation }) {
    const achievementList = [
        { id: 1, imgUrl: require('../assets/img/UNGGUL.png') },
        { id: 2, imgUrl: require('../assets/img/UNGGUL.png') },
        { id: 3, imgUrl: require('../assets/img/UNGGUL.png') },
        { id: 4, imgUrl: require('../assets/img/AUN-QA.png') },
        { id: 5, imgUrl: require('../assets/img/IABEE.png') },
    ]

    const bestGraduatedList = [
        {
            id: 1,
            name: 'Muhammad Fadli',
            job: 'Dokter Spesialis Mata',
            description:
                'UMS memberikan ekosistem yang baik untuk pembelajar seperti saya, ilmu saya meningkat pesat untuk menunjang karir saya',
            imgUrl: require('../assets/img/bestGraduate01.png'),
        },
        {
            id: 2,
            name: 'Rezky Kurniawan',
            job: 'Kontraktor',
            description:
                'Dengan kuliah di UMS relasi saya terbangun dengan luas, sehingga saua mendapatkan banyak peluang untuk pekerjaan impian saya',
            imgUrl: require('../assets/img/bestGraduate02.png'),
        },
        {
            id: 3,
            name: 'Intan Basudara',
            job: 'Psikolog',
            description:
                'Lika liku kehidupan kampus menjadikan saya lebih kuat daripada sebelumnya, pemikiran terasah dan daya kerja terbentuk',
            imgUrl: require('../assets/img/bestGraduate03.png'),
        },
    ]
    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
        <ScrollView style={styles.screenContainer}>
            <NavigationBar navigation={navigation} />
            <View style={globalStyles.yellowLiner} />

            <ImageBackground
                source={require('../assets/img/mainPic.webp')}
                style={styles.firstContentContainer}
            >
                <Image
                    source={require('../assets/img/labelPic.webp')}
                    style={styles.imgLabel}
                ></Image>
                <Text
                    style={[
                        globalStyles.textLg,
                        { marginLeft: 20, marginTop: 'auto', color: 'white' },
                    ]}
                >
                    Gapai Mimpimu Bersama UMS
                </Text>
                <Text
                    style={[
                        globalStyles.textSm,
                        {
                            marginLeft: 20,
                            width: '80%',
                            color: 'white',
                            zIndex: 10,
                        },
                    ]}
                >
                    Dengan 65 Program Studi UMS dapat menyerap minat dan bakat
                    calon pesera didik baru. UMS Berkomitmen untuk mewujudkan
                    cita cita mulia: Humanisasi, Liberasi dan Trasendensi
                </Text>
                <View style={[styles.buttonDaftar, { zIndex: 10 }]}>
                    <Text style={globalStyles.textXl}>
                        Informasi Pendaftaran
                    </Text>
                </View>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.8)']}
                    style={[
                        {
                            width: '100%',
                            height: 150,
                            position: 'absolute',
                            marginTop: 170,
                        },
                    ]}
                ></LinearGradient>
            </ImageBackground>

            <View style={styles.secondContentContainer}>
                <Text style={globalStyles.textXl}>UMS Ranking</Text>
                <Text
                    style={[
                        globalStyles.textLg,
                        {
                            color: '#32327e',
                            fontWeight: 'normal',
                            width: '80%',
                            textAlign: 'center',
                        },
                    ]}
                >
                    Universitas Swasta Terbaik di Jawa Tengah, Indonesia (QS
                    Ranking 2022)
                </Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    style={[{ zIndex: 10 }]}
                    data={achievementList}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Image
                            source={item.imgUrl}
                            style={[
                                {
                                    width: 200,
                                    height: 200,
                                    resizeMode: 'contain',
                                    marginEnd: 50,
                                    zIndex: 10,
                                },
                            ]}
                        />
                    )}
                />
                <LinearGradient
                    colors={[
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 0.3)',
                    ]}
                    style={[
                        {
                            width: '100%',
                            height: 250,
                            position: 'absolute',
                            marginTop: 200,
                            zIndex: 2,
                        },
                    ]}
                />
                <ImageBackground
                    style={[
                        {
                            width: '250%',
                            height: 200,
                            position: 'absolute',
                            marginTop: 250,
                            opacity: 0.3,
                        },
                    ]}
                    source={require('../assets/img/ornamen.png')}
                />
            </View>

            <ImageBackground
                source={require('../assets/img/content3.webp')}
                style={[styles.thirdContentContainer]}
            >
                <Text
                    style={[
                        globalStyles.textLg,
                        {
                            marginLeft: 20,
                            marginTop: 'auto',
                            color: 'white',
                            zIndex: 10,
                        },
                    ]}
                >
                    Program Beasiswa
                </Text>
                <Text
                    style={[
                        globalStyles.textSm,
                        {
                            marginLeft: 20,
                            width: '50%',
                            color: 'white',
                            zIndex: 10,
                        },
                    ]}
                >
                    UMS menawarkan beranekaragam beasiswa untuk tetap menyalakan
                    asa belajar mahasiswa
                </Text>
                <View style={[styles.buttonDaftarSm, { zIndex: 10 }]}>
                    <Text
                        style={[
                            globalStyles.textSm,
                            { color: '#32327e', marginLeft: 0 },
                        ]}
                    >
                        Daftar Sekarang
                    </Text>
                </View>
                <LinearGradient
                    colors={['rgba(50, 50, 126, 1)', 'rgba(50, 50, 126, 0.1)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ width: '50%', height: 170, position: 'absolute' }}
                />
            </ImageBackground>

            <View style={styles.fourthContentContainer}>
                <Text style={[globalStyles.textXl, { zIndex: 10 }]}>
                    Jajaran Lulusan UMS
                </Text>
                <Text
                    style={[
                        globalStyles.textLg,
                        {
                            color: '#32327e',
                            fontWeight: 'normal',
                            width: '80%',
                            textAlign: 'center',
                            zIndex: 10,
                        },
                    ]}
                >
                    Mereka adalah lulusan terbaik kami
                </Text>
                <FlatList
                    style={[{ zIndex: 10 }]}
                    showsHorizontalScrollIndicator={false}
                    data={bestGraduatedList}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View
                            style={[{ width: 250, height: 800, marginEnd: 30 }]}
                        >
                            <ImageBackground
                                source={item.imgUrl}
                                style={[{ width: 'auto', height: 400 }]}
                            >
                                <Text
                                    style={[
                                        globalStyles.textLg,
                                        {
                                            width: 150,
                                            backgroundColor: '#32327e',
                                            borderRadius: 3,
                                            paddingLeft: 10,
                                            marginTop: 'auto',
                                            marginLeft: 20,
                                            color: 'white',
                                            zIndex: 10,
                                        },
                                    ]}
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    style={[
                                        globalStyles.textLg,
                                        {
                                            width: 160,
                                            marginTop: 0,
                                            color: 'black',
                                            borderRadius: 3,
                                            paddingLeft: 10,
                                            backgroundColor: '#f4ca00',
                                            marginLeft: 20,
                                            zIndex: 10,
                                        },
                                    ]}
                                >
                                    {item.job}
                                </Text>
                                <Text
                                    style={[
                                        globalStyles.textSm,
                                        {
                                            width: '80%',
                                            marginTop: 10,
                                            marginBottom: 20,
                                            marginLeft: 20,
                                            color: 'white',
                                            zIndex: 10,
                                        },
                                    ]}
                                >
                                    {item.description}
                                </Text>
                                <LinearGradient
                                    colors={[
                                        'rgba(0, 0, 0, 0.0)',
                                        'rgba(0, 0, 0, 0.8)',
                                    ]}
                                    style={[
                                        {
                                            width: '100%',
                                            height: 150,
                                            position: 'absolute',
                                            marginTop: 250,
                                        },
                                    ]}
                                />
                            </ImageBackground>
                        </View>
                    )}
                />
                <LinearGradient
                    colors={[
                        'rgba(255, 255, 255, 0.3)',
                        'rgba(255, 255, 255, 1)',
                    ]}
                    style={[
                        {
                            width: '100%',
                            height: 250,
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}
                />
                <ImageBackground
                    style={[
                        {
                            width: '250%',
                            height: 200,
                            position: 'absolute',
                            opacity: 0.3,
                        },
                    ]}
                    source={require('../assets/img/ornamen.png')}
                />
            </View>

            <View style={globalStyles.yellowLiner} />
            <Footer />
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaViewContainer:{
        marginTop:25,
    },
    //Container Style
    screenContainer: {
        width: Dimensions.get('window').width,
    },
    firstContentContainer: {
        width: '100%',
        height: 320,
    },
    secondContentContainer: {
        width: '100%',
        height: 450,
        alignItems: 'center',
        gap: 20,
        paddingVertical: 60,
        backgroundColor: 'white',
    },
    thirdContentContainer: {
        width: '100%',
        height: 170,
        resizeMode: 'contain',
    },
    fourthContentContainer: {
        width: '100%',
        height: 600,
        alignItems: 'center',
        gap: 20,
        paddingVertical: 60,
        marginBottom: 50,
    },
    footerContainer: {
        width: '100%',
        height: 420,
        backgroundColor: '#32327e',
        justifyContent: 'space-between',
        paddingVertical: 45,
    },

    //Icon
    imgLabel: {
        width: 80,
        height: 45,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 20,
    },

    //button
    buttonDaftar: {
        width: '56%',
        height: 40,
        backgroundColor: '#f4ca00',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 20,
        marginBottom: 30,
        marginTop: 10,
    },
    buttonDaftarSm: {
        width: '30%',
        height: 25,
        backgroundColor: '#f4ca00',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 20,
        marginBottom: 30,
        marginTop: 10,
    },
})

export default HomeScreen
