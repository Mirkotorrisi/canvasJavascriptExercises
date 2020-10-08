import Sketch from "react-p5";
import React from 'react';
import * as p5Lib from "p5";
import a from './assets/a.png'
import b from './assets/b.png'
import c from './assets/c.png'
import d from './assets/d.png'
import e from './assets/e.png'
import i from './assets/i.png'
import n from './assets/n.png'
import o from './assets/o.png'
export default (props) => {
    const width = 320;
    const height = 480;
    
    let colorBlue = 0;
    let changeColor = false;

    //Length of floor
    //let baseLength;
    // Variables related to moving ball
    let position;
    let velocity;
    let r = 6;
    let speed = 3.5;
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(500, 500).parent(canvasParentRef);
        position = p5.createVector(width / 2, 0);

        //calculate initial random velocity
        velocity = p5Lib.Vector.random2D();
        velocity.mult(speed);
    };
    
    const setupImg = (p5, x,y, stringToShow) =>{
      p5.loadImage(a, img =>{
        p5.image(img,x,y)
        p5.imageMode(p5.CENTER)
        p5.tint(Math.floor(Math.random()*10+100),30,colorBlue);
        if(colorBlue > 255 || colorBlue < 0){
          changeColor = !changeColor
        }

        if(!changeColor)
            colorBlue++
        
          else
          colorBlue--;
      })
    }
    const draw = (p5) => {

        p5.fill(0, 100);
        p5.noStroke();
        
        p5.rect(0, 0, 500, 500);
        background(200);
  p5.rectMode(CENTER);
  p5.translate(width / 2, height / 2);
  p5.translate(p5Lib.Vector.fromAngle(p5.millis() / 1000, 40));
  p5.rect(0, 0, 20, 20);

        //draw ellipse
        setupImg(p5, position.x, position.y)
        setupImg(p5, position.x+150, position.y+50)
        setupImg(p5, position.x+20, position.y+40)
          ;
        //move ellipse
        position.add(p5.createVector(velocity.x, velocity.y));

        //normalized incidence vector
        let incidence = p5Lib.Vector.mult(velocity, -1);
        incidence.normalize();

      //}

  // detect boundary collision
  // right
  if (position.x > width - 25) {
    position.x = width - 25;
    velocity.x *= -1;
  }
  // left
  if (position.x < 10) {
    position.x = 10;
    velocity.x *= -1;
  }
  // top
  if (position.y < 20) {
    position.y = 20;
    velocity.y *= -1;
  }
  if (position.y > height - 20) {
      position.y = height - 20;
      velocity.y *= -1;
}
    }
    return <Sketch setup={setup} draw={draw} />;
};