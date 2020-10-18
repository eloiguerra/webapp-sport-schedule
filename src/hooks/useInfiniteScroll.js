import { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!loading) return;
    callback();
  }, [loading, callback]);

  const handleScroll = () => {
    const {clientHeight, scrollHeight, scrollTop} = document.documentElement;
    const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10;

    if(isPageBottomAlmostReached){
      setLoading(true);
    }
  }

  return [loading, setLoading];
};

export default useInfiniteScroll;
