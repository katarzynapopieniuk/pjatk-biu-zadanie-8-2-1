import './App.css';
import {Routes, Route, useParams} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"/>
        <Route path="/about"/>
        <Route path="/services"/>
        <Route path="/contact"/>
        <Route path="/contact/us"/>
        <Route path="/contact/pl"/>
        <Route path="/contact/de"/>
        <Route path=":id" element={<ElementNotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;

function ElementNotFound() {
  const {id} = useParams();
  return <div>{`Nie znaleziono elementu: ${id}`}</div>
}