import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TextInput, View } from "react-native";
import React from "react";
import SearchBar from "../components/searchBar";
import { useRouter } from "expo-router";
import useFetch from "../services/useFetch";
import { fetchMovies } from "../services/api";


export default function Index() {
  const router = useRouter();
  const { data:movies, loading, error } = useFetch<any>(()=>fetchMovies({query:''}), false)

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
           data={movies}
           renderItem={({item})=>(
            <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4 mt-4">
              <Image source={{uri:item.poster_path}} className="w-16 h-16 rounded-full" />
              <View className="ml-4">
                <Text className="text-white font-semibold text-base">{item.title}11</Text>
                <Text className="text-gray-400 text-sm">{item.release_date}</Text>
              </View>
            </View>
           )}
           keyExtractor={(item) => item.id.toString()}
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{ paddingBottom: 20 }}
           className="mt-5"
           ListEmptyComponent={<Text className="text-white text-center mt-10">No movies found</Text>}
           />
           </View>
        }
     
      </ScrollView>
    </View>
  );
}
