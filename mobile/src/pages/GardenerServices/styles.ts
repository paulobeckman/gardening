import { Dimensions, StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    menuButton: {
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
    logout: {
        backgroundColor: '#59A563',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,

        position: 'absolute',
        right: 20,
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
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
        height: 50,
        width: 50,

        position: 'absolute',
        left: 280,
        right: 100,
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
    buttonIcon: {
        fontSize: 20,
        color:'#fff',
        display: 'flex',
    },
    calloutContainer: {
        width: 140,
        height: 49,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center',
        borderColor: 'rgba(1, 1, 1, 0.05)',
        borderWidth: 1
    },
    calloutText: {
        color: '#111',
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 14,
    }   
})

export default styles