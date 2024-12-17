import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface ISuperButton {
    title: string,
    icon?: keyof typeof Ionicons,
    onPress: () => void
}


const SuperButton = (props: ISuperButton) => {
    return (
        <TouchableOpacity style = {style.container} onPress={props.onPress}>
            {props.icon && <Ionicons name='add-circle' size={24} color="white" />}
            <Text style = {style.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'purple',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
        margin: 16,
        borderRadius:25,
    },

    text: {
        marginLeft: 10,
        color:'white',
        fontSize: 18,
        fontWeight: 'bold',
        
        
    }
})

export default SuperButton;