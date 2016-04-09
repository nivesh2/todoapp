import React from "react";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>

              {this.props.children}

            </div>
          </div>
        <Footer/>
       </div>
      </div>

    );
  }
}
