import { useState } from "react";
import "../styles.css";

export const Accordion = ({ title, contents }) => {
  const [open, setOpen] = useState(false);

  const handleAccordion = () => setOpen(!open);

  return (
    <div className="accordionItem" onClick={handleAccordion}>
      <div className="title">{title}</div>
      {open ? <div className="content">{contents}</div> : null}
    </div>
  );
};
