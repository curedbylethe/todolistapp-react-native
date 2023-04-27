import {Button, TextInput, View} from "react-native";
import {useState} from "react";

type GoalInputProps = {
    addGoalHandler: (text: string) => void;
    containerStyles: any;
    textStyles: any;
}

export default function GoalInput({addGoalHandler, containerStyles, textStyles}: GoalInputProps) {
    const [enteredGoal, setEnteredGoal] = useState('');

    const handleGoalInput = (text: string) => {
            setEnteredGoal(text);
    };

    const handleAddGoal = () => {
        if (enteredGoal.length === 0) {
            return;
        }
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <View style={containerStyles.inputContainer}>
            <TextInput
                placeholder="Today's Goals!"
                style={textStyles.textInput}
                onChangeText={handleGoalInput}
                value={enteredGoal}
            />
            <Button title={"Add Goal"} onPress={handleAddGoal} />
        </View>
    )
}
