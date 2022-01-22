import React, { createContext, useContext, useState } from 'react';
const ResultContext =createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children})=>{
  const {results,setResults}=useState([]);
  const {isLoading,setIsLoading}=useState(false);
  const {searchTerms,setSearchTerm}=useState('');
  const getResults = async (type)=>{
    setIsLoading(true);

    const response=await fetch(`${baseUrl}${type}`,{
      method:'GET',
      header: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      }
    })
    const data =await response.json();

    setResults(data);
    setLoading(false);

  }
  return(
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
    {children}
  </StateContext.Provider>

  )
}

export const useResultContext = () => useContext(ResultContext);