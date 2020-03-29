import { useEffect, useState} from 'react';

const useFetchedData = (url, options) => {

    const [response, setResponse] = useState(null);

    useEffect(() => {

      const getData = async () => {

          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);

      };

      getData();

    }, [url, options]);

    return { response, error };
    
  };

  export default useFetchedData;