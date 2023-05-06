import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Header = ({ navigation }) => {
  const handleSignOut = async () => {
    try {
     await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut} >
        <Image
          style={styles.logo}
          source={{
            uri: "https://static.wixstatic.com/media/c1f75a_58cf34e5174544e5ad5a633654860c03~mv2.png/v1/fill/w_766,h_300,al_c,lg_1,q_85,enc_auto/c1f75a_58cf34e5174544e5ad5a633654860c03~mv2.png",
          }}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  logo: {
    width: 130,
    height: 70,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 26,
    height: 26,
    bottom: 2,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    borderRadius: 20,
    bottom: 18,
    left: 20,
    width: 20,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
    fontSize: 10,
    marginLeft: 1,
  },
});

export default Header;
