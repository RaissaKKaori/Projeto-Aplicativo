import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable, TouchableOpacity, Image } from'react-native'

import dicas from './srcMenu/menuAbas'
import { Picker } from '@react-native-picker/picker';

export default function App(){
  const [menuVisivel, setMenuVisivel] = useState();


  function toggleMenu(){
    setMenuVisivel(!menuVisivel); // Alterna entre visível e invisível
  }
  return(
    
  <View>
    
      <View style={styles.container}>
        <Text style={styles.texto}>NOME DO APP</Text>
      </View>
      <View>
        <Pressable onPress={toggleMenu}>
          <View>
          <Text style={styles.tracos}>≡</Text>
          </View>
        </Pressable>

        {menuVisivel && 
          <View style={styles.blocoMenu}>

            <Image
                source={require('./src/Dicas.png')}
                style={styles.imgMenu}
            />
            <Pressable> 
              <Text style={ styles.textomenu }> Dicas </Text>
            </Pressable>

            <Image
              source={(require('./src/Home.png'))}
              style={styles.imgMenu}
            />
            <Pressable>
            <Text style={styles.textomenu}> Pagina inicial </Text>
            </Pressable>

            <Image
              source={(require('./src/Lupa.png'))}
              style={styles.imgMenu}
            />
            <Pressable>
            <Text style={styles.textomenu}> Pesquisa </Text>
            </Pressable>

            <Image
              source={(require('./src/Chat.png'))}
              style={styles.imgMenu}
            />
            <Pressable>
            <Text style={styles.textomenu}> Bate papo </Text >
            </Pressable>

            <Image
              source={(require('./src/Ouvidoria.png'))}
              style={styles.imgMenu}
            />
            <Pressable>
            <Text style={styles.textomenu}> Ouvidoria </Text>
            </Pressable>
          </View>

        }
      

      </View>

    </View>
  );

}
const styles = StyleSheet.create({
  container:{
    height: 100,
    backgroundColor:'#0B696B'
  },
  texto:{
    flex: 1,
    textAlign: "center",
    fontSize: 35,
    marginTop: 30
  },
  tracos:{
    fontSize: 95,
    marginTop: -110,
    color: '#0b909e',
  },
  blocoMenu:{
    width:250,
    height: '100%',
    marginTop: -16,
    backgroundColor:'#65c4c9',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  textomenu:{
    fontSize: 24,
    marginLeft: 45,
    marginTop:-45

  },
  imgMenu:{
    height:30,
    width: 30,
    borderRadius: 20,
    margin: 15
  }
})