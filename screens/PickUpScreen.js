import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Hari",
    },
    {
      id: "1",
      name: "3-4 Hari",
    },
    {
      id: "2",
      name: "4-5 Hari",
    },
    {
      id: "3",
      name: "5-6 Hari",
    },
    {
      id: "4",
      name: "Besok",
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 WIB",
    },
    {
      id: "1",
      time: "12:00 WIB",
    },
    {
      id: "2",
      time: "13:00 WIB",
    },
    {
      id: "3",
      time: "14:00 WIB",
    },
    {
      id: "4",
      time: "15:00 WIB",
    },
    {
      id: "5",
      time: "16:00 WIB",
    },
  ];
  const navigation = useNavigation();
  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !delivery) {
      Alert.alert(
        "Kosong atau tidak valid",
        "Harap pilih semua fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    if (selectedDate && selectedTime && delivery) {
      navigation.replace("Cart", {
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        no_Of_days: delivery,
      });
    }
  };

  return (
    <>
      <SafeAreaView style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>Masukkan Alamat</Text>
        <TextInput
          style={{
            padding: 40,
            borderColor: "gray",
            borderWidth: 0.7,
            paddingVertical: 80,
            borderRadius: 9,
            margin: 10,
          }}
        />

        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>Tanggal Penjemputan</Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2023-04-20")}
          endDate={new Date("2023-04-28")}
          initialSelectedDate={new Date("2023-04-20")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#F468BB"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />

        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>Pilih Jam</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "#F468BB",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>Tanggal Pengantaran</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, i) => (
            <Pressable
              style={
                delivery.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "#F468BB",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
              onPress={() => setDelivery(item.name)}
              key={i}
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#F468BB",
            marginTop: "auto",
            padding: 10,
            marginBottom: 40,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>
              {cart.length} items | Rp{total}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: "white",
                marginVertical: 6,
              }}
            >
              Biaya tambahan mungkin berlaku
            </Text>
          </View>

          <Pressable onPress={proceedToCart}>
            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>Lanjut ke keranjang</Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({});
