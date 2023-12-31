import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "İçecek" },
      { categoryId: 2, categoryName: "İçecek 2" },
    ]
  };

 
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h3>{this.props.currentCategory}</h3>
      </div>
    );
  }
}
