/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { colors } from '../assets/colors';
import { fonts } from '../assets/fonts';
import { hp, SCREEN_WIDTH, sizeFont, wp } from '../assets/responsive';
import ButtonD from '../components/ButtonD';
import Loading from '../components/Loading';

export default function Home({ navigation }) {

    const dataUser = useSelector(state => state.user.dataUser);
    const dataRepo = useSelector(state => state.user.dataRepo);

    console.log(dataRepo);

    const renderItem = ({ item }) => {
        return (
            <View style={{
                marginBottom: hp(4),
                paddingBottom: hp(2),
                borderBottomWidth: 2,
                borderColor: colors.border3,
            }}>
                <Text style={{
                    fontSize: sizeFont(3.6),
                    fontFamily: fonts.Medium,
                    color: colors.fontBlue,
                }}>{item.name}</Text>
                {
                    item.language &&
                    <Text style={{
                        color: colors.fontBlack1,
                    }}>Language :
                <Text style={{
                            fontSize: sizeFont(3.5),
                            color: colors.fontBlack,
                        }}> {item.language}</Text>
                    </Text>
                }
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.bgWhite} barStyle="dark-content" />
            <View style={styles.head}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View style={styles.boxImage}>
                        <Image source={{ uri: dataUser.avatar_url }}
                            style={styles.image}
                        />
                    </View>
                    <View style={{
                        marginLeft: wp(3),
                    }}>
                        <Text style={{
                            fontSize: sizeFont(4),
                            fontFamily: fonts.Medium,
                        }}>{dataUser.name}</Text>
                        <Text>{dataUser.login}</Text>
                    </View>
                </View>
                <View>
                    <ButtonD
                        onPress={() => navigation.navigate('Profile')}
                    >Profile</ButtonD>
                </View>
            </View>
            <View style={styles.content}>
                <View style={{
                    marginLeft: wp(3),
                    flexDirection: 'row',
                    marginVertical: wp(3),
                }}>
                    <View style={{ borderBottomWidth: 2, borderColor: colors.border1 }}>
                        <Text style={{
                            fontSize: sizeFont(4),
                            fontFamily: fonts.Medium,
                        }}>Repositories</Text>
                    </View>
                </View>
                {
                    dataRepo ?
                        <FlatList
                            data={dataRepo}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={renderItem}
                            contentContainerStyle={{
                                paddingHorizontal: wp(3),
                            }}
                        />
                        :
                        <View style={{
                            position: 'absolute',
                            width: SCREEN_WIDTH,
                            alignItems: 'center',
                            marginTop: hp(20),
                            zIndex: 999,
                        }}>
                            <Loading />
                        </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        paddingHorizontal: wp(3),
        paddingVertical: wp(5),
        backgroundColor: colors.bgWhite,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    boxImage: {
        width: wp(20),
        height: wp(20),
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: colors.bgWhite,
    },
});
