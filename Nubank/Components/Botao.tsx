import { StyleSheet, Text, View, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

const { width: LarguraTelaSAJ } = Dimensions.get('window');

const { height: AlturaTelaSAJ } = Dimensions.get('window');

const FontScaleSAJ = (size: number) => (LarguraTelaSAJ / 375) * size;

interface BotaoProps{
    Icon: any,
    Titulo: string,
    Dinheiro?: number,
}

export default function Botao({Icon, Titulo, Dinheiro}:BotaoProps) {
  return (
    <Pressable style={({ pressed }) => [
        styles.Botao,
        pressed && styles.Pressed,
        ]}>
        <View style = {{flexDirection: "row", alignItems: "center", gap: 20,}}>
            {Icon}
            <Text style = {{fontWeight: "600", fontSize: FontScaleSAJ(15), textAlignVertical: "center",}}>
                {Titulo}
            </Text>
        </View>
        {Dinheiro !== undefined && (
        <Text style = {{fontWeight: "600", fontSize: FontScaleSAJ(15), textAlignVertical: "center",}}>R$ {Dinheiro.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
        )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Botao:{
    borderRadius: 10,
    width: "100%",
    padding: 20,
    backgroundColor: "#F0F1F5",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  Pressed:{
    transform: [{scale:0.98}],
  },
});
