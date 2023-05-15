import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { cleanCart, decrementQuantity, incrementQuantity } from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const route = useRoute();
  const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        {total === 0 ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginTop: 40 }}>Keranjang Anda kosong</Text>
          </View>
        ) : (
          <>
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
              <Text>Pesananmu</Text>
            </View>

            <Pressable
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                marginLeft: 10,
                marginRight: 10,
                padding: 14,
              }}
            >
              {cart.map((item, index) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 12,
                  }}
                  key={index}
                >
                  <Text style={{ width: 100, fontSize: 15, fontWeight: "500" }}>{item.name}</Text>

                  {/* - + button */}
                  <Pressable
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      alignItems: "center",
                      borderColor: "#BEBEBE",
                      borderWidth: 0.5,
                      borderRadius: 10,
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        dispatch(decrementQuantity(item)); // cart
                        dispatch(decrementQty(item)); // product
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#F468BB",
                          paddingHorizontal: 6,
                          fontWeight: "600",
                        }}
                      >
                        -
                      </Text>
                    </Pressable>

                    <Pressable>
                      <Text
                        style={{
                          fontSize: 15,
                          color: "#F468BB",
                          paddingHorizontal: 8,
                          fontWeight: "600",
                        }}
                      >
                        {item.quantity}
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        dispatch(incrementQuantity(item)); // cart
                        dispatch(incrementQty(item)); //product
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#F468BB",
                          paddingHorizontal: 6,
                          fontWeight: "600",
                        }}
                      >
                        +
                      </Text>
                    </Pressable>
                  </Pressable>

                  <Text style={{ fontSize: 15, fontWeight: "500" }}>Rp{item.price * item.quantity}</Text>
                </View>
              ))}
            </Pressable>

            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 30 }}>Detail Tagihan</Text>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  padding: 10,
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "400", color: "gray" }}>Harga</Text>
                  <Text style={{ fontSize: 16, fontWeight: "400" }}>Rp{total}</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "400", color: "gray" }}>Ongkos Kirim | 1.2KM</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      color: "#F468BB",
                    }}
                  >
                    Gratis
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>Anda Mendapatkan Gratis Ongkir</Text>
                </View>

                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>Tangga Dipilih</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      color: "#F468BB",
                    }}
                  >
                    {/* {route.params.pickUpDate} */}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>Waktu Pengerjaan</Text>

                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      color: "#F468BB",
                    }}
                  >
                    {route.params.no_Of_days}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>Waktu Penjemputan</Text>

                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      color: "#F468BB",
                    }}
                  >
                    {route.params.selectedTime}
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total Harga</Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>Rp{total + 95}</Text>
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>

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
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
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

          <Pressable>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>Buat Order</Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
