module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.map(item => item.join(''));
    let check;

    if (str.length % 2 !== 0) {
        return 0;
    } else {
        while (true) {
            check = false;
            bracketsConfig.forEach((item) => {
                if (str.includes(item)) {
                    str = str.replace(item, '');
                    check = true;
                }
            })
            if (!check) break;
        }

    }
    return str.length === 0 ? true : false;
}
