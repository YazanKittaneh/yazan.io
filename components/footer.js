"use strict";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ["fas fa-heart", "fas fa-wine-glass-alt", "fab fa-react"],
      index: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.index + 1 >= this.state.icons.length) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  }

  render() {
    return e(
      "div",
      null,
      e("a", { href: "https://www.yazan.io/" }, "Yazan Kittaneh"),
      " © 20" +
        (new Date().getUTCFullYear() % 100).toString().padStart(2, "0") +
        " ",
      " • Made with ",
      e(
        "i",
        { className: "fa-fw " + this.state.icons[this.state.index] },
        null
      ),
      e("a", { href: "privacy-policy.html" }, "Privacy Policy")
    );
  }
}

ReactDOM.render(e(Footer), document.querySelector("footer"));
