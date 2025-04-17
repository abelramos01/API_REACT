import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/user/${item.id}`} asChild>
            <Pressable style={styles.userCard}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text>{item.email}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
