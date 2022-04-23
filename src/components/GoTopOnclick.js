import React, { Component } from "react";

class GoTop extends Component {
  state = {
    intervalId: 0,
    thePosition: false,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  scrollToTop = () => {
        window.scrollTo(0, 0);
  };

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <>
          <div className="move-up">
            <span>
              <i className="fas fa-chevron-up" onClick={this.scrollToTop}></i>
            </span>
          </div>
        </>
      );
    }
  };

  render() {
    return <>{this.renderGoTopIcon()}</>;
  }
}

export default GoTop;