import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A3CE58',
    },
    backButton: {
        backgroundColor: '#59A563',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        marginBottom: 10,

        left: 15,
        top: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    buttonIcon: {
        fontSize: 30,
        color:'#fff',
        display: 'flex',
    },
    title: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#111',
        fontSize: 28,
        letterSpacing: -2,
        marginTop: 40,
        paddingHorizontal: 18,
    },
    titleSecondary:{
        fontFamily: 'Ubuntu_300Light',
        color: '#111',
        fontSize: 28,
        letterSpacing: -2,
        marginBottom: 30,
        paddingHorizontal: 18,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 15,
        textAlignVertical: 'top',
        marginHorizontal: 18,
    },
    containerDescriptionLogin:{
        display: "flex",
        textAlign: "center",
        marginTop: '60%'
    },
    descriptionLogin: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 16,
        color: '#503126',
        letterSpacing: -.3,
    },
    descriptionLoginSecondary:{
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 16,
        color: '#503126',
        letterSpacing: -.3,
    },
    button: {
        backgroundColor: '#FED353',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 12,
        marginHorizontal: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    buttonText: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 16,
        color: '#503126',
    }
});

export default styles;
