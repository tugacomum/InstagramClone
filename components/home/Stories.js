import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "white", fontSize: 11, marginTop: 4, marginLeft: 14.5 }}>
              {story.user.length > 11
                ? story.user.slice(0, 11).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
        <View style={{width: 15}}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 14,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});

export default Stories;
