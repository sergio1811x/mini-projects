import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { Collection } from './collection';

const cats = [
  { name: 'Все' },
  { name: 'Море' },
  { name: 'Горы' },
  { name: 'Архитектура' },
  { name: 'Города' },
];

function Photos() {
  const [collections, setCollections] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const category = categoryId ? `category=${categoryId}` : '';

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://63c1921e71656267187ec24b.mockapi.io/photos?page=${page}&limit=3&${category}`)
      .then((res) => setCollections(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className={'body_photos'}>
      <div className="photos">
        <h1>Коллекция фотографий</h1>
        <div className="top">
          <ul className="tags">
            {cats.map((obj, index) => (
              <li
                onClick={() => setCategoryId(index)}
                className={categoryId == index && 'active'}
                key={obj.name}
              >
                {obj.name}
              </li>
            ))}
          </ul>
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className="search-input"
            placeholder="Поиск по названию"
          />
        </div>
        {isLoading ? (
          <h2>Идет загрузка...</h2>
        ) : (
          <div className="content">
            {collections
              .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj, index) => (
                <Collection key={index} name={obj.name} photos={obj.photos} />
              ))}
          </div>
        )}
        <ul className="pagination">
          {[...Array(5)].map((_, index) => (
            <li
              onClick={() => setPage(index + 1)}
              className={page == index + 1 && 'active'}
              key={index}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Photos;
