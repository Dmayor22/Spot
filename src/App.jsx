import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import { ImageDetails } from "./data";

function App() {
  const [data, setData] = useState(ImageDetails);

  const CardList = data.map((CardItem) => {
    return <Card CardItem={CardItem} key={CardItem.id} />;
  });
  return (
    <div className="container">
      <Header />

      <main>
        <Profile />
        <section className="img-container">{CardList}</section>
        <hr />
        <Footer />
      </main>
    </div> 
  );
}

export default App;
