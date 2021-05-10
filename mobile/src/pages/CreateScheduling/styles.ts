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
    headerContainer: {
        display:'flex',
        marginHorizontal: 18,
        flexDirection:'row',
        marginTop: 65,
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    img: {
        width: 50,
        height: 50,
        backgroundColor:'#CDCDCD',
        borderRadius: 20,
    },
    nameGardener: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#111',
        fontSize: 22,
        letterSpacing: -1,
        marginLeft: 20,
    },
    descriptionContainer: {
        display:'flex',
        marginHorizontal: 18,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 20,
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
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
        color:'#503126',
        backgroundColor: '#FFF',
        marginHorizontal: 18,
        borderRadius: 20,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    priceService: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15,
        color:'#503126'
    },
    buttonDate:{
        backgroundColor: '#FED353',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: '50%',
        marginTop: 10,
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
    buttonDateText:{
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 16,
        color: '#503126',
    },
    button: {
        backgroundColor: '#59A563',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: '25%',
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
        color: '#FFF',
    }
})

export default styles