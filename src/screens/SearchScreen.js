import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../componets/SearchBar";
import uesResults from "../hooks/uesResults";
import ResultsList from "../componets/ResultsList";


const SearchScreen = ( ) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMassage] = uesResults();

  const filterResultesByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {/* {errorMassage ? <Text>{errorMassage}</Text> : null} */}
      {/* <Text>we have found {results.length} results </Text> */}
      <ScrollView>
        <ResultsList
          results={filterResultesByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultesByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultesByPrice("$$$")}
          title="Big Spender "
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
