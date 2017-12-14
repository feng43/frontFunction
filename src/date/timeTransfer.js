/**
 *
 * @desc 格式化日期到年月日
 * @param  {String} time
 * @return {String}
 */
function timeTransfer(time){
    if(time){
        var datetime = new Date(time);
        var year = datetime.getFullYear();
        var month = datetime.getMonth()+1;
        var date = datetime.getDate();

        //个位数补0
        if(month < 10){
            month = "0" + month;
        };
        if(date < 10){
            date = "0" + date;
        };
        var result = year+"-"+month+"-"+date;
        return result;
    }
};
module.exports = timeTransfer;