import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "https://www.iconsdb.com/icons/preview/white/favorite-3-xxl.png",
    likedImageUrl:
      "https://www.iconsdb.com/icons/preview/white/heart-69-xxl.png",
  },
  {
    name: "Comment",
    imageUrl: "https://www.iconsdb.com/icons/preview/white/comments-xxl.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://www.iconsdb.com/icons/preview/white/flip-vertical-xxl.png",
  },
  {
    name: "Save",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/6165/6165217.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.story} source={{ uri: post.profile_picture }} />
        <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
          {post.user}
        </Text>
      </View>
      <Text style={{ color: "white", fontWeight: "900", marginRight: 5 }}>
        ...
      </Text>
    </View>
  );
};

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.shareIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <View style={{ alignItems: "flex-end", flex: 1 }}>
      <Icon imgStyle={styles.saveIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user} </Text>
      <Text>{post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600' }}>{comment.user}</Text>{' '}
                    { comment.comment }
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  shareIcon: {
    marginTop: -3,
    transform: [{ rotate: "135deg" }],
    width: 21,
    height: 21,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
  saveIcon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
});

export default Post;