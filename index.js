document.addEventListener( 'DOMContentLoaded', () => {

  console.log(userAgent());


  function userAgent () {
    var agent = navigator.userAgent;

    var iphone = /iPhone/i;
    var ipad = /iPad/i;
    var windows = /windows phone/i;
    var android = /Android/i;
    var mobile = /Mobile/i;
    var result = '';


    if ( iphone.test( agent ) ) {
      result = 'mobile';
    } else if ( ipad.test( agent ) ) {
      result = 'tablet';
    } else if ( windows.test( agent ) ) {
      result = 'mobile';
    } else if ( android.test( agent ) ) {
      if ( mobile.test( agent ) ) {
        result = result = 'mobile';
      } else {
        result = 'tablet';
      }
    } else {
      result = 'desktop';
    }

    return result;
  }

} );


