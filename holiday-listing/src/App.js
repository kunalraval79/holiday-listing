import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";


function App() {
  return (
    
      <div className="App">
        <Navbar />

        <div className="flex__containers">
          <Sidebar />
          <Main />
          
        </div>
      </div>
    
  );
}

export default App;
