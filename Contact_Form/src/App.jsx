import Navigation from "./components/Navigation"
import ContactFormHeader from "./components/ContactFormHeader"
import ContactForm from "./components/ContactForm.jsx"

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <Navigation/>  
     <main  className="main_container">
     <ContactFormHeader/>
     <ContactForm/>
     </main>
    </div>
  )
}

export default App
