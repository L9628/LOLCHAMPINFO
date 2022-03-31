import React from 'react';

const 제작자정보 = () => {
    return (
        <footer id = '제작자정보'>
            <footer>Made by CodeStates 38기 박민혁, 이정윤</footer>
            <footer>Copyright @ 2022 Coding Duo_38</footer>
            <div className='github'> 
                <a target='blank' href='https://github.com/L9628'>Github 박민혁</a>
                <a target='blank' href='https://github.com/lasags'> Github 이정윤</a>
            </div>
            <div className='blog'>
                <a target='blank' href='https://mhp4718.tistory.com/'>Blog 박민혁</a>
                <a target='blank' href='https://engelsmile.tistory.com/'> Blog 이정윤</a>
            </div>
        </footer>
    )
};
export default 제작자정보;