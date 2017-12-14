/**
 * @desc   判断身份证，可传入身份证位数，只限15与18
 * @param  {String}  str
 * @param  {Number}  n   default: 18
 * @return {Boolean}
 */
function isIdCard(str, n) {
	if( n && n === 15 ){
		return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(str);
	} else {
		return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(str);
	};
};

module.exports = isIdCard;