import { useEffect, useRef, useState } from 'react';

type InfiniteScrollHookParams<T> = {
  data: T[];
  onFetchMore: () => void;
  loading: boolean;
};

const useInfiniteScroll = <T>({ data, onFetchMore, loading }: InfiniteScrollHookParams<T>) => {
  const tableRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const tableElement = tableRef.current;
    if (tableElement) {
      const { scrollTop, clientHeight, scrollHeight } = tableElement;

      if (scrollTop + clientHeight === scrollHeight && !loading) {
        onFetchMore();
      }
    }
  };

  useEffect(() => {
    const tableElement = tableRef.current;
    if (tableElement) {
      tableElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (tableElement) {
        tableElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  return { tableRef };
};

export default useInfiniteScroll;
