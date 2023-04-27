import {Pressable, Text, View} from "react-native";

type GoalTextProps = {
    itemData: {index: number, item: string};
    handleRemoveGoal: (index: number) => void;
    textStyles: any;
}

export default function GoalText({itemData, handleRemoveGoal, textStyles}: GoalTextProps) {
    return (
        <View style={{flex: 1}}>
            <Pressable
                android_ripple={{color: '#ddd'}}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#ddd' : 'transparent',
                    },
                    textStyles.textGoal,
                ]}
            >
                <Text
                    onPress={() => handleRemoveGoal(itemData.index)}>{itemData.item}
                </Text>
            </Pressable>
        </View>
    )
};
