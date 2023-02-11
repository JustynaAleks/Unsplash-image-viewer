import { useParams } from 'react-router-dom';
import  useSWR  from 'swr'
import fetcher from '../api/fetcher';
import { FacebookShareButton, FacebookIcon } from 'react-share';

function Photo() {
  const { photoId } = useParams();
  const photoPathname = `/photos/${photoId}`
  const { data } = useSWR(photoPathname, fetcher)
  const instaURL = `https://www.instagram.com/${data?.user.instagram_username}`

  return (
    <div className='photo'>
       <img src={data?.urls?.regular} alt={data?.alt_description ?? ''}/>
       <ul>
        <li> User: {data?.user.name}</li>
        <li> Views: {data?.views} </li>
        <li> Likes: {data?.likes}</li>
        <li> <a href={ instaURL }>
               <img src='https://static.cdninstagram.com/rsrc.php/yv/r/BTPhT6yIYfq.ico' alt='instagram-logo'/>
               <span> Instagram account: {data?.user.instagram_username}</span>
            </a>
        </li>
        <li>
          <span>Share: </span>
          <div>
        <FacebookShareButton
          url={ data?.urls.full }
          >
        <FacebookIcon size={32} round />
        </FacebookShareButton>
       </div>
        </li>
       </ul>
       
    </div>
  );
  }

export default Photo;
