function fun(n) {
	for(var i = 1; i < 5; i++) {
		var book = document.getElementById("book" + i);
		book.style.display = "none";
	}
	for(var a = 1; a < 5; a++) {
		var aa = document.getElementById("s" + a);
		aa.style.border = "1px #cccccc solid";
	}
	var books = document.getElementById("book" + n);
	books.style.display = "block";
	var s = document.getElementById("s" + n);
	s.style.borderBottom = "none";
}

var c = document.getElementById("bodyRightTopTxt");
var d = document.getElementById("bRTTxt1");
var z = document.getElementById("bRTTxt2");
d.style.height = c.offsetHeight + "PX";
z.style.height = c.offsetHeight + "PX";
z.innerHTML = d.innerHTML;
function fun1(e) {
	var dsq = window.setInterval("fun1()", 40);

	c.scrollTop++;
	if(c.scrollTop == d.offsetHeight) {
		c.scrollTop = 0;
	}
}
c.onmouseout = function() {
	window.clearInterval(dsq);

}
c.onmouseout = function() {
	dsq = window.setInterval("fun1()", 40);

}