import { useState } from 'react';
import { useParams } from 'react-router-dom';
import  useSWR  from 'swr'
import fetcher from '../api/fetcher';
import { Link } from 'react-router-dom';

function Page ({ index }) {
    const { collectionId } = useParams();
    const photoPathname = `/collections/${collectionId}/photos`
    const { data = [] } = useSWR(`${photoPathname}?page=${index}&per_page=12`, fetcher);
  
    if (!data) return 'loading'
  
    return (
        <section>
          <HeaderSec />
           <div className= {'photos'}>
            <CollectionData data={data} />
            
           </div>
        </section>
      );
}

function CollectionData({ data }) {
    return data.map((item, index) =>
      (
        <Article key={`Collection-${index}`} item={item} />
      )
    )
  }

function Article({ item }) {
    return (
      <article>
        <h3>{item?.title}</h3>
        {item.description ? <p>{item.description}</p> : null}
        <Link to={`/photo/${item.id}`}>
          <img src={item?.urls?.small} alt={item.alt_description} />
        see photo</Link>
      </article>
    );
  }

function PhotoList2() {
    const [pageIndex] = useState(0);
    const [cnt, setCnt] = useState(2)
    const pages = []
    for (let i = 1; i < cnt; i++) {
        pages.push(<Page index={i} key={i} />)
    }
    return (
    <div>
        {pages}
        <div style={{ display: 'none' }}><Page index={pageIndex + 1}/></div>
        <div className='infScrBtn'>
        <button className='loadBtn' onClick={() => setCnt(cnt + 1)}>Load More</button>
        </div>
    </div>
    );
}

function HeaderSec(){

    const { collectionId } = useParams();
    const collectionPathname = `/collections/${collectionId}`
    const { data: collectionData } = useSWR(collectionPathname, fetcher);
 return (
    <header>
      <h2>{collectionData?.title}</h2>
      <p>{collectionData?.description}</p>
    </header>
  )
}


export default PhotoList2;