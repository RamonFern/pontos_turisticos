import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Slider from '@react-native-community/slider';

const statusBarHeight = StatusBar.currentHeight

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-contente" translucent={true} backgroundColor='#F1F1F1' />
      <Text style={styles.heading}>Crie roteiro pelo Brasil</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Cidade destino</Text>
        <TextInput 
          placeholder='Ex.: São Luis, MA'
          style={styles.input}
        />

        <Text style={styles.label}>Tempo de estadia: <Text style={styles.days}> 10 </Text> dias</Text>

        <Slider
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#009088"
          maximumTrackTintColor="#000000"
        />
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Gerar roteiro</Text>
        <MaterialIcons name='travel-explore' size={24} color='#FFF' />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 16,
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 54,
  }, 
  form: {
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 8
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  }, 
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#94a3b8',
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  days: {
    backgroundColor: '#f1f1f1',
  },
  button: {
    backgroundColor: '#FF5656',
    width: '90%',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  }

});
