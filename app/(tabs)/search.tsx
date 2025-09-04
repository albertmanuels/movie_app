import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(
    () =>
      fetchMovies({
        query: searchTerm,
      }),
    false
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchTerm.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" />
      <FlatList
        refreshing={loading}
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        className="flex-1 px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <>
            <View className="flex-1 mb-5">
              <Image
                source={icons.logo}
                className="w-12 h-10 mx-auto mt-20 mb-5"
              />
            </View>
            <View className="flex-1">
              <SearchBar
                placeholder="Search movies..."
                onChangeText={(text) => setSearchTerm(text)}
                value={searchTerm}
              />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#000ff"
                className="self-center mt-10"
              />
            )}

            {error && (
              <Text className="px-5 my-3 text-red-500">{error?.message}</Text>
            )}

            {!loading && !error && searchTerm.trim() && movies?.length > 0 && (
              <Text className="text-xl font-bold text-white ">
                Search results for{" "}
                <Text className="text-accent">{searchTerm}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="px-5 mt-10">
              <Text className="text-center text-gray-500">
                {searchTerm.trim() ? "No movies found" : "Search for a movie"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default SearchScreen;
