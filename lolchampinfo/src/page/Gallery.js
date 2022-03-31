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

  let hideTopMsg = document.querySelector('.flex1')
  let hideJngMsg = document.querySelector('.flex2')
  let hideMidMsg = document.querySelector('.flex3')
  let hideAdcMsg = document.querySelector('.flex4')
  let hideSupMsg = document.querySelector('.flex5')



  const handleClick = (image) => {
    // TIP: parameter로 이미지가 전달되어야 하며, 이벤트 객체는 쓰지 않습니다
    // TODO
    setPicture(image);
  };

  const AllClick = () => {
    hideTopMsg.classList.remove('hide')
    hideJngMsg.classList.remove('hide')
    hideMidMsg.classList.remove('hide')
    hideAdcMsg.classList.remove('hide')
    hideSupMsg.classList.remove('hide')
  }

  const TopClick = () => {
    hideTopMsg.classList.remove('hide')
    hideJngMsg.classList.add('hide')
    hideMidMsg.classList.add('hide')
    hideAdcMsg.classList.add('hide')
    hideSupMsg.classList.add('hide')
  }

  const JngClick = () => {
    hideJngMsg.classList.remove('hide')
    hideTopMsg.classList.add('hide')
    hideMidMsg.classList.add('hide')
    hideAdcMsg.classList.add('hide')
    hideSupMsg.classList.add('hide')
  }

  const MidClick = () => {
    hideMidMsg.classList.remove('hide')
    hideJngMsg.classList.add('hide')
    hideTopMsg.classList.add('hide')
    hideAdcMsg.classList.add('hide')
    hideSupMsg.classList.add('hide')
  }

  const AdcClick = () => {
    hideAdcMsg.classList.remove('hide')
    hideJngMsg.classList.add('hide')
    hideMidMsg.classList.add('hide')
    hideTopMsg.classList.add('hide')
    hideSupMsg.classList.add('hide')
  }

  const SupClick = () => {
    hideSupMsg.classList.remove('hide')
    hideJngMsg.classList.add('hide')
    hideMidMsg.classList.add('hide')
    hideAdcMsg.classList.add('hide')
    hideTopMsg.classList.add('hide')
  }


  return (
  <div id='container'>
    
    <div id='champ_filterBox'>
      <button className='전체버튼'onClick={ () => AllClick() }>전체</button>
      <button className='탑버튼' onClick={ () => TopClick() }>탑</button>
      <button className='정글버튼'onClick={ () => JngClick() }>정글</button>
      <button className='미드버튼'onClick={ () => MidClick() }>미드</button>
      <button className='원딜버튼'onClick={ () => AdcClick() }>원딜</button>
      <button className='서폿버튼'onClick={ () => SupClick() }>서폿</button>
    </div>


    <div className='flex'>



      <div id='list' className='flex1' >
        {탑.map(el => {
          return <a key={el.id} onClick={ () => handleClick(el)}><Thumbnail champion={el}/></a>
        })}
      </div>




      <div id='list' className='flex2'>
        {정글.map(el => {
          return <a key={el.id} onClick={ () => handleClick(el)}><Thumbnail champion={el}/></a>
        })}
      </div>




      <div id='list' className='flex3'>
        {미드.map(el => {
          return <a key={el.id} onClick={ () => handleClick(el)}><Thumbnail champion={el}/></a>
        })}
      </div>




      <div id='list' className='flex4'>
        {원딜.map(el => {
          return <a key={el.id} onClick={ () => handleClick(el)}><Thumbnail champion={el}/></a>
        })}
      </div>




      <div id='list' className='flex5'>
        {서폿.map(el => {
          return <a key={el.id} onClick={ () => handleClick(el)}><Thumbnail champion={el}/></a>
        })}
      </div>


    </div>

<div className=''>

<div className='sidebar'>
          {/* <button className='sidebar1_Button'>챔피언에 대한 설명</button>
          <button className='sidebar2_Button'>스킬</button>
          <button className='sidebar3_Button'>스토리</button> */}
          <div>
        {/* TODO: 아래 하드코딩된 내용 대신에, 목록 선택에 따른 이미지를 표시하세요 */}
        <h2 className='champ_name'>{picture.selected_champ}</h2>
        <img src={picture.src} id='current-image' alt='이미지가 없을 때 나오는 대체 텍스트' />
      </div>
        </div>

    
      <div>

        <div className='sidebar_content'>
          <article className='content_expChampion'>{picture.article}</article>
          {/* <article className='content_story hide'>{탑[0].stroy}</article> */}
        </div>
      </div>

      </div>
  </div>
  );
}

export default Gallery;