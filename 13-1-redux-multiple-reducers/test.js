// function wait(sec) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res();
//     }, sec);
//   });
// }

// async function main() {
//   for (let i = 0; i < 4; ++i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * (i + 1));
//   }
// }
// main();

// function wait(sec) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res();
//     }, sec);
//   });
// }
// async function main() {
//   await wait(1000);
//   console.log("Success");
// }
// main();
let input = "))";
// let s = input.split("\n");
// main(s);
// function main(s) {
//   for (let a = 0; a < s.length; a++) {
//     if (a === 549 - 1) {
//       console.log(s[a]);
//       console.log(isBalanced(s[a]));
//     }
//   }
// }
console.log(isBalanced(input));
function isBalanced(s) {
  let st = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") st.push(s[i]);
    else {
      if (st.length == 0) return "NO";
      else if (st[st.length - 1] == "(" && (s[i] == "]" || s[i] == "}")) {
        return "NO";
      } else if (st[st.length - 1] == "[" && (s[i] == ")" || s[i] == "}")) {
        return "NO";
      } else if (st[st.length - 1] == "{" && (s[i] == ")" || s[i] == "]")) {
        return "NO";
      }
      st.pop();
    }
  }
  if (st.length === 0) return "YES";
  else return "NO";
}
