import One from '../assets/one.jpg';
import Two from '../assets/two.jpg';
import Three from '../assets/three.jpg';
import Four from '../assets/four.jpg';
import Five from '../assets/five.jpg';

const Images = () => {
  return(
    <div>
      <img src={One} />
      <img src={Two} />
      <img src={Three} />
      <img src={Four} />
      <img src={Five} />
    </div>
  )
}

export default Images;