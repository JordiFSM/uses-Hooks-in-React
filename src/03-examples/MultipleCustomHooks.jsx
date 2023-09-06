
import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {
    const API = 'https://api.breakingbadquotes.xyz/v1/quotes/'
    const {counter, increment } = useCounter({
        counter: 1
      })
    const {data, isLoading, hasError, getFetch} = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/');
  
  const changeQuote = () => {
    increment();
    getFetch(API+counter);
  }

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr/>
        {
        isLoading
            ? (
                <LoadingQuote></LoadingQuote>
            )
            : (
                <Quote quote = {[data[0].quote]} author={[data[0].author]}></Quote>
            )
        }
        <button className='btn btn-primary' onClick={changeQuote}>Next Quote</button>
    </>
  )
}
