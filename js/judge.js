var user="";
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf( 'iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    func1();   
    user="phone";

} else {
    func2();
    user="pc";
    alert('PC')
}