import css from './FAQ.module.css';
import GetInTouchBtn from '../../components/header/GetInTouchBtn/GreenBtn';
import FAQfuctional from './FAQfuctional';
import faqData from './FAQData';

const FAQ = () => {
    const faqBtn = "Contact us";

    return (
        <section className={css.FAQ_section}>
            <h2 className={css.FAQ_title}>Frequently Asked Questions</h2>
            <ul className={css.FAQ_list}>
                <li className={css.FAQ_item}>
                    {faqData.map(({ question, answer, id }) => (
                    <FAQfuctional id={id} question={question} answer={answer} />
                    ))}
                </li>                
            </ul>
            <div className={css.FAQ_contactBlock}>
                <p className={css.FAQ_noAnswerText}>Didn't find the answer to your question? </p>
                <GetInTouchBtn nameBtn={faqBtn}/>
            </div>
        </section>
    )
};

export default FAQ;