import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      pgNum: 1,
    };
  }

  getInputData = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  //   resetInput = () => {
  //     this.setState({
  //       query: "",
  //     });
  //   };

    call = (e) => {
      e.preventDefault();
    //   this.props.search(this.props.query);
    //   // this.resetInput();
      console.log("clcike");
    };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid con">
            <a className="navbar-brand" href="/">
              Movies
            </a>

            <form
              className="search mr-lg-2 mr-md-2 mt-lg-2 mt-md-2 mt-sm-2 "
              onSubmit={this.props.callSearchFunction}
            >
              {/* <input
                id="Search"
                name="Search"
                type="text"
                placeholder="Search"
              /> */}

              <div className="input-container">
                <input
                  type="search"
                  className="input"
                  name="q"
                  placeholder="Enter a Movies name"
                  value={this.props.value}
                  onChange={this.props.onChange}
                />

               
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Search;
