/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { View, Button, TextInput, SafeAreaView, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
const cuerpo = { backgroundColor: '#f00' };

const App = () => {
    const [Ncuenta, setNumeroDeCuenta] = useState(0);
    const [Telefono, setTelefono] = useState(0);
    const [Hoby, setHoby] = useState(0);
    const [comidaF, SetComidaFavorita] = useState(0);
    const [CiudadN, setCiudadDeNacimiento] = useState(0);
    const [datos, setData] = useState(0);
    
    const Fetch1 = () => {
        const url = 'https://calculadora-server.herokuapp.com/alumns';
        const body = {
            accountNumber: parseInt(Ncuenta),
            phone: parseInt(Telefono),
            hobby: Hoby,
            favoriteFood: comidaF,
            bornCity: CiudadN,
        };
        return fetch(url, {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            .then(res => res.json())
            .catch(err => console.error(err.message))
            .then(respuesta => console.log(respuesta));
    };
  
    const getData = () => {
        fetch('https://calculadora-server.herokuapp.com/alumns')
        .then(response=>response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
      };
      const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );

    return ( 
    <View>
        <TextInput style={{flex:1, paddingTop:50, paddingLeft:5 }}
        onChangeText = { number => setNumeroDeCuenta(number) }
        title = "Numero de cuenta" />
        <TextInput onChangeText = { number => setTelefono(number) }
        title = "Telefono" />
        <TextInput onChangeText = { text => setHoby(text) }
        title = "Hoby" />
        <TextInput onChangeText = { text => SetComidaFavorita(text) }
        title = "Comida Favorita" />
        <TextInput onChangeText = { text => setCiudadDeNacimiento(text) }
        title = "ciuda de nacimiento" />
        <Button onPress = {Fetch1 }
        title = "Enviar Datos" />
        <Button onPress = {getData }
        title = "Recibir Datos" />
           <FlatList
        data={datos}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        />

    </View>        
    );
};

export default App;