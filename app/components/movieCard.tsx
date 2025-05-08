import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({movie} :{movie:Movie}) => {
  return (
    <Link href={`/movies/${movie.id}`} asChild >
      <TouchableOpacity className='w-[30%]'>
    <Image source={{ uri: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://placeholde.co/600x400/1a1a1a/fffff.png' }} 
    className="w-full h-52 rounded-lg" resizeMode='cover'/>
      <Text className="text-white font-bold mt-2 text-sm" numberOfLines={1}>{movie.title}</Text>
      <View className='flex-row items-center justify-start gap-x-1' >
        <Image source={icons.star} className='size-4'/>
        <Text className='text-xs text-white font-bold uppercase' numberOfLines={1}>{Math.round(movie.vote_average / 2)} </Text>
      </View>
        <View className='flex-row items-center justify-between'>
          <Text className='text-xs text-light-300 font-medium mt-1'  numberOfLines={1}>{movie.release_date?.split('-')[0]}</Text>
          {/* <Text className='text-xs text-light-300 font-medium mt-1 uppercase'> Movie </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard