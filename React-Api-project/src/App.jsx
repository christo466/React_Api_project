
import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import Dash from './Pages/Dash'; 
import About from './Pages/About'; 
import Dashboard from './Pages/Data';

function App() {
    const [data, setData] = useState([
        { id: 1, name: 'John', age: 30, city: 'New York' },
        { id: 2, name: 'Jane', age: 25, city: 'San Francisco' },
        { id: 3, name: 'Mike', age: 35, city: 'Chicago' },
        { id: 4, name: 'Anna', age: 28, city: 'Los Angeles' },
        { id: 5, name: 'Tom', age: 32, city: 'Seattle' }
      ]);

      const [displayedData, setDisplayedData] = useState(data.slice(0, 3));
      const [remainingData, setRemainingData] = useState(data.slice(3));
    
     
      const handleArrow = () => {
        if (remainingData.length > 0) {
          setDisplayedData(prevData => [...prevData, remainingData[0]]);
          setRemainingData(prevData => prevData.slice(1));
        }
      };





  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/dash" element={<Dash data={displayedData}   handleArrow={handleArrow} 
        hasMore={remainingData.length > 0}  setData={setData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      
      </Routes>
    </Router>
  );
}

export default App;
