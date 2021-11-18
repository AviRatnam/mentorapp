import { MentorProvider } from "./MentorContext";
import Pages from "./Pages";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/footer/footer";
import Header from "./Components/header/header";

function App() {
  return (
    <MentorProvider>
      <Router>
        <Header />
        <Pages />
        <Footer />
      </Router>
    </MentorProvider>
  );
}

export default App;
