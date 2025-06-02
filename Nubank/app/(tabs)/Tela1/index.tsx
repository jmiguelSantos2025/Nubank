import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
  Dimensions,
  TextInput,
} from "react-native";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { router } from "expo-router";

const { width: LarguraTelaSAJ } = Dimensions.get("window");
const { height: AlturaTelaSAJ } = Dimensions.get("window");
const FontScaleSAJ = (size: number) => (LarguraTelaSAJ / 375) * size;
export default function Tela1() {
  const [saldoSAJ, setSaldoSAJ] = useState(2000);
  const [valorPixSAJ, setValorPixSAJ] = useState("");
  const [mostrarInputSAJ, setMostrarInputSAJ] = useState(false);

  const [VisibleSAJ, setVisibleSAJ] = useState<Boolean>(false);

  const PixActionSAJ = () => {
    const valorSAJ = Number(valorPixSAJ);

    if (valorSAJ > 0 && valorSAJ <= saldoSAJ) {
      setSaldoSAJ(saldoSAJ - valorSAJ);
      setValorPixSAJ("");
      setMostrarInputSAJ(false);
    } else {
      alert("Saldo insuficiente!");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Cabecalho}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Pressable style={({ pressed }) => [pressed && styles.Pressed]}>
            <MaterialCommunityIcons
              name="account-outline"
              style={styles.PerfilIcon}
            />
          </Pressable>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <TouchableOpacity onPress={() => setVisibleSAJ(!VisibleSAJ)}>
              <MaterialCommunityIcons
                name={VisibleSAJ ? "eye-off-outline" : "eye-outline"}
                style={styles.BotaoIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("MeAjuda")}>
              <MaterialCommunityIcons
                name="help-circle-outline"
                style={styles.BotaoIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="email-plus-outline"
                style={styles.BotaoIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewTextTop}>
          <Text style={styles.textTop}>Olá, Professor Gabriel</Text>
        </View>
      </View>

      <View style={styles.secondPierce}>
        <View style={styles.viewaccount}>
          <Text style={styles.account}>Conta</Text>
        </View>

        <View style={styles.viewSaldo}>
          {VisibleSAJ ? (
            <Text style={styles.saldo}>R${saldoSAJ.toFixed(2)}</Text>
          ) : (
            <View
              style={{
                width: 120,
                height: 30,
                backgroundColor: "#ccc",
                borderRadius: 4,
              }}
            />
          )}
        </View>

        <View style={styles.viewButtons}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.button} onPress={()=>setMostrarInputSAJ(true)}>
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

{mostrarInputSAJ && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Digite o valor do Pix:</Text>
          <View style={styles.inputBox}>
            <Text style={styles.cifrao}>R$</Text>
            <TextInput
              placeholder="0,00"
              placeholderTextColor="#999"
              keyboardType="numeric"
              style={styles.input}
              value={valorPixSAJ}
              onChangeText={setValorPixSAJ}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity style={styles.botaoPix} onPress={PixActionSAJ}>
              <Text style={styles.textoBotaoPix}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botaoCancelar}
              onPress={() => setMostrarInputSAJ(false)}
            >
              <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

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
  inputContainer: {
  backgroundColor: "#F0F1F5",
  padding: 20,
  borderRadius: 12,
  marginBottom: 20,
},

label: {
  fontSize: 16,
  marginBottom: 10,
  color: "#222",
  fontWeight: "bold",
},

inputBox: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#ccc",
  paddingHorizontal: 10,
  marginBottom: 10,
},

cifrao: {
  fontSize: 18,
  color: "#222",
  marginRight: 4,
},

input: {
  flex: 1,
  fontSize: 18,
  color: "#222",
  paddingVertical: 8,
},

botaoPix: {
  backgroundColor: "#810AD0",
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
  flex: 1,
  alignItems: "center",
},

textoBotaoPix: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16,
},

botaoCancelar: {
  backgroundColor: "#ccc",
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
  flex: 1,
  alignItems: "center",
},

textoBotaoCancelar: {
  color: "#333",
  fontWeight: "bold",
  fontSize: 16,
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
    overflow: "hidden",
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
    justifyContent: "space-between",
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
    width: "60%",
  },
  divider: {
    padding: 1,
    backgroundColor: "#F0F1F5",
    width: "100%",
    marginVertical: 10,
  },
  Cabecalho: {
    paddingTop: 40,
    width: "100%",
    height: "18%",
    backgroundColor: "#810AD0",
    paddingHorizontal: 25,
    paddingVertical: 10,
    gap: 30,
  },

  PerfilIcon: {
    backgroundColor: "#8A2BE2",
    fontSize: FontScaleSAJ(24),
    color: "#ffffff",
    borderRadius: 50,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  BotaoIcon: {
    fontSize: FontScaleSAJ(24),
    color: "#ffffff",
    borderRadius: 50,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  Pressed: {
    transform: [{ scale: 0.98 }],
  },
});
