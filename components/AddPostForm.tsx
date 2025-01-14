import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

interface Props {
  onSubmit: (content: string, image : string) => void;
}

export default function AddPostForm({ onSubmit }: Props) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        backgroundColor: "",
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 20,
        width: 350,
        padding: 8,
      }}
    >
      <Text className="text-white font-semibold p-4">
        ¿ What are you thinking ?
      </Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handlePickImage}>
          <Feather color="white" name="image" size={22} />
        </TouchableOpacity>
        <Button
          title="Publicar"
          onPress={() => {
            onSubmit(content, image);
            setContent("");
            setImage("")
          }}
          color={"white"}
        ></Button>
      </View>
      {image && (
        <ImageBackground source={{uri: image}} style={styles.image}>
          <TouchableOpacity>
            <Feather name="x"  size={24} color="black"/>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 2,
    height: 30,
    borderRadius: 10,
    paddingTop: 5,
    marginTop: 10,
    color : "white",
    marginBottom: 10,
  },
  image: {
    height: 100,
    width: 100,
    alignItems:"flex-end",
    padding: 8,

  }
});
