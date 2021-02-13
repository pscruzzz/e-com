import useSWR from 'swr'
import axios from 'axios'

export function useCachedRequest(url: string): any {
  const { data } = useSWR(url, async url => {
    const response = await axios.get(url)
    const data = await response.data

    return data
  })
  return data
}
