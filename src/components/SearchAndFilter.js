import { Component } from "react";

export default class SearchAndFilter extends Component {
  handleTitleChange = (event) => {
    const target = event.target;
    const value = target.value;

    this.props.onSearchChange(value)    
  }

  handleSorting = (event) => {
    const target = event.target;
    const value = target.value;

    this.props.onSortingChange(value)  
  }

  render() {
    return (
      <div class="flex w-full mb-5">
        <label class="relative block w-3/4 mr-5">
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search movie..."
            type="text"
            name="title"
            value={this.props.title}
            onChange={this.handleTitleChange}
          />
        </label>

        <label class="relative w-1/4 block">
          <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.props.sortBy} onChange={this.handleSorting}>
            <option value="">Sort By Title</option>
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>
          </select>
        </label>
      </div>
    );
  }
}
