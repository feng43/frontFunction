/**
 * @desc   密码强度必需包含大小写,字母与数字,长度在8-10位
 * @param  {String}  str
 * @return {Boolean}
 */
function isPwdComplex(str) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/.test(str);
}

module.exports = isPwdComplex;