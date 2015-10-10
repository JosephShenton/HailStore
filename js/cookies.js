function createCookie(name,value,type) {
									$$('input[name="layout-radio"]').on('change', function () {
										if (this.checked) {
										$$('.view').removeClass('layout-dark layout-default layout-white');
										$$('.view').addClass(this.value);
										}
									});
									
									$$('input[name="theme-radio"]').on('change', function () {
										if (this.checked) {
										$$('.view').removeClass('theme-lightblue theme-blue theme-yellow');
										$$('.view').addClass(this.value);
										}
									});
								index.html
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
