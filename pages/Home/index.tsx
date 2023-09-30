import React, { useEffect, useState } from "react";
import { FlatList, KeyboardAvoidingView, SafeAreaView } from "react-native";
import Gradient from "../../assets/Icons/Gradient";
import {
  Box,
  Icon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Pressable,
  SearchIcon,
  Text,
} from "@gluestack-ui/themed";
import { MovieRaw } from "../../types/movies";
import CardMovie from "../../components/CardMovie";
import useMovieList from "../../services/movies-requests";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  const [filter, setFilter] = useState("");
  const renderItem = ({ item }: { item: MovieRaw }) => {
    item.add = true;
    return <CardMovie {...item} />;
  };
  const { getMovie, movie } = useMovieList();

  async function research() {
    const response = await getMovie(filter);
  }

  //   useEffect(() => {
  //     console.log(movie);
  //   }, [movie]);

  const listHeader = () => {
    return (
      <>
        <Box
          p={15}
          m={3}
          backgroundColor='$purple700'
          borderRadius={10}
          alignItems='center'
        >
          <Text color='$white'>Bem vindo!</Text>
          <Text color='white' mt={10}>
            Registre os filmes que você já assistiu
          </Text>
        </Box>
        <Input
          size={"lg"}
          variant={"outline"}
          isInvalid={false}
          isDisabled={false}
          justifyContent='center'
          alignItems='center'
          m={15}
        >
          <InputField
            alignSelf='center'
            // value={filter}
            // onChangeText={(value) => {
            //   setFilter(value);
            // }}
            onEndEditing={(value) => {
              setFilter(value.nativeEvent.text);
            }}
            placeholder='Pesquise um filme'
          />
          <InputSlot
            flexDirection='row'
            onPress={() => {
              research();
            }}
          >
            <Text>Buscar</Text>
            <InputIcon
              alignSelf='center'
              mr={15}
              justifyContent='center'
              alignItems='center'
            >
              <Ionicons size={20} name='search-circle' color={"#6212B1"} />
            </InputIcon>
          </InputSlot>
        </Input>
      </>
    );
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        {/* <Gradient /> */}
        <KeyboardAvoidingView behavior={"height"}>
          <FlatList
            data={movie}
            renderItem={renderItem}
            keyExtractor={({ Title }) => Title}
            ListHeaderComponent={listHeader}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
