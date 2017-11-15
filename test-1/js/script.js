// function randomColor() {
//   var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
//     (Math.floor(Math.random() * 256)) + ',' +
//     (Math.floor(Math.random() * 256)) + ')';
//
//   return color;
// }

const boxes = document.querySelectorAll(".column");
const colors = [
  "rgb(61, 201, 64)",
  "rgb(195, 66, 11)",
  "rgb(162, 9, 84)",
  "rgb(180, 130, 24)",
  "rgb(90, 21, 120)",
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 127, 255)",
  "rgb(255, 255, 127)"
]

boxes.forEach((element, i) => {
  element.innerText = i + 1;
  element.style.backgroundColor = colors[0];
});


class Squares {
  constructor(boxes, colors) {
    this.addClickHandler(boxes, colors)
  }

  increment(index, colors) {
    if (arguments.length === 2) {
    return (index > 12) ? colors[0] : colors[index + 1];
    } else {
    return (index > 7) ? 1 : index;
    }
  }

  changeNumber(i, boxes) {
    console.log("Running changeNumber function");
    for (var a = i; a >= 0; a--) {
      const index = parseInt(boxes[a].innerText) + 1;
      boxes[a].innerText = this.increment(index)
    }
  }

  changeColor(i, boxes, colors) {
    console.log("Running changeColor function");
    for (var a = i; a >= 0; a--) {
      let style = window.getComputedStyle(boxes[a]);
      let index = colors.indexOf(style.backgroundColor);
      boxes[a].style.backgroundColor = this.increment(index, colors)
      console.log(boxes[a].style.backgroundColor)
      console.log(style.backgroundColor, index);
    }
  }

  addClickHandler(boxes, colors) {
    boxes.forEach((box, i) => {
      box.addEventListener("click", evt => {
        this.changeNumber(i, boxes);
        this.changeColor(i, boxes, colors);
      })
    })
  }
}


let squares = new Squares(boxes, colors);
