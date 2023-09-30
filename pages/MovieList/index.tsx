import React, { useEffect, useState } from "react";
import { FlatList, KeyboardAvoidingView, SafeAreaView } from "react-native";
import Gradient from "../../assets/Icons/Gradient";
import useMovieList from "../../services/movies-requests";
import { Box, Pressable, Text } from "@gluestack-ui/themed";
import { MovieRaw } from "../../types/movies";
import CardMovie from "../../components/CardMovie";

const info = {
  title: "The Hobbit",
  date: "20/05/2017",
  actors: "Orlando Bloom",
  poster:
    "https://m.media-amazon.com/images/M/MV5BNWEyOTlhNjMtZjNlMC00Y2QyLTljMjUtZjUzMzIyYTlmNjM1XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
};

export default function MovieList() {
  const [filter, setFilter] = useState("");
  const { getMovie, movieList, removeMovie } = useMovieList();
  const renderItem = ({ item }: { item: MovieRaw }) => <CardMovie {...item} />;

  useEffect(() => {
    console.log(movieList);
  }, [movieList]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <Gradient /> */}
      <KeyboardAvoidingView behavior={"height"}>
        <FlatList
          data={movieList}
          renderItem={renderItem}
          keyExtractor={({ Title }) => Title}
          ListHeaderComponent={() => {
            return (
              <>
                <Box
                  p={15}
                  m={3}
                  backgroundColor='$purple700'
                  borderRadius={10}
                  alignItems='center'
                >
                  <Text color='white'>
                    Lista com os seus filmes já assistidos
                  </Text>
                </Box>
                <Pressable
                  alignSelf='center'
                  borderWidth={1}
                  borderRadius={15}
                  borderColor='$purple400'
                  mt={10}
                  p={10}
                  sx={{ ":hover": { bg: "$primary400" } }}
                  onPress={() => {
                    removeMovie();
                  }}
                >
                  <Text>Apagar a lista</Text>
                </Pressable>
              </>
            );
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
