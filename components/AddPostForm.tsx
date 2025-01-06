import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import {Feather} from '@expo/vector-icons';

interface Props {
  onSubmit: (content: string) => void;
}

export default function AddPostForm({ onSubmit }: Props) {
  const [content, setContent] = useState("");

  return (
    <View style={{
        backgroundColor: "#121211",
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 20,
    }} className="w-4/5 p-2">
      <Text className="text-gray-200 font-semibold p-2">
      ¿  What are you thinking ?
      </Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }} >
        <TouchableOpacity>
            <Feather color="blue" name="image" size={22}/>
        </TouchableOpacity>
      <Button
        title="Publicar"
        onPress={() => {
            onSubmit(content);
            setContent("");
        }}
        ></Button>
        </View>
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
  },
});
