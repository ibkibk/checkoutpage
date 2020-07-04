// let timer = 60;
// let hour = min*60;
// let min = second*60;
// let sec = 1000;

// let startTimer = () => {
//   hour = parseInt((24 * timer) / 60);
//   min = parseInt(timer / 60);
//   sec = parseInt(timer % 60);
//   if (timer < 0) {
//     alert("TIME IS UP");
//     return;
//   }

//   document.getElementById("time").innerHTML =
//     "<b>Time</b>" +
//     " " +
//     hour.toString() +
//     "" +
//     min.toString() +
//     " : " +
//     sec.toString();
//   timer--;

//   setTimeout(function () {
//     startTimer();
//   }, 1000);
// };

// startTimer();

// var countDownDate = new Date("July 6, 2020 21:50:25").getTime();

// var x = setInterval(function () {
//   var now = new Date().getTime();

//   var distance = countDownDate - now;

//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("demo").innerHTML =
//     hours + "h " + minutes + "m " + seconds + "s ";

//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
// setInterval(function time() {
//   var d = new Date();
//   var hours = 24 - d.getHours();
//   var min = 60 - d.getMinutes();
//   if ((min + "").length == 1) {
//     min = "0" + min;
//   }
//   var sec = 60 - d.getSeconds();
//   if ((sec + "").length == 1) {
//     sec = "0" + sec;
//   }
//   $("p").html(hours + ":" + min + ":" + sec);
// }, 1000);
