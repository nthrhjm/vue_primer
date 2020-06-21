let button = document.getElementById("button");
let result = document.getElementById("result");
let count = 0;
button.addEventListener("click", function () {
  result.textContent = `ボタンを${++count}回クリックしました。`;
});
let field = document.getElementById("field");
field.addEventListener("keyup", function () {
  console.log(field.value.length + "文字入力しています。");
});
