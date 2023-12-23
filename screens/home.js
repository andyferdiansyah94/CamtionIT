import {
  Heading,
  Image,
  Text,
  Input,
  HStack,
  View,
  VStack,
} from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";

const Home = () => {
  const navigation = useNavigation();
  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Detail", { item: item })}
      ></TouchableOpacity>
    );
  };

  return (
    <>
      <Header title={"Izumi"} />
      <ScrollView backgroundColor={"white"} width={"100%"} height={"full"}>
        <View mx={"7"}>
          <Box mb={"6"} mt={"6"}>
            <VStack>
              <Heading fontSize={"26"} color={"black"}>
                Ayo Temukan Jurusan
              </Heading>
              <Heading fontSize={"26"} color={"black"}>
                Impianmu!
              </Heading>
            </VStack>
          </Box>
          <Box mb={"6"}>
            <Input
              mx="auto"
              placeholder="mau cari apa?"
              borderRadius={"20"}
              w="100%"
            />
          </Box>

          <Image source={require("../assets/coverhome.png")} />

          <HStack>
            <Text fontSize={20} mt={"4"} mb={"2"}>
              Jurusan{" "}
            </Text>
            <Text bold={true} fontSize={20} mt={"4"} mb={"2"}>
              IT
            </Text>
          </HStack>
        
        </View>

        <View mx={"10"}>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Image
                source={require("../assets/image1.png")}
                height={90}
                width={150}
              />
              <Text bold={true} paddingBottom={"2"} textAlign={"justiify"}>
                Sistem Informasi
              </Text>
            </View>
            <View style={{ marginRight: 10 }}>
              <Image
                source={require("../assets/rekayasa.png")}
                height={90}
                width={150}
              />
              <VStack space={0} alignItems="flex-start" width={150}>
                <Text bold={true} textAlign={"justify"}>
                  Rekayasa Perangkat
                </Text>
                <Text bold={true} textAlign={"justify"}>
                  Lunak
                </Text>
              </VStack>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Image
                source={require("../assets/teknik.png")}
                height={90}
                width={150}
              />
              <Text bold={true} paddingBottom={"2"} textAlign={"justiify"}>
                Teknik Informatika
              </Text>
            </View>
            <View style={{ marginRight: 10 }}>
              <Image
                source={require("../assets/teknologi.png")}
                height={90}
                width={150}
              />
              <Text bold={true} paddingBottom={"2"} textAlign={"justiify"}>
                Teknologi Informasi
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Image
                source={require("../assets/teknik.png")}
                height={90}
                width={150}
              />
              <Text bold={true} paddingBottom={"2"} textAlign={"justiify"}>
                Teknik Industri
              </Text>
            </View>
            <View style={{ marginRight: 10 }}>
              <Image
                source={require("../assets/teknologi.png")}
                height={90}
                width={150}
              />
              <Text bold={true} paddingBottom={"2"} textAlign={"justiify"}>
                Ilmu Komputer
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
