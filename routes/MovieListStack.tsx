import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieList from "../pages/MovieList";

const Stack = createStackNavigator();

export default function MovieListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Minha Lista' component={MovieList} />
      {/* <Stack.Screen name='Notifications' component={Notifications} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Settings' component={Settings} /> */}
    </Stack.Navigator>
  );
}
