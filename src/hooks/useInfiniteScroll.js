import { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
  const [loadingScroll, setLoadingScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!loadingScroll) return;
    callback();
  }, [loadingScroll, callback]);

  const handleScroll = () => {
    const {clientHeight, scrollHeight, scrollTop} = document.documentElement;
    const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10;

    if(isPageBottomAlmostReached){
      setLoadingScroll(true);
    }
  }

  return [loadingScroll, setLoadingScroll];
};

export default useInfiniteScroll;
