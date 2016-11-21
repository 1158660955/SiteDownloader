/**
 * Created by Administrator on 2016/11/17 0017.
 */
module.exports = function (url) {
    return new Promise(function (ok, rej) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            ok(xhr.responseText);
        };
        xhr.onerror = function (e) {
            rej(e);
        };
        xhr.open("GET", url);
        xhr.send();
    });
};