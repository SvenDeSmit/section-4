//import "./Concepts.css";
import Concept from "./Concept";

function ConceptList({ list }) {
  return (
    <div>
      <ul id="concepts" className="concepts">
        <Concept
          imagePath={list[0].image}
          title={list[0].title}
          description={list[0].description}
        ></Concept>
        <Concept
          imagePath={list[1].image}
          title={list[1].title}
          description={list[1].description}
        ></Concept>
        <Concept
          imagePath={list[2].image}
          title={list[2].title}
          description={list[2].description}
        ></Concept>
      </ul>
    </div>
  );
}

export default ConceptList;
