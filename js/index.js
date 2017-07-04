"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleBar = function (_React$Component) {
  _inherits(TitleBar, _React$Component);

  function TitleBar(props) {
    _classCallCheck(this, TitleBar);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      camper: [],
      searched: false
    };
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  TitleBar.prototype.handleSearch = function handleSearch() {
    var input = $("#search").val();
    if (input.length > 1) {

      $.ajax({

        url: "https://fcctop100.herokuapp.com/api/fccusers/ranking-r/" + input,
        cache: true,
        dataType: "json",
        success: function (data) {
          this.setState({
            camper: data,
            searched: true
          });
        }.bind(this),
        error: function (xhr, type, errMsg) {
          alert("ERROR: " + "https://fcctop100.herokuapp.com/api/fccusers/ranking-r/benjaminadk", type, errMsg);
        }.bind(this)
      });
    }
  };

  TitleBar.prototype.closeModal = function closeModal() {
    this.setState({
      searched: false
    });
  };

  TitleBar.prototype.render = function render() {
    if (this.state.searched) {
      $("#info").css({
        "opacity": 1,
        "z-index": 2
      });
      $("#overlay").css({
        "opacity": 1,
        "z-index": 1 });
    } else {
      $("#info").css({
        "opacity": 0,
        "z-index": -2
      });
      $("#overlay").css({
        "opacity": 0,
        "z-index": -2 });
    }
    return React.createElement(
      "div",
      { className: "row", id: "titleBar" },
      React.createElement(
        "div",
        { id: "info", className: "card" },
        React.createElement(
          "h1",
          null,
          "Hey ",
          this.state.camper.username,
          "!"
        ),
        React.createElement(
          "h2",
          null,
          "Lets check out your stats"
        ),
        React.createElement(
          "table",
          { className: "hover" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "th",
              { id: "picLabel" },
              "Profile Pic"
            ),
            React.createElement(
              "th",
              null,
              "Ranking"
            ),
            React.createElement(
              "th",
              null,
              "Points"
            ),
            React.createElement(
              "th",
              null,
              "Challenges"
            ),
            React.createElement(
              "th",
              null,
              "Algorithms"
            ),
            React.createElement(
              "th",
              null,
              "Projects"
            )
          ),
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement("img", { src: this.state.camper.img })
              ),
              React.createElement(
                "td",
                { className: "dataItem" },
                this.state.camper.ranking
              ),
              React.createElement(
                "td",
                { className: "dataItem" },
                this.state.camper.points
              ),
              React.createElement(
                "td",
                { className: "dataItem" },
                this.state.camper.challenges
              ),
              React.createElement(
                "td",
                { className: "dataItem" },
                this.state.camper.algorithms
              ),
              React.createElement(
                "td",
                { className: "dataItem" },
                this.state.camper.projects
              )
            )
          )
        ),
        React.createElement(
          "a",
          { href: "#", className: "button closeButton", onClick: this.closeModal },
          "PRESS TO CLOSE MODAL"
        )
      ),
      React.createElement(
        "div",
        { className: "column small-7" },
        React.createElement(
          "span",
          { id: "title" },
          React.createElement("i", { className: "fa fa-free-code-camp" }),
          "Free Code Camp Leaderboard: Brownie Point Munchers",
          React.createElement("i", { className: "fa fa-free-code-camp" })
        ),
        React.createElement("br", null),
        React.createElement(
          "a",
          { href: "#", className: "button", id: "toggleButton", onClick: this.props.method },
          "TOGGLE TABLE"
        ),
        React.createElement(
          "span",
          { id: "tableStatus" },
          "Table is currently in ",
          React.createElement(
            "span",
            { id: "currentStatus" },
            this.props.status
          ),
          " mode"
        )
      ),
      React.createElement(
        "div",
        { className: "column small-5 search" },
        React.createElement(
          "a",
          { href: "#", className: "button split no-pip", onClick: this.handleSearch },
          "SEARCH",
          React.createElement(
            "span",
            null,
            React.createElement("i", { className: "fa fa-search" }),
            React.createElement("input", { id: "search", type: "search", placeholder: "ENTER YOUR USERNAME" })
          )
        )
      )
    );
  };

  return TitleBar;
}(React.Component);

