function func(arg1, arg2) {
  console.log(arg1, arg2);
}
func(); //undefined undefined
func(1); //1 undefined
func(1, 2); //1 2
func(1, 2, 3, 4, 5); //1 2

function func2(arg1) {
  console.log(arg1);
  console.log(arg1.name);
  console.log(arg1.tel);
}
func2({ name: "hajime", address: "osaka" });

function showAlert() {
  alert("alert");
}

//残余引数
function getBattingAvarage(...args) {
  let add = (previous, current) => previous + current;
  return `確率: ${(args.reduce(add) / args.length) * 100}%`;
}

console.log(getBattingAvarage(2, 0));
console.log(getBattingAvarage(0, 0));
console.log(getBattingAvarage(1, 0, 0, 0));

//アロー関数
const allow1_logging = (text) => {
  console.log(text);
};
//引数が1つなら()を省略できる
const allow2_logging = (text) => {
  console.log(text);
};
allow1_logging("腹減った");
allow2_logging("眠たい");

let allow1_add = (num1, num2) => {
  return num1 + num2;
};
//関数の本体がreturn文のみの場合、{}とreturnを省略できる
let allow2_add = (num1, num2) => num1 + num2;

console.log(allow1_add(22, 33));
console.log(allow2_add(44, 55));
//オブジェクトリテラルを返す関数
//関数本体がreturn文だけなので{}とreturn は省略できる

//オブジェクトリテラルを返すアロー関数
allow_create = (sei, mei) => {
  return {
    name: `${mei} ${sei}`,
    address: "Osaka-shi",
  };
};
//{}とreturnを省略した、オブジェクトリテラルを返すアロー関数
//オブジェクトリテラルを表す{}を関数本体を囲む{}と区別するために{}を()で囲む必要がある
//()で囲まないとreturnが省略されたことにならないので想定していない動作になる
allow_create2 = (sei, mei) => ({
  name: `${mei} ${sei}`,
  address: "Osaka-shi",
});
console.log(allow_create("ojisan", "henna")); //{ name: 'henna ojisan', address: 'Osaka-shi' }
