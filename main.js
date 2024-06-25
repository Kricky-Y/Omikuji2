'use strict';
// idを指定する時は`♯`、クラスを指定する時は `.`を忘れない！

// 0~7より小さい数字(6.9999...)をランダムに発生させる。
// Math.random() * 7 
// 大吉 0
// 中吉 1
// 小吉 2
// 吉   3
// 末吉 4
// 凶   5
// 大凶 6

// 整数部分だけを表示する
// Math.floor()

// nはクリックイベントが発生するたびに、ブロックごとに破棄されて再代入されないので、constで定数を指定するのでよい。 (letで変数指定ではない)


// {
//   const btn = document.querySelector('#btn');
//   const result = document.querySelector('#result');


//   // 【書き方１　Switchを使って条件分岐】
//   btn.addEventListener ('click', () => {
//     // result.textContent = 'hit!';
//     const n = Math.floor(Math.random() * 7);
//     // result.textContent = n;
//     switch (n) {
//       case 0:
//         result.textContent = '大吉';
//         break;
//       case 1:
//         result.textContent = '中吉';
//         break;
//       case 2:
//         result.textContent = '小吉';
//         break;
//       case 3:
//         result.textContent = '吉';
//         break;
//       case 4:
//         result.textContent = '末吉';
//         break;
//       case 5:
//         result.textContent = '凶';
//         break;
//       case 6:
//         result.textContent = '大凶';
//         break;
//     }
//   });
// }


// 【書き方２　配列を使ってもっと短く書く】
// 定数を指定するときに.はいらない！ xxx const.btn

{
  const btn = document.querySelector('#btn');
  const result = document.querySelector('#result');

  btn.addEventListener('click', () => {
    // 結果を配列に格納しておく
    const results = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶'];
    const n = Math.floor(Math.random() * results.length);
    // 配列の要素数.lengthプロパティを使えば、要素が増えても数字は変えなくてよい

    result.textContent = results[n];
    // ｎが０の時は配列の０番目の要素、nが１の時は配列の１番目の要素といった具合に表示する。
  });
}


// 【11/24もう一回】
// 'use strict';
// {
//   const btn = document.querySelector('#btn')
//   const result = document.querySelector('#result')

//   btn.addEventListener('click', () => {
//     const results = ['大吉','中吉','小吉','吉','末吉','凶','大凶'];
//     const n = Math.floor(Math.random() * results.length);
//     result.textContent = results[n];
//   });
// }