import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFD148',
        alignItems:"center"
    },
    banner: {
        width: 269,
        height: 229,
        resizeMode: 'contain',
        marginTop: 70,
    },
    title: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 35,
        letterSpacing: -3.5,
        alignItems: 'center',
        marginTop: 80,

    },
    description: {
        fontFamily: 'Ubuntu_300Light',
        fontSize: 16,
        letterSpacing: -1,
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 23,
        textAlign:"center"
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: "space-around",
        height: 56,
        width: '100%',
        marginTop: '25%',
    },
    buttonRegister: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        marginRight: -75,
        zIndex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    buttonGetIn: {
        backgroundColor: '#59A563',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        paddingLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    textRegister: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 16,
        color: '#59A563',

    },
    textGetIn: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 16,
        color: '#FFF',

    }
})

export default styles;