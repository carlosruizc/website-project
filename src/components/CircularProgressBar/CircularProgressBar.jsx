import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import _ from "lodash";
import { easeQuadInOut } from "d3-ease";

const CircularProgressBar = ({ value, text }) => {

  function Separator(props) {
    return (
      <div
        style={{
          position: "absolute",
          height: "100%",
          transform: `rotate(${props.turns}turn)`
        }}
      >
        <div style={props.style} />
      </div>
    );
  }

  function RadialSeparators(props) {
    const turns = 1 / props.count;
    return _.range(props.count).map(index => (
      <Separator key={index} turns={index * turns} style={props.style} />
    ));
  }

  function Wrapper(props) {
    return (
      <div style={{ height: "100%" }}>
        <div style={{ marginTop: 30, display: "flex", height: "100%", }}>
          <div style={{ width: "15em", paddingRight: 30, height: "100%", }}>{props.children}</div>

        </div>
      </div>
    );
  }

  return (
    <Wrapper>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={100}
        duration={3}
        easingFunction={easeQuadInOut}
      >
        {percentage => (
          <CircularProgressbarWithChildren
            value={percentage}
            background
            backgroundPadding={2}
            styles={buildStyles({
              pathTransition: "none",
              backgroundColor: "#FFFFFF",
              strokeLinecap: "butt"
            })}
          >
            <RadialSeparators
              count={36}
              style={{
                background: "#fff",
                width: "17px",
                height: `${14}%`
              }}
            />
            <p style={{ margin: "0", fontSize: "4em", fontWeight: "900", background: "linear-gradient(90deg, #102b51, #0169f9)", WebkitBackgroundClip: "text", color: "transparent" }}><strong>{Math.round(value * percentage / 100)}K</strong></p>
            <p style={{ display: "flex", justifyContent: "center", textAlign: "center", fontSize: "0.8em", margin: "0", width: "50%" }}>{text}</p>
          </CircularProgressbarWithChildren>
        )}
      </AnimatedProgressProvider>
    </Wrapper>
  )
}

export default CircularProgressBar;
