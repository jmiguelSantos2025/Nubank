import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons, Entypo, FontAwesome, Feather } from '@expo/vector-icons';



export default function MeAjuda(){
  
  const insetsSAJ = useSafeAreaInsets();
  const [searchTextSAJ, setSearchTextSAJ] = useState('');

  const dataSAJ = [
    {
      title: 'Novidades',
      subtitle: 'Tudo sobre o Nubank e nossos produtos.',
    },
    {
      title: 'Conta',
      subtitle: 'Conheça tudo sobre a sua conta digital.',
    },
    {
      title: 'Pagar Fatura',
      subtitle: 'Descubra como e onde pagar a sua fatura.',
    },
  ];

  const filteredDataSAJ = dataSAJ.filter((itemSAJ) =>
    itemSAJ.title.toLowerCase().includes(searchTextSAJ.toLowerCase())
  );

  return (
    <SafeAreaView style={[stylesSAJ.safeAreaSAJ, { paddingTop: insetsSAJ.top }]}>
      <KeyboardAvoidingView
        style={stylesSAJ.rootSAJ}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={[stylesSAJ.containerSAJ, { paddingBottom: 80 }]}
          showsVerticalScrollIndicator={false}
        >
          <Text style={stylesSAJ.headerSAJ}>ME AJUDA</Text>

          <View style={stylesSAJ.searchContainerSAJ}>
            <TextInput
              placeholder="Qual é a sua dúvida?"
              placeholderTextColor="#6F6F6F"
              style={stylesSAJ.searchInputSAJ}
              value={searchTextSAJ}
              onChangeText={setSearchTextSAJ}
            />
            <Feather name="search" size={24} color="#810AD0" />
          </View>

          <Text style={stylesSAJ.sectionTitleSAJ}>Como você avalia o Me Ajuda?</Text>

          <View style={stylesSAJ.ratingContainerSAJ}>
            <View style={stylesSAJ.ratingItemSAJ}>
              <MaterialIcons name="error-outline" size={28} color="#810AD0" />
              <Text style={stylesSAJ.ratingTextSAJ}>Péssimo</Text>
            </View>
            <View style={stylesSAJ.ratingItemSAJ}>
              <Entypo name="emoji-sad" size={28} color="#810AD0" />
              <Text style={stylesSAJ.ratingTextSAJ}>Ruim</Text>
            </View>
            <View style={stylesSAJ.ratingItemSAJ}>
              <Entypo name="emoji-happy" size={28} color="#810AD0" />
              <Text style={stylesSAJ.ratingTextSAJ}>Bom</Text>
            </View>
            <View style={stylesSAJ.ratingItemSAJ}>
              <FontAwesome name="heart" size={28} color="#810AD0" />
              <Text style={stylesSAJ.ratingTextSAJ}>Perfeito</Text>
            </View>
          </View>

          {filteredDataSAJ.map((itemSAJ, indexSAJ) => (
            <View key={indexSAJ} style={stylesSAJ.itemSAJ}>
              <Text style={stylesSAJ.itemTitleSAJ}>{itemSAJ.title}</Text>
              <Text style={stylesSAJ.itemSubtitleSAJ}>{itemSAJ.subtitle}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={stylesSAJ.footerSAJ}>
          <TouchableOpacity style={stylesSAJ.footerButtonSAJ}>
            <Text style={stylesSAJ.footerTextSAJ}>E-MAIL</Text>
          </TouchableOpacity>
          <View style={stylesSAJ.separatorSAJ} />
          <TouchableOpacity style={stylesSAJ.footerButtonSAJ}>
            <Text style={stylesSAJ.footerTextSAJ}>CHAT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


const stylesSAJ = StyleSheet.create({
  safeAreaSAJ: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rootSAJ: {
    flex: 1,
  },
  containerSAJ: {
    paddingHorizontal: 24,
  },
  headerSAJ: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6F6F6F',
    textAlign: 'center',
    marginBottom: 16,
  },
  searchContainerSAJ: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6F6F6F',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 32,
  },
  searchInputSAJ: {
    flex: 1,
    color: '#6F6F6F',
    fontSize: 16,
  },
  sectionTitleSAJ: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6F6F6F',
    marginBottom: 16,
  },
  ratingContainerSAJ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  ratingItemSAJ: {
    alignItems: 'center',
    width: '23%',
  },
  ratingTextSAJ: {
    marginTop: 4,
    color: '#6F6F6F',
    fontSize: 12,
    textAlign: 'center',
  },
  itemSAJ: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemTitleSAJ: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#6F6F6F',
    marginBottom: 4,
  },
  itemSubtitleSAJ: {
    fontSize: 13,
    color: '#6F6F6F',
  },
  footerSAJ: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  footerButtonSAJ: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorSAJ: {
    width: 1,
    backgroundColor: '#E0E0E0',
    height: '100%',
  },
  footerTextSAJ: {
    color: '#810AD0',
    fontWeight: 'bold',
    fontSize: 14,
  },
});