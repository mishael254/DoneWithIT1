import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor:"lightblue",
      flex:1,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    }}>
        <View style={{
          backgroundColor:"orange",
          
          width:100,
          height:300
        }}
        />
        <View style = {{
          backgroundColor:"indigo",
          
          width:100,
          height:200
        }}
        />
        <View style = {{
          backgroundColor:"lightgreen",
          
          width:100,
          height:100
        }}/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
