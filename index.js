/**
  * 関数: useAgent
  * 説明: ユーザーエージェントを判定し、デバイスの種類を返す
  * @return(戻り値) {String} 'mobile' | 'tablet' | 'pc' | 'unknown'
*/
function useAgent() {
    var agent = navigator.userAgent;
    var iphone = /iPhone/i;
    var ipad = /iPad/i;
    var android = /Android/i;
    var windows = /Windows Phone/i;
    var mobile = /Mobile/i;
    var pc = /Windows NT|Macintosh/i;
    var result = '';
    if (iphone.test(agent)) {
        result = 'mobile';
    }
    else if (ipad.test(agent)) {
        result = 'tablet';
    }
    else if (windows.test(agent)) {
        result = 'mobile';
    }
    else if (android.test(agent)) {
        if (mobile.test(agent)) {
            result = 'mobile';
        }
        else {
            result = 'tablet';
        }
    }
    else if (pc.test(agent)) {
        result = 'pc';
    }
    else {
        result = 'unknown';
    }
    return result;
}
console.log(useAgent());
// export {useAgent};
