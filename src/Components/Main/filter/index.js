import React, { Component } from "react"
import { Container, FilterResult, FilterSize, FilterSort } from "./filter"
import {filterProducts, sortProducts} from "../../../actions/productActions";
import {connect} from "react-redux";

class Filter extends Component {


  render() {

    return (
        !this.props.filteredItems ? (<div>Loading...</div>) : (<Container>
      <FilterResult>{this.props.filteredItems.length} Products </FilterResult>
      <FilterSort>
        Order{" "}
        <select value={this.props.sort} onChange={(e)=> this.props.sortProducts(this.props.filteredItems, e.target.value)}>
          <option value={"latest"}>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </FilterSort>
      <FilterSize>
        Filter{" "}
        <select value={this.props.size} onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
          <option value={""}>ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </FilterSize>
    </Container>)
    )
  }
}
export default connect((state)=> ({
  size: state.products.size,
  sort: state.products.priceFilter,
  products: state.products.items,
  filteredItems: state.products.filteredItems
}),
    {
  filterProducts, sortProducts,
    })(Filter)