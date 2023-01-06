import { data } from "../utils/data";
import { Accordion } from "./accordion";

export const AccordionContainer = () => {
  return (
    <div className="accordionContainer">
      {data.map(({ title, contents }) => (
        <Accordion title={title} contents={contents} />
      ))}
    </div>
  );
};
