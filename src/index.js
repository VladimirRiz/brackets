module.exports = function check(str, bracketsConfig) {
    if (str.length % 2) return false;
    let s = str.split("");

    for (let i = 0; i < s.length; i++) {
        bracketsConfig.forEach((x) => {
            {
                if (s[i] === x[0] && s[i + 1] === x[1]) {
                    s.splice(i, 2);
                    i -= 2;
                }
            }
        });
    }
    return !s.length;
};

check = (str, bracketsConfig) => {
    if (str.length % 2) return false;
    let s = str.split("");

    for (let i = 0; i < s.length; i++) {
        bracketsConfig.forEach((x) => {
            {
                if (s[i] === x[0] && s[i + 1] === x[1]) {
                    s.splice(i, 2);
                    i -= 2;
                }
            }
        });
    }
    return !s.length;
};

console.log(check("()", [["(", ")"]]));
