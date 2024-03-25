
import React, { Component } from "react";

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={"./img/" + this.props.item.img} />
                <h2>{this.props.item.title}</h2>
                <h2>{this.props.item.price}</h2>
                <h2>{this.props.item.mark}</h2>
                <h2 className='add-to-cart'>Купить</h2>
            </div>
        )
    }
}

export default Item
