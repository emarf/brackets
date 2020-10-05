module.exports = function check(str, bracketsConfig) {

    let joinBracketsConfig = bracketsConfig.join(' ').replace(/,/g, '').split(' ').reverse();
    joinBracketsConfig.map(item => { // go through each element of the array(use like counter)
        for (let i = 0; i < joinBracketsConfig.length; i++) {
            while (str.includes(joinBracketsConfig[i])) {
                str = str.replace(joinBracketsConfig[i], '');
                console.log(str);
            }
        }
    })

    return (str === '') ? true : false;
}
