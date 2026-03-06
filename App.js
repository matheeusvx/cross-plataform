import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Matheus Morelli",
    bio: "Cientista da computação cursando o terceiro semestre 💻",
    turma: "2CCPH",
    seguidores: "100k",
    frase: "Carpe diem",
    avatar: "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/12/30/pele-1402575042-1hrgyia0wwiew.jpg",
  };

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Turma */}
      <Text style={styles.turma}>{usuario.turma}</Text>
      {/* Frase */}
      <Text style={styles.frase}>{usuario.frase}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.stat}>👥 {usuario.seguidores} seguidores</Text>
      </View>

      {/* Botão LinkedIn */}
      <View style={styles.linkButton}>
        <Text style={styles.linkButtonText}>LinkedIn</Text>
      </View>
      {/* Botão GitHub */}
      <View style={styles.linkButton}>
        <Text style={styles.linkButtonText}>GitHub</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFFF'
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 16,
  },
  frase:{
    fontSize: 20,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 16,
  },
  turma:{
    fontSize: 20,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 16,
  },
  stats: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  stat: {
    color: '#fff',
    fontSize: 14,
  },
  linkButton: {
    marginTop: 20,
    backgroundColor: '#0077b5',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  gitButton:{
    marginTop: 20,
    backgroundColor: '#FFFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  linkButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});