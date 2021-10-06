import { StyleSheet } from "react-native";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getStatusBarHeight()
    },
    sendArea: {
        height: "7%",
        flexDirection: "row"
    },
    sendInput: {
        width: '87%',
        backgroundColor: "#fff"
    },
    list: {
        maxHeight: '86%'
    }
})