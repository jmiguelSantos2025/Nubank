import { StyleSheet, Text, View, Dimensions, Pressable, TouchableOpacity, ScrollView, Image } from 'react-native';
import {MaterialCommunityIcons, FontAwesome, Entypo} from '@expo/vector-icons';
import { use, useState } from 'react';
import Botao from '../../../Components/Botao';
import Tudo from '../../../Components/Tudo';
import { router } from 'expo-router';

const { width: LarguraTelaSAJ } = Dimensions.get('window');

const { height: AlturaTelaSAJ } = Dimensions.get('window');

const FontScaleSAJ = (size: number) => (LarguraTelaSAJ / 375) * size;

export default function Tela3() {

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
        <View style = {[styles.Info,]}>
          <Text style = {styles.Titulo}>Destaques</Text>
            <ScrollView horizontal = {true} contentContainerStyle = {{gap: 15,}} showsHorizontalScrollIndicator={false}>
              <Pressable
              style={({ pressed }) => [
              pressed && styles.Pressed2,
              ]}
              >
                <Image source={require("../../../assets/Nike.jpg")} style = {styles.Image}/>
              </Pressable>
              <Pressable
              style={({ pressed }) => [
              pressed && styles.Pressed2,
              ]}
              >
                <Image source={require("../../../assets/PS.jpg")} style = {styles.Image}/>
              </Pressable>
              <Pressable
              style={({ pressed }) => [
              pressed && styles.Pressed2,
              ]}
              >
                <Image source={require("../../../assets/Adidas.jpg")} style = {styles.Image}/>
              </Pressable>
              <Pressable
              style={({ pressed }) => [
              pressed && styles.Pressed2,
              ]}
              >
                <Image source={require("../../../assets/Xbox.jpg")} style = {styles.Image}/>
              </Pressable>
            </ScrollView>
        </View>

        <View style = {styles.Info}>
          <Text style = {styles.Titulo}>Tem de tudo</Text>
          <Tudo
            Source={require("../../../assets/Shopee.png")}
            Titulo='Shopee'
            Texto='Cupom para compras acima de R$40'
            Promocao={"R$10"}
          />

          <Tudo
            Source={require("../../../assets/MagazineLuiza.png")}
            Titulo='Magazine Luiza'
            Texto='Para produtos vendidos e entregues magalu'
            Promocao={"10%"}
          />

          <Tudo
            Source={require("../../../assets/Bemol.png")}
            Titulo='Bemol'
            Texto='Seja um cliente diamante'
            Promocao={"5%"}
          />

          <Tudo
            Source={require("../../../assets/Xbox.jpg")}
            Titulo='XBOX'
            Texto='Game Pass em promoção'
            Promocao={"25%"}
          />

          <Tudo
            Source={require("../../../assets/PS.jpg")}
            Titulo='PlayStation'
            Texto='PlayStation Plus em promoção'
            Promocao={"15%"}
          />

          <Tudo
            Source={require("../../../assets/Temu.png")}
            Titulo='Temu'
            Texto='Promoção em todos os produtos abaixo de R$100'
            Promocao={"30%"}
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

  Pressed2:{
    transform: [{scale:0.99}],
  },

  Tela:{
    width: "100%",
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

  Image:{
    width: LarguraTelaSAJ*0.62,
    height: AlturaTelaSAJ*0.32,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
