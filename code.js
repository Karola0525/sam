var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5139fc7b-c2a8-497d-936d-dbc027e0d317","a59987ba-a1b5-4c77-b1ab-4cb21c8a8182","c29cc71e-2a6d-4558-906a-95981fee96fc"],"propsByKey":{"5139fc7b-c2a8-497d-936d-dbc027e0d317":{"name":"sam","categories":["faces"],"frameCount":1,"frameSize":{"x":282,"y":391},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:03:07 UTC","pngLastModified":"2021-01-05 19:03:38 UTC","version":"0axN3iBEMlHDrHZLJ1cpNnuGmlPSl11_","sourceUrl":"assets/api/v1/animation-library/gamelab/0axN3iBEMlHDrHZLJ1cpNnuGmlPSl11_/category_faces/pupilportrait_02.png","sourceSize":{"x":282,"y":391},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/0axN3iBEMlHDrHZLJ1cpNnuGmlPSl11_/category_faces/pupilportrait_02.png"},"a59987ba-a1b5-4c77-b1ab-4cb21c8a8182":{"name":"sam2","categories":["faces"],"frameCount":1,"frameSize":{"x":391,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:03:12 UTC","pngLastModified":"2021-01-05 19:03:23 UTC","version":"Emki3cuQFXCrsIwVW0u.PU8WUzgaPiH1","sourceUrl":"assets/api/v1/animation-library/gamelab/Emki3cuQFXCrsIwVW0u.PU8WUzgaPiH1/category_faces/gameplayfaces_03.png","sourceSize":{"x":391,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/Emki3cuQFXCrsIwVW0u.PU8WUzgaPiH1/category_faces/gameplayfaces_03.png"},"c29cc71e-2a6d-4558-906a-95981fee96fc":{"name":"car","categories":["faces"],"frameCount":4,"frameSize":{"x":82,"y":130},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:03:06 UTC","pngLastModified":"2021-01-05 19:03:11 UTC","version":"yl79lY115MZwICn31CotYGmQk8drYotK","sourceUrl":"assets/api/v1/animation-library/gamelab/yl79lY115MZwICn31CotYGmQk8drYotK/category_faces/bubbly.png","sourceSize":{"x":82,"y":520},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/yl79lY115MZwICn31CotYGmQk8drYotK/category_faces/bubbly.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//actividad de la Miss
calle1=createSprite(190,120,420,3);
calle2=createSprite(190,260,420,3);
var car1=createSprite(100,130,10,10);
car1.setAnimation("car")
car1.scale=0.3
var car2=createSprite(215,130,10,10);
car2.setAnimation("car")
car2.scale=0.3
var car3=createSprite(165,250,10,10);
car3.setAnimation("car")
car3.scale=0.3
var car4=createSprite(270,250,10,10);
car4.setAnimation("car")
car4.scale=0.3
var life=0;

sam=createSprite(20,190,13,13)
sam.setAnimation("sam")
sam.scale=0.1

//actividad del alumno
car1.velocityY=8;
car2.velocityY=8;
car3.velocityY=-8;
car4.velocityY=-8;
function draw() {
  background("white")
  textSize(20);
  text("Vidas "+life, 150, 30);
  fill("yellow");
  noStroke();
  rect(0, 120, 52, 140);
 fill("lightblue");
 noStroke();
 rect(345, 120, 52, 140);
 
   
  
  
  // crear muros para los carros
  car1.bounceOff(calle1);
  car1.bounceOff(calle2);
  car2.bounceOff(calle1);
  car2.bounceOff(calle2);
  car3.bounceOff(calle1);
  car3.bounceOff(calle2);
  car4.bounceOff(calle1);
  car4.bounceOff(calle2);
  // movimiento para sam
  if (keyDown("right")) {
    sam.x=sam.x+2;
  }
  if (keyDown("left")) {
    sam.x=sam.x-2;
  }
  // sam regresa si un carro lo toca 
  if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)|| sam.isTouching(car4)) {
    sam.x=20;
    sam.y=190
    life=life+1;
    
  }
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
