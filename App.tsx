import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalInput from "./components/GoalInput";
import GoalText from "./components/GoalText";

export default function App() {
  const [goals, setGoals] = useState<string[]>([]);

  const addGoalHandler = (enteredGoal: string) => {
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  const clearGoalInput = () => {
    setGoals([]);
  };

  const handleRemoveGoal = (index: number) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal, i) => i !== index);
    });
  };

  return (
    <View style={containerStyles.appContainer}>
      <GoalInput
          addGoalHandler={addGoalHandler}
          containerStyles={containerStyles}
          textStyles={textStyles}
      />
      <SafeAreaView
          style={containerStyles.goalsContainer}
      >
        <FlatList
            data={goals}
            renderItem={itemData => (
                <GoalText itemData={itemData} handleRemoveGoal={handleRemoveGoal} textStyles={textStyles}/>
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
    padding: 10,
  }
});
