import Card from "./component/card/Card";

function App() {
  return (
    <section className="app">
      <Card
      mainImageSrc="https://placehold.co/1000x400"
      mainImageAlt="Some Image"
      mainImageoading="lazy"
      mainImageWidth="1000"
      mainImageHeight="400"
      />
    </section>
  );
}

export default App;