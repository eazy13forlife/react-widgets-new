import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./Accordion.scss";
import AccordionItem from "../AccordionItem/AccordionItem.js";
import { selectQuestion } from "../../actions/";

const basketballPlayers = [
  {
    question: "Who is Lebron James?",
    answer:
      "LeBron Raymone James Sr. (/ləˈbrɒn/; born December 30, 1984) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). Widely considered one of the greatest NBA players in history, James is frequently compared to Michael Jordan in debates over the greatest basketball player of all time.",
  },
  {
    question: "Who is Kyrie Irving?",
    answer:
      "Kyrie Andrew Irving (/ˈkaɪri/; Lakota: Ȟéla, lit. 'Little Mountain'; born March 23, 1992) is an American professional basketball player for the Brooklyn Nets of the National Basketball Association (NBA).",
  },
  {
    question: "Who is Kevin Durant?",
    answer:
      "Kevin Wayne Durant (/dʊrænt/; born September 29, 1988), also known simply by his initials KD, is an American professional basketball player for the Brooklyn Nets of the National Basketball Association (NBA).dasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfne of the highest-earning basketball players in the world, due in part to endorsement deals with companies such as Foot Locker and Nike. He has developed a reputation for philanthropy and regularly leads the league in All-Star votes and jersey sales. In recent years, he ne of the highest-earning basketball players in the world, due in part to endorsement deals with companies such as Foot Locker and Nike. He has developed a reputation for philanthropy and regularly leads the league in All-Star votes and jersey sales. In recent years, he ne of the highest-earning basketball players in the world, due in part to endorsement deals with companies such as Foot Locker and Nike. He has developed a reputation for philanthropy and regularly leads the league in All-Star votes and jersey sales. In recent years, he ne of the highest-earning basketball players in the world, due in part to endorsement deals with companies such as Foot Locker and Nike. He has developed a reputation for philanthropy and regularly leads the league in All-Star votes and jersey sales. In recent years, he ",
  },
];
const Accordion = () => {
  const dispatch = useDispatch();
  const accordionRef = useRef();

  useEffect(() => {
    const closeAccordion = (e) => {
      if (accordionRef.current && !accordionRef.current.contains(e.target)) {
        dispatch(selectQuestion(null));
      }
    };
    document.querySelector("body").addEventListener("click", closeAccordion);
  }, [dispatch]);

  const renderedAccordion = basketballPlayers.map((object, index) => {
    return <AccordionItem key={index} index={index} object={object} />;
  });

  return (
    <div className="Accordion-page">
      <div ref={accordionRef} className="Accordion">
        {renderedAccordion}
      </div>
    </div>
  );
};
export default Accordion;
