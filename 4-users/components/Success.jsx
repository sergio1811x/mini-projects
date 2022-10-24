import React from 'react';

export const Success = ({setSuccess, invites }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>{invites.length} пользователям отправлено приглашение.</p>
      <button onClick={() => setSuccess(false)} className="send-invite-btn">Назад</button>
    </div>
  );
};
