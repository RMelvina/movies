import React, { Component } from "react";
import Search from "./Search";
import { API, SEARCH, POPULAR, API_KEY, QUERY, API_IMG, Pages } from "./Config";
import NoImg from "../images/no_Img.png";
import MovieList from "./MovieList";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      pgNum: 1,
      totalPg: [],
      query: "",
      iconStatus: false,

      isSearched: false,
    };
  }
  componentDidMount = () => {
    this.getApiData(this.displayApiData(this.state.pgNum));
  };
  displayApiData = (num) => {
    return `${API}movie${POPULAR}?api_key=${API_KEY}${Pages}${num}`;
  };

  searchApi = (text, num) => {
    return `${API}${SEARCH}movie?api_key=${API_KEY}${QUERY}${text}${Pages}${num}`;
  };

  getApiData = (apiCall) => {
    fetch(apiCall)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          totalPg: data.total_pages,
        });
        console.log(data.page);
        console.log(data.results);
        console.log(data);
      });
  };

  goNextPg = () => {
    if (this.state.movies) {
      this.setState(
        {
          pgNum: (this.state.pgNum += 1),
        },
        () => this.getApiData(this.displayApiData(this.state.pgNum))
      );
    }
  };

  goNextPgSearch = () => {
    if (this.state.movies) {
      this.setState(
        {
          pgNum: (this.state.pgNum += 1),
        },
        () =>
          this.getApiData(this.searchApi(this.state.query, this.state.pgNum))
      );
    }
  };

    goBackPg = () => {
      if (this.state.movies) {
        this.setState(
          {
            pgNum: (this.state.pgNum -= 1),
          },
          () => this.getApiData(this.displayApiData(this.state.pgNum))
        );
      }
    };

    goBackPgSearch = () => {
      if (this.state.movies) {
        this.setState(
          {
            pgNum: (this.state.pgNum -= 1),
          },
          () => this.getApiData(this.searchApi(this.state.query))
        );
      }
    };

  nextBtn = () => {
  
    this.state.isSearched == false ? this.goNextPg() : this.goNextPgSearch();
  };

    prevBtn = () => {
      if (this.state.isSearched == false) {
        this.goBackPg();
      } else {
        this.goBackPgSearch();
      }
    };

  getInputData = (e) => {
      this.setState({
        query: e.target.value,
        iconStatus: true,
      });
    
  };

  
  
  callSearchFunction = (e) => {
    e.preventDefault();
    this.getApiData(this.searchApi(this.state.query, this.state.pgNum));
    console.log(this.state.query);
    this.setState({
      isSearched: true,
     
    });

  };

 
  render() {
    return (
      <div>
        <div>
          <Search
            callSearchFunction={this.callSearchFunction}
            onChange={this.getInputData}
            value={this.state.query }
            iconX={this.state.iconStatus}
          />

        </div>

        <div className="btn_container text-center pt-2 mt-5 ">
          <button className="btn mr-4" onClick={this.nextBtn}>
            Next
          </button>
          <button className="btn" onClick={this.prevBtn}>
            Prev
          </button>
        </div>
        <div>
          <MovieList
            arrayName={this.state.movies}
          />

         
        </div>

      </div>
    );
  }
}

export default Home;
