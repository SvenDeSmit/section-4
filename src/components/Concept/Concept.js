//import "./Concepts.css";
//import ConceptHeader from "./ConceptHeader";

function Concept({ imagePath, title, description }) {
  console.log(imagePath);
  return (
    <div>
      <li className="concept">
        <img src={imagePath} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    </div>
  );
}

export default Concept;
