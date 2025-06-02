import { StyleSheet, Text, View, Dimensions, Pressable, TouchableOpacity, ImageSourcePropType, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

const { width: LarguraTelaSAJ } = Dimensions.get('window');

const { height: AlturaTelaSAJ } = Dimensions.get('window');

const FontScaleSAJ = (size: number) => (LarguraTelaSAJ / 375) * size;

interface TudoProps{
    Source: ImageSourcePropType,
    Titulo: string,
    Texto: string,
    Promocao: string | number,
}

export default function Tudo({Source, Titulo, Texto, Promocao}:TudoProps) {
  return (
    <Pressable 
    style={({ pressed }) => [
    styles.Botao,
    pressed && styles.Pressed,
    ]}
    >
        <View style = {{flexDirection: 'row', gap: 10, width: "75%",}}>
            <Image source={Source} style = {styles.Imagem}/>
            <View style = {{width: "75%",}}>
                <Text style = {{fontWeight: "700", fontSize: FontScaleSAJ(16),}}>
                    {Titulo}
                </Text>
                <Text style = {{color: "#6F6F6F",}}>
                    {Texto}
                </Text>
            </View>
        </View>

        <Text style = {{fontWeight: "700", fontSize: FontScaleSAJ(14), width: "25%", textAlign: "right",}}>
            {Promocao} OFF
        </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Botao:{
    borderRadius: 10,
    width: "100%",
    gap: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  Pressed:{
    transform: [{scale:0.98}],
  },

  Imagem:{
    width: LarguraTelaSAJ*0.15,
    height: LarguraTelaSAJ*0.15,
    resizeMode: "contain",
    borderRadius: 10,
  },
});
