import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; 

export default function UserDetail() {
  const { id } = useLocalSearchParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error('Erro ao buscar usuário:', err));
  }, [id]);

  if (!user) {
    return (
      <View style={styles.centered}>
        <Text>Carregando detalhes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Telefone: {user.phone}</Text>
      <Text>Website: {user.website}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  name: { fontSize: 24, fontWeight: 'bold' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
