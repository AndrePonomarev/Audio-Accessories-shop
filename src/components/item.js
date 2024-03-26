
import React, { Component } from "react";

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img class="itemimg" src={"./img/" + this.props.item.img} />
                <div class="titprice">
                    <h2>{this.props.item.title}</h2>
                    <h2>{this.props.item.price}</h2>
                </div>
                <div class="markbuy">
                    <h2><img width="22" height="auto" src="./img/Star.png"></img>{this.props.item.mark}</h2>
                    <h2 className='add-to-cart'>Купить</h2>
                </div>
            </div>
        )
    }
}

export default Item
