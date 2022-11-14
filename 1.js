const L1 = document.getElementsByClassName("L1")[0];
const L2 = document.getElementsByClassName("L2")[0];
const L3 = document.getElementsByClassName("L3")[0];
const L4 = document.getElementsByClassName("L4")[0];

const T1 = document.getElementsByClassName("T1")[0];
const T2 = document.getElementsByClassName("T2")[0];
const T3 = document.getElementsByClassName("T3")[0];

L2.addEventListener("click", () => {
  L1.children[0].innerText = "/ 01";

  L2.children[0].style.fontSize = "2.5rem";
  L2.children[0].style.color = "white";

  L3.children[0].style.fontSize = "21px";
  L3.children[0].style.color = "#ffffff9e";

  L4.children[0].style.fontSize = "21px";
  L4.children[0].style.color = "#ffffff9e";

  T1.style.display = "block";
  T2.style.display = "none";
  T3.style.display = "none";
});

L3.addEventListener("click", () => {
  L1.children[0].innerText = "/ 02";

  L2.children[0].style.fontSize = "21px";
  L2.children[0].style.color = "#ffffff9e";

  L3.children[0].style.fontSize = "2.5rem";
  L3.children[0].style.color = "white";

  L4.children[0].style.fontSize = "21px";
  L4.children[0].style.color = "#ffffff9e";

  T1.style.display = "none";
  T2.style.display = "block";
  T3.style.display = "none";
});

L4.addEventListener("click", () => {
  L1.children[0].innerText = "/ 03";

  L2.children[0].style.fontSize = "21px";
  L2.children[0].style.color = "#ffffff9e";

  L3.children[0].style.fontSize = "21px";
  L3.children[0].style.color = "#ffffff9e";

  L4.children[0].style.fontSize = "2.5rem";
  L4.children[0].style.color = "white";

  T1.style.display = "none";
  T2.style.display = "none";
  T3.style.display = "block";
});

// L4 이벤트 추가, L2 L3에 L4내용도 넣어야됨.
// T1~3쪽에 나오는 이펙트 추가해주기.

// L2.addEventListener("click", () => {
//   changeList(2);
// });
// L3.addEventListener("click", () => {
//   changeList(3);
// });
// L4.addEventListener("click", () => {
//   changeList(4);
// });

// function changeList(number) {
//   L1.children[0].innerText = `/ 0${number - 1}`;

//   for (let i = 2; i < 5; i++) {
//     if (number === i) {
//       let target = document.getElementsByClassName(`L${i}`)[0];
//       let target2 = document.getElementsByClassName(`T${i - 1}`)[0];

//       target.children[0].style.fontSize = "2.5rem";
//       target.children[0].style.color = "white";
//       target2.style.display = "block";
//     } else {
//       let target = document.getElementsByClassName(`L${i}`)[0];
//       let target2 = document.getElementsByClassName(`T${i - 1}`)[0];
//       target.children[0].style.fontSize = "21px";
//       target.children[0].style.color = "#ffffff9e";
//       target2.style.display = "none";
//     }
//   }
// }
