import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";

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
        }
      
      ]
    }
  }

  render() {
    return (
      <div className="wrapper">
        
        <Header />
        <p>Наушники</p>
        <Items items={this.state.items} />
        <Footer />

      </div>
    );
  }
}

export default App;
