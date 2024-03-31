import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import ShopCart from "./components/ShopCart";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Apple Byz S8521',
          img: 'Apple Byz S8521.png',
          price: '2927 Р',
          mark: '4.7'
        },
        {
          id: 2,
          title: 'Apple EarPods',
          img: 'Apple EarPods.png',
          price: '2327 Р',
          mark: '4.5'
        },
        {
          id: 3,
          title: 'Apple EarPods2',
          img: 'Apple EarPods2.png',
          price: '2327 Р',
          mark: '4.5'
        },
        {
          id: 1,
          title: 'Apple Byz S8521',
          img: 'Apple Byz S8521.png',
          price: '2927 Р',
          mark: '4.7'
        },
        {
          id: 2,
          title: 'Apple EarPods',
          img: 'Apple EarPods.png',
          price: '2327 Р',
          mark: '4.5'
        },
        {
          id: 3,
          title: 'Apple EarPods2',
          img: 'Apple EarPods2.png',
          price: '2327 Р',
          mark: '4.5'
        }
      
      ],
      wireless: [
        {
          id: 4,
          title: 'Apple AirPods',
          img: 'Apple AirPods.png',
          price: '9527 Р',
          mark: '4.7'
        },
        {
          id: 5,
          title: 'GERLAX GH-04',
          img: 'GERLAX GH-04.png',
          price: '6527 Р',
          mark: '4.7'
        },
        {
          id: 6,
          title: 'Apple AirPods',
          img: 'Apple AirPods2.png',
          price: '7527 Р',
          mark: '4.7'
        },
      ],
      cart: [] // Добавим пустой массив для корзины покупок
    }
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home items={this.state.items} wireless={this.state.wireless} />} />
            <Route path="/cart" element={<ShopCart cart={this.state.cart} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

// Компонент Home для отображения списка товаров
function Home({ items, wireless }) {
  return (
    <div>
      <p className="headphones">Наушники</p>
      <Items items={items} />
      <p className="headphones">Беспроводные Наушники</p>
      <Items items={wireless} />
    </div>
  );
}

export default App;
