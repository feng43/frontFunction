/**
 *
 * @desc 格式化日期到年月日时分秒
 * @param  {String} time
 * @return {String}
 */
function dayTransfer(obj){
	if(obj){
		var datetime = new Date(obj);
		var year = datetime.getFullYear();
		var month = datetime.getMonth()+1;
		var date = datetime.getDate();
		var hour = datetime.getHours();
		var min = datetime.getMinutes();
		var sec = datetime.getSeconds();

		//个位数补0
		if(month < 10){
			month = "0" + month;
		};
		if(date < 10){
			date = "0" + date;
		};
		if(hour < 10){
			hour = "0" + hour;
		};
		if(min < 10){
			min = "0" + min;
		};
		if(sec < 10){
			sec = "0" + sec;
		};


		var result = year+"-"+month+"-"+date+" "+hour+":"+min+":"+sec;

		return result;
	};
};
module.exports = dayTransfer;