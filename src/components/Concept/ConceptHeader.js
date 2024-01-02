//import "./Concepts.css";

function ConceptHeader({ imagePath, title }) {
  return (
    <div>
      <img src={imagePath} alt={title} />
    </div>
  );
}

export default ConceptHeader;
