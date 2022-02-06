import { useState } from 'react';
import Thumbnail from '../component/Thumbnail';
import 탑 from '../data/탑';
import 정글 from '../data/정글';
import 미드 from '../data/미드';
import 원딜 from '../data/원딜';
import 서폿 from '../data/서폿';

function Gallery() {
  // console.log(images) // npm start를 통해 앱을 열어, 개발자 콘솔을 통해 이미지 목록을 확인할 수 있습니다
  let [picture, setPicture] = useState(탑[0])
  const handleClick = (image) => {
    // TIP: parameter로 이미지가 전달되어야 하며, 이벤트 객체는 쓰지 않습니다
    // TODO
    setPicture(image);
  };

  return (
    <div>
      <h2>망나니</h2>
      <div id='list' className='flex'>
        {탑.map(el => {
          return <a onClick={ () => handleClick(el)}><Thumbnail key={el.id} champion={el.src}/></a>
        })}
      </div>
      <h2>백정</h2>
      <div id='list' className='flex'>
        {정글.map(el => {
          return <a onClick={ () => handleClick(el)}><Thumbnail key={el.id} champion={el.src}/></a>
        })}
      </div>
      <h2>황족</h2>
      <div id='list' className='flex'>
        {미드.map(el => {
          return <a onClick={ () => handleClick(el)}><Thumbnail key={el.id} champion={el.src}/></a>
        })}
      </div>
      <h2>숟가락</h2>
      <div id='list' className='flex'>
        {원딜.map(el => {
          return <a onClick={ () => handleClick(el)}><Thumbnail key={el.id} champion={el.src}/></a>
        })}
      </div>
      <h2>도구</h2>
      <div id='list' className='flex'>
        {서폿.map(el => {
          return <a onClick={ () => handleClick(el)}><Thumbnail key={el.id} champion={el.src}/></a>
        })}
      </div>

      <div>
        {/* TODO: 아래 하드코딩된 내용 대신에, 목록 선택에 따른 이미지를 표시하세요 */}
        <h2>{picture.alt}</h2>
        <img src={picture.src} id='current-image' alt='이미지가 없을 때 나오는 대체 텍스트' />
      </div>
    </div>
  );
}

export default Gallery;