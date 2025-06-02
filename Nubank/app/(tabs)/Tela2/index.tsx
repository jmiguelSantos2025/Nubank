import { StyleSheet, Text, View, Dimensions, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import {MaterialCommunityIcons, FontAwesome, Entypo} from '@expo/vector-icons';
import { use, useState } from 'react';
import Botao from '../../../Components/Botao';
import { router } from 'expo-router';

const { width: LarguraTelaSAJ } = Dimensions.get('window');

const { height: AlturaTelaSAJ } = Dimensions.get('window');

const FontScaleSAJ = (size: number) => (LarguraTelaSAJ / 375) * size;

export default function Tela2() {

  const [VisibleSAJ, setVisibleSAJ] = useState(false);

  return (
    <ScrollView  contentContainerStyle={styles.Container} showsVerticalScrollIndicator={false}>
      <View style = {styles.Cabecalho}>
        <Pressable
        style={({ pressed }) => [
        pressed && styles.Pressed,
        ]}
        >
          <MaterialCommunityIcons name="account-outline" style = {styles.PerfilIcon}/>
        </Pressable>

        <View style = {{flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20,}}>
          <TouchableOpacity
          onPress={()=>setVisibleSAJ(!VisibleSAJ)}
          >
            <MaterialCommunityIcons name={VisibleSAJ ? "eye-outline" : "eye-off-outline"} style = {styles.BotaoIcon}/>
            
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>router.push("MeAjuda")}>
            <MaterialCommunityIcons name="help-circle-outline" style = {styles.BotaoIcon}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="email-plus-outline" style = {styles.BotaoIcon}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style = {styles.Tela}>
        <View style = {styles.Info}>
          <Text style = {styles.Titulo}>Acompanhe seu dinheiro</Text>
          <Botao
          Icon={<FontAwesome name="dollar" style = {{fontSize: FontScaleSAJ(14), borderWidth: 3, borderRadius: 10, paddingVertical: 3, paddingHorizontal: 6,}}/>}
          Titulo='Caixinhas'
          Dinheiro={100}
          />

          <Botao
          Icon={<Entypo name="bar-graph" style = {{fontSize: FontScaleSAJ(20),}}/>}
          Titulo='Investimentos'
          Dinheiro={317.94}
          />

          <Botao
          Icon={<FontAwesome name="bitcoin" style = {{fontSize: FontScaleSAJ(24),}}/>}
          Titulo='Cripto'
          Dinheiro={758.90}
          />
        </View>

        <View style = {{width: LarguraTelaSAJ, height: 3, backgroundColor: "#F0F1F5", alignSelf: "center",}}/>

        <View style = {styles.Info}>
          <Text style = {styles.Titulo}>Seguros</Text>
          <Botao
          Icon={<MaterialCommunityIcons name="heart-outline" style = {{fontSize: FontScaleSAJ(24),}}/>}
          Titulo='Seguro de vida'
          />

          <Botao
          Icon={<MaterialCommunityIcons name="cellphone" style = {{fontSize: FontScaleSAJ(24),}}/>}
          Titulo='Seguro de celular'
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#810AD0',
    alignItems: 'center',
    paddingTop: 30,
  },

  Cabecalho:{
    width: "100%",
    paddingHorizontal: 25,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  PerfilIcon:{
    backgroundColor: "#8A2BE2",
    fontSize: FontScaleSAJ(24),
    color: "#ffffff", 
    borderRadius: 50, 
    padding: 15, 
    justifyContent: "center",
    alignItems: "center",
  },

  BotaoIcon:{
    fontSize: FontScaleSAJ(24),
    color: "#ffffff", 
    borderRadius: 50, 
    padding: 5, 
    justifyContent: "center",
    alignItems: "center",
  },

  Pressed:{
    transform: [{scale:0.98}],
  },

  Tela:{
    width: "100%",
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 25,
    paddingVertical: 30,
    gap: 30,

  },

  Info:{
    paddingVertical: 10,
    gap: 20,
  },

  Titulo:{
    fontSize: FontScaleSAJ(20),
    fontWeight: "600",
  },
});
