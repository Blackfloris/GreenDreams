// function Car(name, color) {
//   this.name = name;
//   this.color = color;
// }
// Car.prototype.message = function () {
//   console.log(`${this.name} is ${this.color} color`);
// };
// Car.prototype.start = function () {
//   console.log(`${this.name} is start`);
// };
// const BMW = new Car("bmw", "red");
// const opel = new Car("opel", "black");
// for (let elem of document.body.children) {
//   console.log(elem);
// }

// for (let i of document.querySelectorAll("li")) {
//   let elem = i.textContent;
//   console.log(elem);
// }

// let div = document.createElement("div");
// div.className = "alert";
// div.innerHTML = "<div>ddddd</div>";
// document.body.append(div);
// setTimeout(() => div.remove(), 1000);
// function showNotification({ top = 0, right = 0, className, html }) {
//   let notification = document.createElement("div");
//   notification.className = "notification";
//   if (className) {
//     notification.classList.add(className);
//   }
//   notification.style.top = top + "px";
//   notification.style.right = right + "px";
//   notification.innerHTML = html;
//   document.body.append(notification);
//   setTimeout(() => notification.remove(), 1500);
// }
// let i = 1;
// setInterval(() => {
//   showNotification({
//     top: 10,
//     right: 10,
//     html: "Hello " + i++,
//     className: "welcome",
//   });
// }, 2000);

// class CircleBox {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }
//   show() {
//     this.$el.style.display = "block";
//   }
//   hide() {
//     this.$el.style.display = "block";
//   }
// }
// class CircleItem extends CircleBox {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = options.size + "px";
//     this.$el.style.height = options.size + "px";
//     this.$el.style.borderRadius = "50px";
//     this.$el.style.background = options.color;
//   }
// }
// const CircleRed = new CircleItem({
//   selector: "#circleRed",
//   color: "red",
//   size: 50,
// });
// class circleItem {
//   constructor(selector) {}
// }
// function Car(name, color) {
//   this.name = name;
//   this.color = color;
// }
// Car.prototype.message = function () {
//   console.log(`${this.name} is ${this.color}`);
// };
// Car.prototype.start = function () {
//   console.log(`${this.name} is start`);
// };
// const BMW = new Car("bwm", "red");
// const opel = new Car("opel", "green");

// // міксини:
// // поліфіли
