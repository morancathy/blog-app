//custom hooks need to start with work "use"
import {useEffect, useState} from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(['']);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if(!res.ok) {
            throw Error('could not fetch the data for that resourcceee')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          setIsPending(false)
          setError(err.message)
        })
    }, 1000)
  }, [url]);

  return {data, isPending, error}
}

export default useFetch;
