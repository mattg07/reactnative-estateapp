import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import {useState}from 'react'

interface Props {
    onSubmit: (content: string) => void
}

export default function AddPostForm({onSubmit}: Props) {
 const [content, setContent] = useState("");

  return (
    <View className='bg-violet'>
      <TextInput
      className='border border-gray-600 bg-red-600'
      value={content}
      onChangeText={setContent}
      style={styles.input}
      />
      <Button title='Publicar' onPress={() => {
        onSubmit(content)
        setContent("")
      }}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 10,
        paddingTop: 5
    }
})