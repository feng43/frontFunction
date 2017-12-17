/**
 * @desc   目标到目标页面缓动
 * @param  {Number}  B 目标位置  
 * @param  {Number}  rate 缓动速率  
 * @default 页面顶部, 4
 */
 function scroll(B, rate) {
    var doc = document.body.scrollTop ? document.body : document.documentElement;
    var A = doc.scrollTop;
    if ( A == B || typeof A != 'number' ) {
        return;
    };
    B = B || 0;
    rate = rate || 4;
    var step = function () {
        A = A + (B - A) / rate;

        /*if ( A < 1 && callback) {
            callback(B, true);
            return;
        };
        if( callback ) callback(A, false);*/

        // 临界判断，终止动画
        if (A < 1) {
            doc.scrollTop = 0;
            return;
        }
        doc.scrollTop = A;
        requestAnimationFrame(step);
    };
    step();
};
module.exports = scroll;