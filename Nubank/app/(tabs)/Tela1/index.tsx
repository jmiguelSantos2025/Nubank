import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { useState } from "react";
import { router } from "expo-router";

export default function Tela1() {
  const [VisibleSAJ,setVisibleSAJ] = useState<Boolean>(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstPierce}>
        <View style={styles.viewIcons}>
          <Feather name="user" size={24} color="white" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "30%",
            }}
          >
            <TouchableOpacity >
            <Feather name={VisibleSAJ?"eye-off" : "eye"} size={24} color="white"  onPress={()=>  setVisibleSAJ(!VisibleSAJ)}/>
            </TouchableOpacity>
            <MaterialCommunityIcons
              name="help-circle-outline"
              size={24}
              color="white"
              onPress={()=>router.push("MeAjuda/")}
            />  
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="white"
            />
          </View>
        </View>
        <View style={styles.viewTextTop}>
          <Text style={styles.textTop}>Olá, Usuário</Text>
        </View>
      </View>

      <View style={styles.secondPierce}>
        <View style={styles.viewaccount}>
          <Text style={styles.account}>Conta</Text>
        </View>

        <View style={styles.viewSaldo}>
          {VisibleSAJ ? (<Text style={styles.saldo}>R$ 1.234,56</Text>) : (
            <View style={{width:120,height:30,backgroundColor:"#ccc", borderRadius:4}}/>      
            )}
          
        </View>

        <View style={styles.viewButtons}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.button}>
              <Feather name="dollar-sign" size={24} color="#810AD0" />
              <Text style={styles.buttonText}>Área Pix</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Feather name="arrow-up-circle" size={24} color="#810AD0" />
              <Text style={styles.buttonText}>Transferir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Feather name="arrow-down-circle" size={24} color="#810AD0" />
              <Text style={styles.buttonText}>Depositar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Feather name="credit-card" size={24} color="#810AD0" />
              <Text style={styles.buttonText}>Cartão</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.viewtextMyCards}>
          <AntDesign name="creditcard" size={18} color="black" />
          <Text style={styles.textMyCards}>Meus cartões</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.viewCardCredit}>
          <View style={styles.ViewtitleCardCredit}>
            <AntDesign name="creditcard" size={24} color="black" />
            <Text style={styles.titleCardCredit}>Cartão de Crédito</Text>
          </View>

          <View style={styles.ViewTextCardCredit}>
            <Text style={styles.subtitleCardCredit}>
              Peça seu cartão sem anuidade e tenha mais controle da sua vida
              financeira.
            </Text>
            <TouchableOpacity style={styles.buttonCreditCard}>
              <Text style={styles.textButtonCreditCard}>Pedir Cartão</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewSearchMore}>
            <Text style={styles.TitleContainerCards}>Descubra mais</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.cardsContainer}
            >
              <View style={styles.cardBottom}>
                <View style={styles.cardImageContainer}>
                  <Image
                    source={require("../../../assets/UserPortality.png")}
                    style={styles.cardImage}
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitleText}>
                    Portabilidade de salário
                  </Text>
                  <Text style={styles.cardDescription}>
                    Sua liberdade financeira começa com você escolhendo...
                  </Text>
                  <TouchableOpacity style={[styles.buttonCreditCard, styles.cardButton]}>
                    <Text style={styles.textButtonCreditCard}>
                      Quero conhecer
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.cardBottom}>
                <View style={styles.cardImageContainer}>
                  <Image
                    source={require("../../../assets/UserPortality.png")}
                    style={styles.cardImage}
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitleText}>Investimentos</Text>
                  <Text style={styles.cardDescription}>
                    Descubra como fazer seu dinheiro trabalhar para você.
                  </Text>
                  <TouchableOpacity style={[styles.buttonCreditCard, styles.cardButton]}>
                    <Text style={styles.textButtonCreditCard}>
                      Quero conhecer
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.cardBottom}>
                <View style={styles.cardImageContainer}>
                  <Image
                    source={require("../../../assets/UserPortality.png")}
                    style={styles.cardImage}
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitleText}>Empréstimos</Text>
                  <Text style={styles.cardDescription}>
                    Simule e contrate empréstimos com as melhores taxas.
                  </Text>
                  <TouchableOpacity style={[styles.buttonCreditCard, styles.cardButton]}>
                    <Text style={[styles.textButtonCreditCard,{fontSize:10}]}>
                      Quero conhecer
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  firstPierce: {
    width: "100%",
    height: 150,
    backgroundColor: "#810AD0",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  viewIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  viewTextTop: {},
  textTop: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  secondPierce: {
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 30,
  },
  viewaccount: {},
  account: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  viewSaldo: {
    marginBottom: 20,
  },
  saldo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
  },
  viewButtons: {
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#F0F1F5",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    marginRight: 10,
    width: 100,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    fontSize: 12,
    marginTop: 5,
    color: "#810AD0",
    textAlign: "center",
  },
  viewtextMyCards: {
    marginBottom: 10,
    backgroundColor: "#F0F1F5",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
  },
  textMyCards: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  viewCardCredit: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  ViewtitleCardCredit: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  titleCardCredit: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 8,
  },
  ViewTextCardCredit: {
    marginBottom: 10,
    gap: 8,
  },
  subtitleCardCredit: {
    fontSize: 14,
    color: "#444",
  },
  buttonCreditCard: {
    backgroundColor: "#810AD0",
    padding: 12,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonCreditCard: {
    color: "white",
    fontWeight: "bold",
  },
  ViewSearchMore: {
    marginTop: 10,
  },
  TitleContainerCards: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardsContainer: {
    paddingBottom: 20,
  },
  cardBottom: {
    backgroundColor: "white",
    borderRadius: 12,
    width: 220,
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: 'hidden',
  },
  cardImageContainer: {
    width: "100%",
    height: 120,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardContent: {
    padding: 16,
    height: 160,
    justifyContent: 'space-between',
  },
  cardTitleText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 15,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginVertical: 8,
  },
  cardButton: {
    width: '60%',
  },
  divider: {
    padding: 1,
    backgroundColor: "#F0F1F5",
    width: "100%",
    marginVertical: 10,
  },
});