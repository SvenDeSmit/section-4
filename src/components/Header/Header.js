//import "./Concepts.css";

function Header({ imagePath, altImage, title, description }) {
  console.log(imagePath);
  console.log(altImage);
  console.log(title);
  console.log(description);
  return (
    <div>
      <header>
        <img src={imagePath} alt={altImage} />
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
    </div>
  );
}

export default Header;
