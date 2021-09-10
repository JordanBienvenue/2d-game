// setting up the container
const app = new PIXI.Application({
  antialias: true,
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
  autoDensity: true,
  resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

// adding a element texture
const plane = PIXI.Sprite.from("./Assets/plane.png");
plane.anchor.set(0.5);

// placement
plane.x = app.screen.width / 4;
plane.y = app.screen.height / 2;

app.stage.addChild(plane);

app.ticker.add(() => {
  //   plane.x = 0.1;
  //   console.log(plane.x);
});
