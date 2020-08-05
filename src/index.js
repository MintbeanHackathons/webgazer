webgazer.showPredictionPoints(true);
webgazer.setRegression("ridge");

window.saveDataAcrossSessions = true;

function drawDot(x, y, color = "blue", r = "10px") {
  const dot = document.createElement("div");  
  dot.style.position = "absolute";
  dot.style.width = r;
  dot.style.height = r;
  dot.style.zIndex = "999999";
  dot.style.borderRadius = "500px";
  dot.style.backgroundColor = color;
  dot.style.left = x;
  dot.style.top = y;
  document.body.appendChild(dot);
}

// drawing calibration dots
const calDot = (x, y) => drawDot(x, y, "red", "20px");

calDot("50%", "0px");
calDot("95%", "0px");
calDot("95%", "50%");
calDot("95%", "95%");
calDot("50%", "95%");
calDot("1%", "95%");
calDot("1%", "50%");
calDot("1%", "0px");
calDot("50%", "50%");

webgazer
  .setGazeListener(function (data, elapsedTime) {
    if (data == null) {
      return;
    }

    drawDot(data.x + "px", data.y + "px");
  })
  .begin();
