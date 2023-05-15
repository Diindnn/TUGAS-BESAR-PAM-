import { StyleSheet, Text, View, ScrollView, Pressable, Image } from "react-native";
import React from "react";

const Services = () => {
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
      name: "Cuci Aja",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Cuci Kering",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Cuci Setrika",
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
      name: "Bersih-bersih",
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 7 }}>Layanan yang Tersedia:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <Pressable style={{ margin: 10, backgroundColor: "#F8F8F8", padding: 20, borderRadius: 7, flexDirection: "column", justifyContent: "center", alignItems: "center" }} key={index}>
            <Image source={{ uri: service.image }} style={{ width: 70, height: 70 }} />

            <Text style={{ textAlign: "center", marginTop: 10 }}>{service.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
