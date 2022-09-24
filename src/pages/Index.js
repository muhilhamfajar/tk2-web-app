import React from "react";
import Gallery from "../components/Gallery";
import SearchAndFilter from "../components/SearchAndFilter";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      title: "",
      sortBy: ""
    };
  }

  onSearchChange = (newValue) => {
    this.setState({
      title: newValue
    })
  }

  onSortingChange = (newValue) => {
    this.setState({
      sortBy: newValue
    })
  }

  render() {
    return (
      <div>
        <SearchAndFilter title={this.state.title} onSearchChange={this.onSearchChange} onSortingChange={this.onSortingChange} />
        <Gallery title={this.state.title} sortBy={this.state.sortBy} />
      </div>
    );
  }
}

export default Index;
