import Body from "./Components/body/body";
import Footer from "./Components/footer/footer";
import Header from "./Components/header/header";
import { MentorProvider } from "./MentorContext";

function App() {
  return (
    <MentorProvider>
      <Header />
      <Body />
      <Footer />
    </MentorProvider>
  );
}

export default App;