var TableHead = function TableHead(props) {
  return React.createElement(
    "thead",
    null,
    React.createElement(
      "tr",
      null,
      React.createElement(
        "th",
        { className: "headSpace", id: "rank" },
        "Top 💯"
      ),
      React.createElement(
        "th",
        { className: "headSpace", id: "userName" },
        "User Name"
      ),
      React.createElement(
        "th",
        { className: "headSpace", id: "recent" },
        "Recent Points 🐊"
      ),
      React.createElement(
        "th",
        { className: "headSpace", id: "allTime" },
        "All Time Points 🐐"
      )
    )
  );
};

var TableFoot = function TableFoot(props) {
  return React.createElement(
    "tfoot",
    null,
    React.createElement(
      "tr",
      null,
      React.createElement("td", { className: "foot" }),
      React.createElement(
        "td",
        { className: "foot" },
        "Page Design by Ben.Jam(In);"
      ),
      React.createElement("td", { className: "foot" }),
      React.createElement("td", { className: "foot" })
    )
  );
};

var User = function (_React$Component2) {
  _inherits(User, _React$Component2);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  User.prototype.render = function render() {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        { id: "userRank" },
        this.props.rank
      ),
      React.createElement(
        "td",
        { id: "userUser" },
        React.createElement("img", { src: this.props.data.img }),
        React.createElement(
          "a",
          { href: "https://www.freecodecamp.com/" + this.props.data.username, target: "_blank" },
          this.props.data.username
        )
      ),
      React.createElement(
        "td",
        { id: "userRecent" },
        this.props.data.recent
      ),
      React.createElement(
        "td",
        { id: "userAllTime" },
        this.props.data.alltime
      )
    );
  };

  return User;
}(React.Component);

var Table = function (_React$Component3) {
  _inherits(Table, _React$Component3);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  Table.prototype.render = function render() {
    var rank = 0;
    var allUsers = this.props.users.map(function (user) {
      rank++;
      return React.createElement(User, { rank: rank, data: user });
    }.bind(this));
    return React.createElement(
      "table",
      null,
      React.createElement(TableHead, null),
      React.createElement(
        "tbody",
        null,
        allUsers
      ),
      React.createElement(TableFoot, null)
    );
  };

  return Table;
}(React.Component);

var Body = function (_React$Component4) {
  _inherits(Body, _React$Component4);

  function Body(props) {
    _classCallCheck(this, Body);

    var _this4 = _possibleConstructorReturn(this, _React$Component4.call(this, props));

    _this4.state = {
      users: [],
      sort: "recent"
    };
    _this4.getCampers = _this4.getCampers.bind(_this4);
    _this4.toggleTable = _this4.toggleTable.bind(_this4);
    return _this4;
  }

  Body.prototype.getCampers = function getCampers() {
    $.ajax({
      url: this.props.url + "top/" + this.state.sort,
      cache: false,
      dateType: "json",
      success: function (data) {
        this.setState({ users: data });
      }.bind(this),
      error: function (xhr, type, errMsg) {
        alert("ERROR: " + this.props.url, type, errMsg);
      }.bind(this)
    });
  };

  Body.prototype.toggleTable = function toggleTable() {
    if (this.state.sort === "recent") {
      this.setState({
        sort: "alltime"
      });
      setTimeout(this.getCampers, 1000);
    } else {
      this.setState({
        sort: "recent"
      });
      setTimeout(this.getCampers, 1000);
    }
  };

  Body.prototype.componentDidMount = function componentDidMount() {
    this.getCampers();
  };

  Body.prototype.render = function render() {
    return React.createElement(
      "div",
      { id: "outerWrap" },
      React.createElement(TitleBar, { method: this.toggleTable,
        status: this.state.sort }),
      React.createElement(Table, { users: this.state.users })
    );
  };

  return Body;
}(React.Component);

var App = function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component5.call(this, props));
  }

  App.prototype.render = function render() {
    return React.createElement(Body, { url: this.props.url });
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, { url: "https://fcctop100.herokuapp.com/api/fccusers/" }), document.getElementById("app"));