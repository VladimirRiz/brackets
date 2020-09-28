module.exports = function check(str, bracketsConfig) {
    if (str.length % 2) return false;
    let s = str.split("");

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                s[i] === bracketsConfig[j][0] &&
                s[i + 1] === bracketsConfig[j][1]
            ) {
                s.splice(i, 2);
                i -= 2;
            }
        }
    }
    return !s.length;
};

// check = (str, bracketsConfig) => {
//     if (str.length % 2) return false;
//     // const flatSingle = (arr) => [].concat(...arr),
//     // arr = flatSingle(bracketsConfig);

//     let s = str.split("");

//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < bracketsConfig.length; j++) {
//             // console.log(s[i], arr[j]);
//             if (
//                 s[i] === bracketsConfig[j][0] &&
//                 s[i + 1] === bracketsConfig[j][1]
//             ) {
//                 // console.log(s[i], s[i + 1], "w", arr[j], arr[j + 1]);
//                 s.splice(i, 2);
//                 i -= 2;
//             }
//         }
//     }
//     // console.log(s);
//     // return s.length % 2;
//     return !s.length;
// };

// console.log(
//     check(
//         "8888877878887777777888888887777777887887788788887887777777788888888887788888",
//         [
//             ["1", "2"],
//             ["3", "4"],
//             ["5", "6"],
//             ["7", "7"],
//             ["8", "8"],
//         ]
//     )
// );
