import "./App.css";
import Contact_Header from "./components/Contact_Header/contact_header";
import ContactForm from "./components/ContactForm/ContactForm";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <div className="main_container">
      <Contact_Header />
      <ContactForm/>
      </div>
    </div>
  );
}

export default App;
