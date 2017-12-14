/**
 * @desc   判断是否为手机号,国内 13、15、18开头
 * @param  {String}  str
 * @return {Boolean}
 */
function isMobile(str) {
    return /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(str);
}

module.exports = isMobile;