import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Education from "./Education";
import Career from "./Career";

class About extends Component {
  render() {
    return (
      <div className="about_body">
        {/* ClassName부여 App.js content-body css 종속 분리 */}{" "}
        <Grid>
          <Cell className="about_left_col" col={4}>
            <div className="left_float">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                src="https://svgsilh.com/svg/156584.svg"
                atl=""
                style={{
                  height: "200px",
                  borderRadius: "10em",
                  paddingTop: "10px"
                }}
              />
            </div>
            <h2>Han Saem</h2>
            <h4>Beginner Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2" }} />
            <h5>E-mail</h5>
            <p>hanmti00@naver.com</p>
            <hr style={{ borderTop: "3px solid #833fb2" }} />
          </Cell>
          <Cell className="about_right_col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2004}
              endYear={2007}
              schoolName={"YongSan Technical High School"}
              Department={"Electron department"}
            />
            <hr style={{ borderTop: "2px solid #076585" }} />
            <h2>Career</h2>
            <Career
              startYear={2018}
              endYear={2019}
              jobName={"J.H Technology"}
              description={
                "Gas scrubber Maintenance and Vacuum pump Maintenance"
              }
            />
            <Career
              startYear={2009}
              endYear={2016}
              jobName={"Republic of Korea, Army"}
              description={"Army Field Artillery, Maintenance Team"}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
