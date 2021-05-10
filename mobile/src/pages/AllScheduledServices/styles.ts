import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A3CE58',
    },
    title: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#111',
        fontSize: 28,
        letterSpacing: -2,
        marginTop: 60,
        marginBottom: 18,
        paddingHorizontal: 18,
    },
    card:{
        backgroundColor:'#fff',
        marginHorizontal: 20,
        marginBottom: 17,
        borderRadius: 30,
        overflow: 'hidden',
    },
    cardInformation: {
        display:'flex',
        flexDirection:'row',
        padding: 12,
        width: '70%',
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
    nameCard :{
        fontFamily: 'Ubuntu_500Medium',
        color: '#111',
        fontSize: 20,
        marginBottom: 8,
        letterSpacing: -1,
    },
    titleCard: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#111',
        fontSize: 16,
        letterSpacing: -1,
    },
    desciptionCard: {
        fontFamily: 'Ubuntu_400Regular',
        paddingHorizontal: 12,
        marginBottom: 10,
        fontSize: 16,
        color:'#503126'

    },
    priceCard: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15,
        marginTop: 10,
        color:'#503126'
    },
    titleMoreInformation:{
        display:'flex',
        flexDirection:'row',
        paddingLeft: 12,
        marginBottom: 8,

    },
    styleTitleData:{
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        paddingRight: 88,
        color: '#503126'
    },
    styleTitleHour:{
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        paddingRight: 38,
        color: '#503126'
    },
    styleTitleNumber:{
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        color: '#503126'
    },
    moreInformation: {
        display:'flex',
        flexDirection:'row',
        paddingHorizontal: 12,
        justifyContent: 'space-between'
    },
    styleDescription: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15,
        color: '#503126'
    },
    titleDesciptionAddress: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        marginTop: 20,
        paddingLeft: 12,
        paddingRight: 98,
        color: '#503126'
    },
    mapContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1.2,
        borderColor: '#FED353',
        marginTop: 25,
        marginHorizontal: 12,
        backgroundColor: '#FED353',
    },
    routesContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    routesText: {
        fontFamily: 'Ubuntu_700Bold',
        color: '#503126'
    },
    mapStyle: {
        width: '100%',
        height: 150,
    },
    desciptionAddress:{
        fontFamily: 'Ubuntu_400Regular',
        paddingHorizontal: 12,
        marginTop: 8,
        fontSize: 16,
        color:'#503126'
    },
    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 12,
        marginVertical: 18
    },
    contactButtonText: {
        color: '#FFF',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        marginLeft: 8,
    },
    constentMensagem: {
        display: 'flex',
        alignItems: 'center',
    },
    mensagem: {
        marginTop: '60%'
    },
})

export default styles