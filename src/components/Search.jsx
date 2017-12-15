var Search = (props) => {


  // at the time of the click it's going to be the input value
  // 

  let div = (
    <div className="search-bar form-inline">
      <input id='searchBar' className="form-control" type="text" />
      <button onClick={function() {
        let userInput = document.getElementById('searchBar').value;
        props.newSearchRequest(userInput);
      }
      } className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
  
  return div;
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;