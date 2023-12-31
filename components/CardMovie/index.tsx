import React from "react";
import {
  Pressable,
  Center,
  Image,
  Text,
  Box,
  Heading,
  View,
  Badge,
  BadgeText,
} from "@gluestack-ui/themed";
import { MovieRaw } from "../../types/movies";
import Ionicons from "@expo/vector-icons/Ionicons";
import useMovieList from "../../services/movies-requests";

export default function CardMovie(props: MovieRaw) {
  const { addMovie, movie, getMovie, movieList } = useMovieList();
  async function handlePress() {
    addMovie(props);
    console.log(movieList);
  }
  return (
    <View flex={1}>
      <Pressable
        onPress={() => console.log()}
        sx={{
          h: "100%",
          w: "100%",
          paddingHorizontal: 6,
          paddingVertical: 3,
        }}
      >
        <Box
          sx={{
            h: "100%",
            w: "100%",
          }}
          bgColor='$coolGray100'
          borderColor='$purple300'
          borderWidth={1}
          borderRadius={10}
          flexDirection='row'
          justifyContent='flex-start'
          alignItems='center'
        >
          <Image
            size='lg'
            h={"100%"}
            alt='Imagem do poster do filme'
            borderTopLeftRadius={10}
            borderBottomLeftRadius={10}
            source={{
              uri: props.Poster,
            }}
          />

          <Box p={5} flex={1}>
            <Heading color='black'>{props.Title}</Heading>
            <Text color='black'>{`Nota: ${props.Metascore}`}</Text>
            <Text color='black'>{`Ano: ${props.Year}`}</Text>
            <Text color='black'>{`Categorias: ${props.Genre}`}</Text>
          </Box>
          {props?.add && (
            <Pressable mr={5} onPress={handlePress}>
              <Ionicons size={35} name='add-circle' color={"#6212B1"} />
            </Pressable>
          )}
        </Box>
      </Pressable>
    </View>
  );
}
