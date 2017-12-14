/**
 *
 * @desc   此方法只能转义深度为1的json数据，多层json，将不能正确解析，请慎用
 * @param  {Object} obj
 * @return {String}
 */
/*function stringfyQueryString(obj) {
    if (!obj) return '';
    var pairs = [];

    for (var key in obj) {
        var value = obj[key];

        if (value instanceof Array) {
            for (var i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }

    return pairs.join('&');
}*/
function stringfyQueryString(obj) {

    var pairs = [];
    for(var p in obj){
        pairs.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return pairs.join("&");

};

module.exports = stringfyQueryString