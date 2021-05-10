import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF0E1',
    },
    backButton: {
        backgroundColor: '#59A563',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,

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
    header: {
        display:'flex',
        marginHorizontal: 18,
        flexDirection:'row',
        marginTop: 50,
    },
    img: {
        width:100,
        height:100,
        backgroundColor:'#CDCDCD',
        borderRadius: 20,
    },
    nameGardener: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#111',
        fontSize: 26,
        letterSpacing: -2,
        marginLeft: 17,
    },
    title: {
        fontFamily: 'Ubuntu_700Bold',
        color: '#111',
        fontSize: 20,
        letterSpacing: -1,
        marginTop: 40,
        marginBottom: 30,
        paddingHorizontal: 18,
    },
    informationService: {
        display:'flex',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        flexDirection:'row',
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderColor: '#A08F7D',
        alignItems: 'center',
        marginBottom: 16,
    },
    titleService: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        color:'#503126'
    },
    DescriptionService: {
        fontFamily: 'Ubuntu_400Regular',
        marginTop: 10,
        fontSize: 14,
        color:'#503126'
    },
    priceService: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15,
        marginTop: 10,
        color:'#503126'
    },
    buttonDetails: {
        backgroundColor: '#59A563',
        color:'#FFF',
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 14,
        fontFamily: 'Ubuntu_700Bold',
        paddingVertical: 12,
        paddingHorizontal: 33,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    }
    
})

export default styles