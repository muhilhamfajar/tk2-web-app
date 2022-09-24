import { Component } from "react";
import { Link } from "react-router-dom";

export default class PosterMovie extends Component {
  render() {
    return (
      <Link class="flex justify-center" to={`/show/${this.props.item.Uuid}`}>
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img
              class="rounded-t-lg w-full"
              src={this.props.item.Poster}
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{this.props.item.Title}</h5>
            <p class="text-gray-700 text-base mb-4">
              {this.props.item.Description}
            </p>
          </div>
        </div>
      </Link>
    );
  }
}
