import { Component } from "react";
import PosterMovie from "./PosterMovie";
import data from "../data/data_film.json"

export default class Gallery extends Component {
  render() {
    const movies = data.filter(item => item.Title.toLowerCase().includes(this.props.title.toLowerCase().trim()))
    .sort((a, b) => {      
      if (this.props.sortBy === 'DESC'){
        return a.Title < b.Title ? 1 : -1
      }

      return a.Title > b.Title ? 1 : -1
    })
    .map((item) => {
      return (
        <PosterMovie item={item} key={item.Uuid} />
      )
    })

    return (
      <div class="grid grid-cols-4 gap-y-10">
        { movies }
      </div>
    );
  }
}
