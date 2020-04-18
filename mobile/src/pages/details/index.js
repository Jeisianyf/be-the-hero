import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import {useNavigation, useRoute } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png';

import styles from './styles';



export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou interessado em ajudar no caso ${incident.title} no valor de R$${incident.value},00`;

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>

            <TouchableOpacity style={styles.incidentButton} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#de2041"/>
                </TouchableOpacity>

                <Image source={logoImg}/>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValueLast}>
                    {Intl.NumberFormat('pt-BR', 
                    {style: 'currency', 
                    currency: 'BRL'}).format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>
                <Text style={styles.heroDescription}>Entre em contato com a ONG:</Text>
                
                <View style={styles.contacts}>
                    <TouchableOpacity style={[styles.contact, {backgroundColor: '#1eb89f'}]} onPress={sendWhatsApp}>
                        <Text style={[styles.contactText, {color: '#fff'}]}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contact} onPress={sendMail}>
                        <Text style={styles.contactText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.heroTitleThanks}>Obrigado <Text style={styles.heroTitleThanksSave}>por salvar o dia!</Text></Text>
            </View>

        </View>
    );
}