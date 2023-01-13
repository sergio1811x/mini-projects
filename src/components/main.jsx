import React from 'react';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div className={'mainPage'}>
      <div className={'mainPageBlock'}>
      <div style={{fontSize:30,fontStyle:'italic',textAlign:'center'}}> Мини проекты: </div>
      <div>   <ol type={'1'} className={'mainUl'}>
        <li>
          <span>
            <Link to={'/counter'}>counter</Link>
          </span>
          <span> - Счетчик с использованием useState</span>
        </li>
        <li>
          <span>
            <Link to={'/modal'}>modal</Link>
          </span>
          <span> - Модальное окно с рандомной гифкой, запрос через Axios</span>
        </li>
        <li>
          <span>
            <Link to={'/quiz'}>quiz</Link>
          </span>
          <span> - Пример опросника</span>
        </li>
        <li>
          <span>
            <Link to={'/users'}>users</Link>
          </span>
          <span> - Список людей полученный через Axios</span>
        </li>
        <li>
          <span>
            <Link to={'/converter'}>converter</Link>
          </span>
          <span> - Конвертер валют</span>
        </li>
        <li>
          <span>
            <Link to={'/photos'}>photos</Link>
          </span>
          <span> - Фильтрация и вывод полученных данных с сервера</span>
        </li>
      </ol></div>
      </div>
    </div>
  );
};
