import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState<string[]>([]); // string[] is an array of strings

  const handleGoalInput = (enteredText: string) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    if (enteredGoal == '') {
        return;
    }
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  const clearGoalInput = () => {
    setGoals([]);
  }

  const handleRemoveGoal = (index: number) => {
    setGoals(currentGoals => {
      const newGoals = [...currentGoals];
      newGoals.splice(index, 1);
      return newGoals;
    });
  }

  return (
    <View style={containerStyles.appContainer}>
      <View style={containerStyles.inputContainer}>
        <TextInput
            placeholder="Today's Goals!"
            style={textStyles.textInput}
            onChangeText={handleGoalInput}
        />
        <Button title={"Add Goal"} onPress={addGoalHandler} />
      </View>
      <SafeAreaView
          style={containerStyles.goalsContainer}
      >
        <FlatList
            data={goals}
            renderItem={itemData => (
                <View>
                  <Text style={textStyles.textGoal} onPress={() => handleRemoveGoal(itemData.index)}>{itemData.item}</Text>
                </View>
            )}
        />
      </SafeAreaView>
      <View style={containerStyles.clearAllButton}>
        <Button title={"Clear Input"} onPress={clearGoalInput}/>
      </View>
    </View>
  );
}

const containerStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  goalsContainer: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',

  },
  clearAllButton: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: '#ccc',
    justifyContent: 'center',
    marginTop: 10,
  },
});

const textStyles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 4,
    width: '70%'
  },
  textGoal: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  }
});
