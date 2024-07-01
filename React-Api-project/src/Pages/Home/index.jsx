import { useState } from 'react';
import PropTypes from 'prop-types';
import './Home.css'; 
import Header from '../Header';
import Footer from '../Footer';
import Counter from './components/counter'
import { Link } from 'react-router-dom';

function MyButton() {
  return (
    <button>
      Button
    </button>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 150,
};

function MyButton1() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function MyButton2({ count1, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count1} times
    </button>
  );
}

MyButton2.propTypes = {
  count1: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default function Profile() {

  

  const [count1, setCount1] = useState(0);

  function handleClick2() {
    setCount1(count1 + 1);
  }

  function handleClick() {
    alert('You clicked me!');
  }

  const [count, setCount] = useState(0);

  function handleClick1() {
    setCount(count + 1);
  }

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <>
     <div className="home">
    <div>
      <Header />
       
     </div>
     <div>
     <Link to="/dashboard">People info</Link>
     </div>
     <main className="home-content">
      <div className="bordered-div">
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </div>
      <div className="bordered-div">
        <MyButton />
      </div>
      <div className="bordered-div">
        <ul>{listItems}</ul>
      </div>
      <div className="bordered-div">
        <button onClick={handleClick}>
          Click me
        </button>
      </div>
      <div className="bordered-div">
        <button onClick={handleClick1}>
          Clicked {count} times
        </button>
      </div>
      <div className="bordered-div">
        <h1>Counters that update separately</h1>
        <MyButton1 />
        <MyButton1 />
      </div>
      <div className="bordered-div">
        <h1>Counters that update together</h1>
        <MyButton2 count1={count1} onClick={handleClick2} />
        <MyButton2 count1={count1} onClick={handleClick2} />
      </div>
      </main>
      <div>
        <Counter />
      </div>
       
     <Footer/>
      </div>
     
    </>
  );
}
