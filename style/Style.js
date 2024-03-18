import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25
    },
    font: {
        fontFamily: "Inter-Regular"
    },
    segmentedButtonsContainer: {
        height: 100,
        justifyContent: "center",
    },
    segmentedButtons: {
        borderWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 25
    },
    text: {
        fontSize: 20,
        marginBottom: 5,
        color: "#ffffff",
        fontFamily: "Inter-Regular"
    },
    textInput: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: 20,
        backgroundColor: "#ffffff",
        height: 60,
        marginBottom: 50,
        fontFamily: "Inter-Regular"
    },
    calendar: {
        marginBottom: 100
    },
    buttonAdd: {
        borderRadius: 100,
        backgroundColor: "#fef653",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 50,
        height: 50,
        position: "absolute",
        bottom: 25
    },
    historyContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        height: 150,
        borderRadius: 30,
        marginBottom: 10,
        padding: 20
    },
    historyText: {
        fontSize: 20,
        fontFamily: "Inter-Regular"
    },
    historyNumber: {
        fontSize: 40,
        fontFamily: "Inter-Regular"
    },
    typeDayWrapper: {
        flex: 1,
        flexDirection: "column"
    },
    historyType: {
        flexDirection: "row"
    },
    historyDistance: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    settingsContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    switch: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    settingsText: {
        color: "#ffffff",
        margin: 20,
        fontFamily: "Inter-Regular"
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})