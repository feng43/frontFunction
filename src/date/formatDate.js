/**
 *
 * @desc   格式化日期,fmt格式可以为任何,比如:yyyy-MM-dd hh:mm:ss,连接符可以为任意
 * @param  {Date} date
 * @param  {String} fmt
 * @return {String}
 */
function formatDate(date, fmt) {
	// 正则匹配yyyy
	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	let o = {
		'M+' : date.getMonth() + 1,
		'dd+' : date.getDate(),
		'h+' : date.getHours(),
		'm+' : date.getMinutes(),
		's+' : date.getSeconds()
	};
	for(let k in o){
		if(new RegExp(`(${k})`).test(fmt)){
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
		};
	};
	return fmt;
};

// 补0
function padLeftZero(str) {
	return ('00' + str).substr(str.length);
};

module.exports = formatDate;