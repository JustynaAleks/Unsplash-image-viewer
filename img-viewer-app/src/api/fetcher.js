import { UNSPLASH_BASE_URL, UNSPLASH_COMMON_HEADERS } from '../config';

function fetcher(pathname) {
  return fetch(
    `${UNSPLASH_BASE_URL}${pathname}`,
    {
      headers: UNSPLASH_COMMON_HEADERS
    }
  )
  .then(response => response.json())
}

export default fetcher
