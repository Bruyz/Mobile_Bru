import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    supertopo: {
        paddingLeft: 10,
        padding: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    topo: {
        padding: 0.9,
        color: colors.white,
        fontSize: 35,
        fontFamily: 'RubikMonoOne_400Regular'
    },
    topo2: {
        fontSize: 35,
        color: colors.green,
        fontFamily: 'RubikMonoOne_400Regular'
    },
    semitopo: {
        paddingLeft: 8,
        color: colors.white,
        fontSize: 30,
        fontFamily: 'RubikMonoOne_400Regular'
    },
    button: {
        justifyContent: 'center',
        padding: 20,
        flexDirection: 'row',
       
    },
    
    espaco: {
        flex: 2
    }
})