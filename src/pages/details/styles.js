import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    incidentButton: {
        marginRight: 15
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 18
    },

    incidentProperty: {
        fontSize: 16,
        color:'#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 3,
        fontSize: 15,
        marginBottom: 10,
        color: '#737380'
    },

    incidentValueLast: {
        fontSize: 15,
        color:'#737380',
        marginBottom: 0
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 19,
        color: '#13131a',
        lineHeight: 28
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    contacts: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    contact: {
        backgroundColor: '#f1f1f6',
        borderRadius: 8,
        height: 45,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    contactText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#e02041'
    },

    heroTitleThanks: {
        marginTop: 18,
        marginLeft: 50,
        color: '#7f8089'
    },

    heroTitleThanksSave: {
        fontWeight: 'bold',
    }




})