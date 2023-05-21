import Card from "./component/card/Card";

function App() {
  return (
    <section className="app">
      <Card
      mainImageSrc="./src/assets/image-product-desktop.jpg"
      mainImageAlt="Some Image"
      mainImageoading="lazy"
      titreHMain="Lorem Ipsum dolor dit amet"
      />
    </section>
  );
}

export default App;