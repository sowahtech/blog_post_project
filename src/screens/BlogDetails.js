import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'

export default function BlogDetails({ route, navigation }) {
    const { background } = route.params
    const { title } = route.params
    const { author_image } = route.params
    const { author_name } = route.params
    const { minutes } = route.params
    const { dot } = route.params
    const { image } = route.params
    const { details } = route.params
    return (
        <ScrollView>
            <View style={{
                height: 250,
                width: 320,
                marginHorizontal: 20,
                backgroundColor: background,
                marginVertical: 20,
            }}>
                <Image
                    source={image}
                    style={{
                        width: 200,
                        height: 200,
                        marginVertical: 28,
                        marginHorizontal: 60
                    }}
                />

                <Text style={{ justifyContent: "center", fontWeight: "bold", fontSize: 23, marginVertical: 5 }}>{title}</Text>

            </View>

            <View style={{ marginVertical: 60, flexDirection: "row", marginHorizontal: 20 }}>
                <Image source={author_image} style={{ width: 70, height: 70 }} />
                <Text style={{ marginTop: 30, fontWeight: "bold", fontSize: 20, marginHorizontal: 10, color: "#A8A2A6" }}>{author_name}</Text>
                <Text style={{ marginTop: -7, fontSize: 50 }}>{dot}</Text>
                <Text style={{ marginTop: 30, fontSize: 20, color: "#A8A2A6", fontWeight: "bold", marginRight: 15 }}>{minutes}</Text>
            </View>
            <View style={{marginTop: -40}}>
                <Text style={{ marginHorizontal: 15, fontSize: 20}}>{details}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})