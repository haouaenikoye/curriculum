function displayInfo(name)
{
    var parent = document.getElementById(name);
    parent.style.display="block";
    document.getElementById('player').style.display = "none";
    document.getElementById('role').style.display = "none";
    var children = parent.children;
    for(i=0;i<children.length;i++)
    {
    	if(children[i].className == "detailContent")
    	{
    		if (children[i].offsetHeight < children[i].scrollHeight)
    		{
    			for(j=0;j<children.length;j++)
    			{
    				if(children[j].className == "detailScroller")
    				{
    					children[j].style.display="block";
    				}
    			}
    		}
    	}
    }
}
function hideInfo(name)
{
    document.getElementById(name).removeAttribute("style");
    document.getElementById('player').style.display = "block";
    document.getElementById('intelligence').style.display = "block";
    document.getElementById('intelligence').style.top = "";
}
function lunch()
{
    window.alert("!!!The stingray ate your maison!!!");
}
function startGame(){
	document.getElementsByClassName('printer')[0].style.display="block";
    document.getElementById('howToBG').style.display ="none";
    init();
};
    
function init() {
	if (window.Event) {
	document.captureEvents(Event.MOUSEMOVE);
	}
	document.onmousemove = getCursorXY;
	document.click = getCursorXY;
}

function getCursorXY(e) {
	if($(window).innerWidth() >= 500)
	{
	    var player = document.getElementById('playerMover');
	    var halfheight = ($('#playerMover').height())/2;
	    var halfwidth = ($('#playerMover').width()) / 2;
	    var mouseX = ((window.Event) ? e.pageX : event.clientX);
		var mouseY = ((window.Event) ? e.pageY : event.clientY);
		var guideX = $('#playerMover').position().left + halfwidth;
		var guideY = $('#playerMover').position().top + halfheight;
		var deltaY = mouseY - guideY;
		var deltaX = mouseX - guideX;
		var radians = Math.atan2(deltaX,deltaY);
	    var degree = (radians * (180 / Math.PI) * -1) + 90;
	    document.getElementById('playerRotator').style.transform = "rotate(" + degree + "deg)";
		player.style.left = (((window.Event) ? e.pageX : event.clientX) - halfwidth) +'px';
		player.style.top = (((window.Event) ? e.pageY : event.clientY) - halfheight) +'px';
		var intelligence = document.getElementById('intelligenceMover');
	    var halfheight = ($('#intelligenceMover').height())/2;
	    var halfwidth = ($('#intelligenceMover').width()) / 2;
	    var intelligenceX = $('#intelligenceMover').position().left + halfwidth;
	    var intelligenceY = $('#intelligenceMover').position().top + halfheight;
	    var deltaY = mouseY - intelligenceY;
	    var deltaX = mouseX -intelligenceX;
	    var radians = Math.atan2(deltaX,deltaY);
	    var degree = (radians * (180 / Math.PI) * -1) + 90;
	    document.getElementById('intelligenceRotator').style.transform = "rotate(" + degree + "deg)";
	    intelligence.style.left = (((window.Event) ? e.pageX : event.clientX) - halfwidth) +'px';
	    intelligence.style.top = (((window.Event) ? e.pageY : event.clientY) - halfheight) +'px';
	    if($(window).innerWidth() >= 600){
	    	$('#body').ripples({dropRadius:10,perturbance:0.005,imageURL:"teletherapie.jpeg",resolution:450});
	    }
	}
};
function moveBubbles(){
    var bubbles = document.getElementsByClassName("bubbles");
    var i;
    var bubbleX = $('.bubbles').width();
    var bubbleY = $('.bubbles').height();
    var maxX = $('body').width() - bubbleX;
    var maxY = $('body').height() - bubbleY;
    for(i = 0; i < (bubbles.length); i++)
    {
        bubbles[i].style.top = (Math.floor(Math.random() * maxY) + 0) + "px";
        bubbles[i].style.left = (Math.floor(Math.random() * maxX) + 0) + "px";
        bubbles[i].style.display = "block";
    }
}
function moverole(){
    var role = document.getElementsByClassName("role");
    var i;
    var roleX = $('.role').parent().parent().width();
    var roleY = $('.role').parent().parent().height();
    var halfheight = ($('.role').parent().parent().height())/2;
    var halfwidth = ($('.jrole').parent().parent().width()) / 2;
    var maxX = $('body').width() - roleX;
    var maxY = $('body').height() - roleY;
    for(i = 0; i < (role.length); i++)
    {
        var currentX = $('.role').parent(i).parent(i).position(i).left;
	    var currentY = $('.role').parent(i).parent(i).position(i).top;
        var randX = (Math.floor(Math.random() * maxY) + 0);
        var randY = (Math.floor(Math.random() * maxX) + 0);
        var deltaX = (randX - currentX);
        var deltaY = (randY - currentY);
        var radians = Math.atan2(deltaX,deltaY);
        var degree = (radians * (180 / Math.PI) * -1) + 90;
        role[i].parentElement.style.transform = "rotate(" + (degree) + "deg)";
        role[i].parentElement.parentElement.style.top = randX + "px";
        role[i].parentElement.parentElement.style.left = randY  + "px";
        role[i].parentElement.parentElement.style.display = "block";
    }
}
function flashReturn(){
	var element = document.getElementsByClassName('return');
	for(i=0;i<element.length;i++)
	{
		if(element[i].style.backgroundColor == "yellow")
		{
			element[i].style.backgroundColor = "";
		}
		else
		{
			element[i].style.backgroundColor = "yellow"
		}
	}
}
function snackbar(detail,timeout){
	var container = document.getElementById('snackbarContainer');
	var snackbar = document.getElementById('snackbar');
	if(container.style.display == "none")
	{
		container.style.display = "block";
		setTimeout(function(){container.style.display = "none";},timeout);
	}
	else
	{
		container.style.display = "none";
	}
	snackbar.innerText = detail;
}