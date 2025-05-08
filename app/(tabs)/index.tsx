import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchBar";
import { useRouter } from "expo-router";
import useFetch from "../services/useFetch";
import { fetchMovies } from "../services/api";
import MovieCard from "../components/movieCard";
 

export default function Index() {
  const router = useRouter();
  const { data, loading, error } = useFetch<Movie[]>(
    () => fetchMovies({ query: '' }))
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full" />
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {loading ? <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" /> : error ? <Text className="text-white text-center mt-10">{error.message}</Text> :
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push('/search')}
              placeholder="Search for a movie..."
            />
            <Text className="text-lg text-white font-semibold mt-5">Latest Movies</Text>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <MovieCard  movie={item}/>
           
                )}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent:"flex-start",
                  gap:20,
                  marginBottom:10
                }}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                scrollEnabled={false}
                className="mt-2 pb-32 "
                ListEmptyComponent={<Text className="text-white text-center mt-10">No movies found</Text>}
              />
            </View>
        }

      </ScrollView>
    </View>
  );
}
