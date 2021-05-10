import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A3CE58',
    },
    buttonIcon: {
        fontSize: 20,
        color:'#fff',
        display: 'flex',
    },
    menuButton: {
        backgroundColor: '#59A563',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,

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
    button: {
        backgroundColor: '#FED353',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 60,
        marginHorizontal: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
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
    },
    title: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#111',
        fontSize: 28,
        letterSpacing: -2,
        marginTop: 25,
        marginBottom: 15,
        paddingHorizontal: 18,
        textAlign: 'center'
    },
    card:{
        backgroundColor:'#fff',
        marginHorizontal: 20,
        marginBottom: 17,
        borderRadius: 30,
    },
    cardInformation: {
        display:'flex',
        flexDirection:'row',
        padding: 12,
        width:'70%'
    },
    img: {
        width:100,
        height:100,
        backgroundColor:'#CDCDCD',
        borderRadius: 20,
    },
    allDesciptionCard :{
        marginLeft: 17,
    },
    titleCard: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#111',
        fontSize: 18,
        letterSpacing: -1,
    },
    desciptionCard: {
        fontFamily: 'Ubuntu_400Regular',
        marginTop: 20,
        fontSize: 16,
        color:'#503126'

    },
    priceCard: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15,
        marginTop: 10,
        color:'#503126'
    },
    buttonDetails: {
        color:'#59A563',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#59A563',
        borderRadius: 10,
        marginHorizontal: 99,
        fontSize: 14,
        fontFamily: 'Ubuntu_700Bold',
        paddingVertical: 8,
        marginBottom: 9
    },
    constentMensagem: {
        display: 'flex',
        alignItems: 'center',
    },
    mensagem: {
        marginTop: '40%'
    },
})

export default styles