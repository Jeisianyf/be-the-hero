import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 15,
        lineHeight: 24,
        color: '#737380'
    },

    descriptionTextBold: {
        fontWeight: 'bold'
    },

    incidentsList: {
        marginTop: 32
    },

    incidents: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },

    incidentProperty: {
        fontSize: 15,
        color:'#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 5,
        fontSize: 15,
        marginBottom: 20,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 170
    },

    detailsButtonText: {
        marginRight: 5,
        color: '#de2041',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }

});