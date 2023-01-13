import React from 'react';
import img from '../assets/success.svg'

export const Success = ({ setSuccess, invites }) => {
  return (
    <div className="success-block">
      <img src={img} alt="Success" />
      <h3>Успешно!</h3>
      <p>{invites.length} пользователям отправлено приглашение.</p>
      <button onClick={() => setSuccess(false)} className="send-invite-btn">
        Назад
      </button>
    </div>
  );
};
