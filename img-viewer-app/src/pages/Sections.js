//import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  useSWR  from 'swr'
import fetcher from '../api/fetcher';

const API_PATHNAME = '/collections'


function Sections() {
  const { data, error, isLoading } = useSWR(API_PATHNAME, fetcher);

  if (error || data?.errors) {
    return (<div>Error ... </div>)
  }

  if (isLoading) {
    return (<div>Loading ... </div>)
  }

  
  
  /*const [data, setData] = useState([]) // tutaj przechowywane są dane z fetch

  useEffect(function () {
    fetch(
      `${UNSPLASH_BASE_URL}${API_PATHNAME}`,
      {
        headers: UNSPLASH_COMMON_HEADERS
      }
    )
    .then(response => response.json())
    .then(data => setData(data)) //data jest parametrem funkcji, to jest co innego niz data wyżej.
  }, [])*/



  return (
    <section>
      <h2>Collections</h2>
      <div className={'collection'}>
        <List data={data} />
      </div>
      
    </section>
  );
}

function List({ data }) {
  return data.map((item, index) =>
    (
      <Article key={`Collection-${index}`} item={item} />
    )
  )
}

function Article({ item }) {
  return (
    <article>
      <h3>{item.title}</h3>
      {item.description ? <p>{item.description}</p> : null}
      <Link to={`/photolist/${item.id}`}>
        <img src={item?.cover_photo?.urls.small} alt={item?.cover_photo?.alt_description ?? ''} />
        see album</Link>
        
    </article>
  );
}



  export default Sections;
  