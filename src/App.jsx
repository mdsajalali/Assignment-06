import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./index.css"

const App = () => {
  return (
    <div>
      <Header title="My React Application" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
