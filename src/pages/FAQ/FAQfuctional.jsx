import css from './FAQ.module.css';
import React, { useState } from 'react';

const FAQfuctional = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  

  return (<>
      <div className={css.FAQ_questionBox} onClick={() => setIsActive(!isActive)}>
        <div className={css.FAQ_icon}>{isActive ? '-' : '+'}</div>
        <div className={css.FAQ_question}>{question}</div>
      </div>
      {isActive && <div className={css.FAQ_answerText}>{answer}</div>}
    </>
  );
};

export default FAQfuctional;