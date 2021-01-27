import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import virus1 from '../../assets/spanish_flu.png'
import profile1 from '../../assets/paul.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function BlogArticle({ image, title, author_image, author_name, minute, dot, background }) {
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: background, height: 150,
                width: 120,
                justifyContent: "center",
                alignItems: "center",
                flex: 3.5
            }}>
                <Image source={image}
                    style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.title_container}>
                    <Text style={styles.blog_title}>{title}</Text>
                </View>

                <View style={styles.bottomInfo}>
                    <Image source={author_image}
                        style={styles.profileImage} />
                    <Text style={styles.auth_name}>{author_name}</Text>
                    <Text style={styles.dot}>{dot}</Text>
                    <Text style={styles.mins}>{minute}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 7,
        flexDirection: "row",
        backgroundColor: "white"
    },

    image: {
        width: 90,
        height: 90,
    },
    imageContainer: {
        height: 150,
        width: 120,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        flex: 4
    },
    infoContainer: {
        flex: 6,
        marginHorizontal: 10
    },
    blog_title: {
        fontWeight: "bold",
        fontSize: 23
    },
    profileImage: {
        height: 40,
        width: 30,
        borderRadius: 15
    },
    bottomInfo: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 2
    },

    auth_name: {
        fontWeight: "bold",
        marginHorizontal: 5,
        color: "#A8A2A6",

    },
    mins: {
        color: "#A8A2A6"
    },
    dot: {
        marginTop: -35,
        fontSize: 50,
        color: "#A8A2A6"
    },
    title_container: {
        flex: 8
    }
})
