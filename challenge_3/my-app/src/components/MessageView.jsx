import React from 'react';

const MessageView = ({ gameOver, loss }) => {
  let message;

  if (loss) {
    message = 'TRY AGAIN!';
  } else {
    message = 'WINNER!';
  }

  return (
    <div className="message">
      {
        gameOver ? message : null
      }
    </div>);
};

export default MessageView;
