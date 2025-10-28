/**
  * 関数: useAgent
  * 説明: ユーザーエージェントを判定し、デバイスの種類を返す
  * @return(戻り値) {String} 'mobile' | 'tablet' | 'pc' | 'unknown'
*/

function useAgent (): string {
  const agent: string = navigator.userAgent;
  const iphone: RegExp = /iPhone/i;
  const ipad: RegExp = /iPad/i;
  const android: RegExp = /Android/i;
  const windows: RegExp = /Windows Phone/i;
  const mobile: RegExp = /Mobile/i;
  const pc: RegExp = /Windows NT|Macintosh/i;

  let result: string = '';

  if ( iphone.test( agent ) ) {
    result = 'mobile';
  } else if ( ipad.test( agent ) ) {
    result = 'tablet';
  } else if ( windows.test( agent ) ) {
    result = 'mobile';
  } else if ( android.test( agent ) ) {
    if ( mobile.test( agent ) ) {
      result = 'mobile';
    } else {
      result = 'tablet';
    }
  } else if ( pc.test( agent ) ) {
    result = 'pc';
  } else {
    result = 'unknown';
  }

  return result;
}

console.log( useAgent() );

// export {useAgent};