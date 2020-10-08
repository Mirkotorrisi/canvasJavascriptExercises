import Sketch from "react-p5";
import React from "react";
import fontSource from "./assets/SourceSansPro-Regular.ttf";

export default (props) => {
  const width = 320;
  const height = 480;

  let colorBlue = 0;
  let changeColor = false;
  let positions = [];
  let velocities = [];
  let fontSize = 50;
  let speed = 3.5;
  let stringToshow = [];
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    let input = p5.createInput();
    input.position(20, 10);

    let button = p5.createButton("submit");
    button.position(input.x + input.width, 10);
    button.mousePressed(() => {
      let str = input.value().replace(/\s/g, "");
      stringToshow = str.split("");

      for (let i = 0; i < stringToshow.length; i++) {
        positions.push(
          p5.createVector(
            width - stringToshow.length * fontSize + (i * fontSize) / 2,
            input.y + input.height
          )
        );
      }
      //calculate initial random velocity
      for (let i = 0; i < stringToshow.length; i++) {
        let velocity = p5.createVector(Math.random(), Math.random());
        velocity.mult(speed);
        velocities.push(velocity);
      }
    });

    p5.textAlign(p5.CENTER);
    p5.textSize(fontSize);

    p5.loadFont(fontSource, (font) => {
      p5.textFont(font);
      p5.textSize(fontSize);
    });
  };

  const draw = (p5) => {
    p5.background(50, 0, 50, 50);
    p5.rectMode(p5.CENTER);
    for (let i = 0; i < positions.length; i++) {
      p5.text(stringToshow[i], positions[i].x, positions[i].y);
      p5.fill(
        Math.floor(Math.random() * (i + 1) * 255),
        (i * 100) / stringToshow.length,
        colorBlue
      );
      if (colorBlue > 255 || colorBlue < 0) {
        changeColor = !changeColor;
      }
      if (!changeColor) colorBlue++;
      else colorBlue--;
      positions[i].add(p5.createVector(velocities[i].x, velocities[i].y));
      //right
      if (positions[i].x > width) {
        positions[i].x = width;
        velocities[i].x *= -1;
      }
      // left
      if (positions[i].x < 10) {
        positions[i].x = 10;
        velocities[i].x *= -1;
      }
      // top
      if (positions[i].y < 20) {
        positions[i].y = 20;
        velocities[i].y *= -1;
      }
      //bottom
      if (positions[i].y > height) {
        positions[i].y = height;
        velocities[i].y *= -1;
      }
    }
  };
  return <Sketch setup={setup} draw={draw} />;
};
