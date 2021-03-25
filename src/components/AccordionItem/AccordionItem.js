import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectQuestion, setHeight } from "../../actions/";

const AccordionItem = ({ index, object }) => {
  const paragraphRef = useRef();
  const itemRef = useRef();

  const selected = useSelector((state) => {
    return state.selected;
  });

  const selectedHeight = useSelector((state) => {
    return state.selectedHeight;
  });

  const dispatch = useDispatch();

  const currentHeight = selected === index ? selectedHeight : 0;

  return (
    <div
      ref={itemRef}
      className={`Accordion__item ${selected === index ? "selected" : ""}`}
      key={index}
    >
      <h1
        className="Accordion__header"
        onClick={(e) => {
          if (selected === index) {
            dispatch(selectQuestion(null));
          } else {
            dispatch(selectQuestion(index));
            dispatch(setHeight(paragraphRef.current.clientHeight));
          }
        }}
      >
        {object.question}
        <i className=" angle right icon"></i>
      </h1>
      <div
        className="Accordion__paragraph-container"
        style={{ height: currentHeight }}
      >
        <p className="Accordion__paragraph" ref={paragraphRef}>
          {object.answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
