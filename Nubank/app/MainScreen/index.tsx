import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function MainScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstPierce}>
        <View style={styles.viewIcons}>
          <Feather name="user" size={24} color="white" />
          <View style={{flexDirection:"row",justifyContent:"space-between",width:"20%"}}>
          <Feather name="eye" size={24} color="white" />
          <MaterialCommunityIcons name="email-outline" size={24} color="white" />
          </View>
          </View>

        <View style={styles.viewTextTop}>
          <Text style={styles.textTop}>Olá,{}</Text>
        </View>
      </View>

      <View style={styles.secondPierce}>
        <View style={styles.viewaccount}>
          <Text style={styles.account}>Conta</Text>
        </View>

        <View style={styles.viewSaldo}>
          <Text style={styles.saldo}>{}</Text>
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
          <Text style={styles.textMyCards}>Meus cartões</Text>
        </View>

        <View style={styles.viewCards}>

          <View style={styles.viewCardCredit}>
            <View style={styles.ViewtitleCardCredit}>
              <Text style={styles.titleCardCredit}>Cartão de Crédito</Text>
            </View>

            <View style={styles.ViewTextCardCredit}>
              <Text style={styles.subtitleCardCredit}>
                Fatura atual: <Text style={{ fontWeight: "bold" }}>R$ 1.250,00</Text>
              </Text>
              <Text style={styles.subtitleCardCredit}>Limite disponível: R$ 2.000,00</Text>
            </View>

            <View style={styles.ViewSearchMore}>
              <Text style={styles.TitleContainerCards}>Descubra mais</Text>

              <View style={styles.cardBottom}>
                <TouchableOpacity style={styles.miniCard}>
                  <MaterialIcons name="smartphone" size={24} color="#810AD0" />
                  <Text style={styles.miniCardText}>Recarga</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.miniCard}>
                  <MaterialIcons name="security" size={24} color="#810AD0" />
                  <Text style={styles.miniCardText}>Seguro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.miniCard}>
                  <MaterialIcons name="store" size={24} color="#810AD0" />
                  <Text style={styles.miniCardText}>Loja</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    width:"100%",
    
  },
  button: {
    backgroundColor: "#F0F1F5",
    height:"50%",
    borderRadius: 80,
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
    backgroundColor:"#F0F1F5"
  },
  textMyCards: {
    fontSize: 16,
    fontWeight: "bold",
    
  },
  viewCards: {},
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 16,
  },
  viewCardCredit: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
  },
  ViewtitleCardCredit: {
    marginBottom: 10,
  },
  titleCardCredit: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#810AD0",
  },
  ViewTextCardCredit: {
    marginBottom: 10,
  },
  subtitleCardCredit: {
    fontSize: 14,
    color: "#444",
  },
  ViewSearchMore: {
    marginTop: 10,
  },
  TitleContainerCards: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  miniCard: {
    backgroundColor: "#F8F8FA",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    width: "30%",
  },
  miniCardText: {
    marginTop: 5,
    fontSize: 12,
    color: "#444",
    textAlign: "center",
  },
});
