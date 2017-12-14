/**
 *
 * @desc 获取几天前日期,n为数字,返回距离今天n天前的日期
 * @param  {Number}  n
 * @return {String}
 */
function getBeforeDate(n) {
	var n = n;
	var d = new Date();
	var year = d.getFullYear();
	var mon = d.getMonth() + 1;
	var day = d.getDate();
	if (day <= n) {
		if (mon > 1) {
			mon = mon - 1;
		}
		else {
			year = year - 1;
			mon = 12;
		}
	}
	d.setDate(d.getDate() - n);
	year = d.getFullYear();
	mon = d.getMonth() + 1;
	day = d.getDate();
	s = year + "-" + (mon < 10 ? ("0" + mon) : mon) + "-" + (day < 10 ? ("0" + day) : day);
	return s;
};
module.exports = getBeforeDate;
