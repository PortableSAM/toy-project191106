import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <Grid className="home-grid">
          <Cell col={12}>
            {/* eslint-disable-next-line jsx-a11y/alt-text*/}
            <img
              className="avatar-img"
              src="https://svgsilh.com/svg/156584.svg"
              atl=""
            />
            <div className="banner-text">
              <h1>Home Text</h1>
              <hr />
              <p>This is Home page</p>
            </div>
            <div className="social-link">
              <a
                href="https://www.facebook.com/hanSaemLicht"
                rel="developer facebook"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
              >
                <i className="fab fa-facebook-square" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/PortableSAM"
                rel="developer Github"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
              >
                <i className="fab fa-github-square" aria-hidden="true" />
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
