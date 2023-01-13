import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import axios from 'axios';

function Modal() {
  const [click, setClick] = useState(false);
  const [dataGif, setDataGif] = useState([]);
  const clickOutRef = useRef();

  useEffect(() => {
    axios
      .get('https://api.giphy.com/v1/gifs/trending?api_key=0jHEU67eCN1fRCPFR0qp34RsgtXRlldM')
      .then((res) => setDataGif(res.data.data));
  }, []);

  const idGif = dataGif?.map((el) => el.id);
  const random = Math.floor(Math.random() * 49) + 1;

  const handleClickOut = (e) => {
    if (click) {
      e.target.className !== 'modal' && e.target.className !== 'image' && setClick(false);
    }
  };

  return (
    <div ref={clickOutRef} onClick={(e) => handleClickOut(e)} className={'body_modal'}>
      <div className="modal">
        <button className="open-modal-btn" onClick={() => setClick(true)}>
          ✨ Открыть окно
        </button>
        {click ? (
          <div className="overlay">
            <div className="modal">
              <svg height="300" viewBox="0 0 200 200" width="300" onClick={() => setClick(false)}>
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
              <img
                className={'image'}
                style={{ height: 300, width: 300 }}
                src={`https://i.giphy.com/media/${idGif[random]}/giphy.webp`}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;
