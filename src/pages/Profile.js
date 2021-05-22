/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { colors } from '../assets/colors';
import { fonts } from '../assets/fonts';
import { hp, sizeFont, wp } from '../assets/responsive';
import ButtonD from '../components/ButtonD';
import Ionicons from 'react-native-vector-icons/Ionicons';

const dataUser = {
    'login': 'ahmadsiddiq-lang',
    'id': 60493382,
    'node_id': 'MDQ6VXNlcjYwNDkzMzgy',
    'avatar_url': 'https://avatars.githubusercontent.com/u/60493382?v=4',
    'gravatar_id': '',
    'url': 'https://api.github.com/users/ahmadsiddiq-lang',
    'html_url': 'https://github.com/ahmadsiddiq-lang',
    'followers_url': 'https://api.github.com/users/ahmadsiddiq-lang/followers',
    'following_url': 'https://api.github.com/users/ahmadsiddiq-lang/following{/other_user}',
    'gists_url': 'https://api.github.com/users/ahmadsiddiq-lang/gists{/gist_id}',
    'starred_url': 'https://api.github.com/users/ahmadsiddiq-lang/starred{/owner}{/repo}',
    'subscriptions_url': 'https://api.github.com/users/ahmadsiddiq-lang/subscriptions',
    'organizations_url': 'https://api.github.com/users/ahmadsiddiq-lang/orgs',
    'repos_url': 'https://api.github.com/users/ahmadsiddiq-lang/repos',
    'events_url': 'https://api.github.com/users/ahmadsiddiq-lang/events{/privacy}',
    'received_events_url': 'https://api.github.com/users/ahmadsiddiq-lang/received_events',
    'type': 'User',
    'site_admin': false,
    'name': 'Ahmad Siddiq',
    'company': null,
    'blog': '',
    'location': null,
    'email': null,
    'hireable': null,
    'bio': null,
    'twitter_username': null,
    'public_repos': 13,
    'public_gists': 0,
    'followers': 7,
    'following': 8,
    'created_at': '2020-01-31T01:00:09Z',
    'updated_at': '2021-05-21T06:38:44Z',
};

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <TouchableHighlight
                    underlayColor={colors.bgBlack4}
                    style={{ padding: wp(3) }} onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="chevron-back"
                        size={sizeFont(6.8)}
                        color={colors.fontBlack}
                    />
                </TouchableHighlight>
            </View>
            <View style={styles.info}>
                <View style={styles.boxImage}>
                    <Image source={{ uri: dataUser.avatar_url }}
                        style={styles.image}
                    />
                </View>
                <View style={{
                    marginTop: hp(2),
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: sizeFont(5),
                        fontFamily: fonts.Medium,
                    }}>Ahmad Siddiq</Text>
                    <Text>ahmadsiddiq-lang</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: hp(3),
                }}>
                    <View style={[styles.boxFollow, {
                        marginRight: wp(8),
                    }]}>
                        <Text style={{
                            fontSize: sizeFont(4),
                            color: colors.fontBlack1,
                        }}>followers</Text>
                        <Text style={{
                            fontSize: sizeFont(4.3),
                            fontFamily: fonts.Medium,
                        }}>12</Text>
                    </View>
                    <View style={styles.boxFollow}>
                        <Text style={{
                            fontSize: sizeFont(4),
                            color: colors.fontBlack1,
                        }}>followings</Text>
                        <Text style={{
                            fontSize: sizeFont(4.3),
                            fontFamily: fonts.Medium,
                        }}>12</Text>
                    </View>
                </View>
            </View>
            <View style={{
                marginHorizontal: wp(5),
                marginTop: hp(8),
                flex: 1,
            }}>
                <ButtonD
                // onPress={() => navigation.navigate('Profile')}
                >Keluar</ButtonD>
            </View>
            <View style={{
                alignItems: 'center',
                paddingBottom: hp(1),
            }}>
                <View style={styles.boxLogo}>
                    <Image source={require('../assets/images/git.png')}
                        style={styles.image}
                    />
                </View>
                <Text>@copyright 2021 | ahmad siddiq</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgWhite,
    },
    info: {
        alignItems: 'center',
        marginTop: hp(10),
    },
    boxFollow: {
        alignItems: 'center',
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    boxImage: {
        width: wp(25),
        height: wp(25),
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxLogo: {
        width: wp(18),
        height: wp(18),
    },
});
