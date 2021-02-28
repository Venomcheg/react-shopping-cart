import React, { Component } from "react"
import { Container, FilterResult, FilterSize, FilterSort } from "./filter"

export default class Filter extends Component {
  render() {
    return (
      <Container>
        <FilterResult>{this.props.count} Products </FilterResult>
        <FilterSort>
          Order{" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </FilterSort>
        <FilterSize>
          Filter{" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option>ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </FilterSize>
      </Container>
    )
  }
}
