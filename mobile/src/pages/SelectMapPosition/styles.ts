import { Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    backButton: {
        backgroundColor: '#59A563',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,

        position: 'absolute',
        left: 20,
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
        fontSize: 25,
        color:'#fff',
        display: 'flex',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height+30,
    },
    pin: {
        width: 10,
        height: 10
    },
    nextButton: {
        backgroundColor: '#59A563',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,

        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },

    nextButtonText: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 16,
        color: '#FFF',
    }
})

export default styles