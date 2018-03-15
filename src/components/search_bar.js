import React, { Component } from 'react';
// { Component }: const Component = React.Component;

//
// const SearchBar = () => {
//   return <input />; //
// };

// class based component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term:''};
  }

  render() {
    //return <input onChange={this.onInputChange} />;
    //return <input onChange={event => console.log(event.target.value)} />;
    return (
      <div className="search-bar">
        <input
          value = {this.state.term} // control component
          //onChange={event => this.setState({ term: event.target.value })} />;
          onChange={event => this.onInputChange(event.target.value)} />;
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }


//  onInputChange(event) {
    //console.log(event.target.value);
//    console.log(event);
//  }
}

export default SearchBar;
