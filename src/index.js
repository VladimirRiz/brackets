module.exports = function check(str, bracketsConfig) {
    const arr = [];
    bracketsConfig.forEach((x) => {
        for (let i in x) {
            arr.push(x[i]);
        }
    });
    for (let i = 0; i < str.length; i++) {
        if (str[i] === arr[i]) {
            continue;
        } else return false;
    }
    return true;
};

const check = (str, bracketsConfig) => {
    const arr = [];
    bracketsConfig.forEach((x) => {
        for (let i in x) {
            arr.push(x[i]);
        }
    });
    for (let i = 0; i < str.length; i++) {
        if (str[i] === arr[i]) {
            continue;
        } else return false;
    }
    return true;
};

console.log(check("()", [["(", ")"]]));
