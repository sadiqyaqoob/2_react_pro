import "./App.css";
import ContactHeader from "./components/Contact_Header/Contact_Header";

import ContactForm from "./components/ContactForm/ContactForm";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <div className="main_container">
        <ContactHeader />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
