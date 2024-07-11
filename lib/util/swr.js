import useSWR from "swr";
import useSWRInfinite from 'swr/infinite';

const fetcher = (url) => fetch(url).then((res) => res.json());

// export const getData = (route) => {
//     const result = useSWR(route, fetcher);
//     return result;
// }

export const getDataPages = (route, postsPerPage = 6) => {
    const result = useSWRInfinite(
      (index, previousPageData) => {
        if (index === 0 ) {
          return `${route}?date=desc`
        }
  
        if (!previousPageData.length) {
          return null
        }
  
        return `${route}?offset=${index * postsPerPage}&date=desc`
      },
      fetcher,
      { persistSize: true }
    );
  
    
    const { data } = result;
  
    const isEmpty = data?.[0]?.length === 0;
    const hitEnd = isEmpty || (data && data[data.length - 1]?.length < postsPerPage);
    
  
    return {...result, hitEnd}
  }