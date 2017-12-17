/**
 *
 * @desc   此方法只能转义深度为1的json数据，多层json，将不能正确解析，请慎用
 * @param  {Object} obj
 * @return {String}
 */
function stringfyQueryString(obj) {

    var pairs = [];
    for(var p in obj){
        pairs.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return pairs.join("&");

};

module.exports = stringfyQueryString