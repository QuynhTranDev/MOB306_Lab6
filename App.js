import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [selectedLanguage, setSelectedLanguage] = useState();

  const languages = [
    "English",
    "Spanish",
    "Japanese",
    "VietNamese"
  ]

  const [isEnabled, setIsEnabled] = useState(false);

  const [isHiddenStatusBar, setHiddenStatusBar] = useState(false);

  const toggleSwitch = () => {

    setIsEnabled(!isEnabled)

    setHiddenStatusBar(!isEnabled)

  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="#00bfff"
        hidden={isHiddenStatusBar}
      />
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => {
          alert(`Languge you choose: ${languages[itemIndex]}`)
          setSelectedLanguage(itemValue)

        }


        }>
        <Picker.Item label={languages[0]} value="Eng" />
        <Picker.Item label={languages[1]} value="Span" />
        <Picker.Item label={languages[2]} value="JP" />
        <Picker.Item label={languages[3]} value="VN" />
      </Picker>

      <View style={styles.switchContainer}>

        <Switch
          trackColor={{ false: 'gray', true: 'gray' }}
          thumbColor={isEnabled ? 'white' : 'white'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        <Text>{!isEnabled ? "  Hide Status Bar" : "  Show Status Bar"}</Text>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
});

