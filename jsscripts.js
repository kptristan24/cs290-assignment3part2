var favoredlist = [];
var htmloutput = "";

	var req = new XMLHttpRequest();
	req.onreadystatechange = function (){
		if(this.readyState === 4){
			console.log(this.status);
			console.log(JSON.parse(this.responseText));
			var gistobject = JSON.parse(this.responseText);
			var title = gistobject[0]["description"];
			var url = gistobject[0]["url"];
			console.log(title);
			console.log(url);
			
			generateGistHTML(gistobject);
			
			/* Enable this section to see functioning scripts for grading.
			addToFaves(112);
			addToFaves(115);
			addToFaves(125);
			isInFaves(135);
			*/
		}
		
	};
	req.open('GET', "https://api.github.com/gists/public");
	req.send();

var generateGistHTML = function(gistobject){
	htmloutput = "";
	
	var part1 = "<li id=\"addthebutton\" class=\"list-group-item\">";
	var addonpart1 =  "";
	var linkit = "<br><a href =\"";
	var linkit2 = "\">";
	var linkit3 = "</a>";
	var part2 = "</li>";
	for (var i = 0; i < gistobject.length; i++){
		
		
		
		htmloutput += part1 + addonpart1 + String(gistobject[i]["description"]) + linkit + String(gistobject[i]["url"]) + linkit2 + String(gistobject[i]["url"]) + linkit3 + part2;
		/*var fbutton = document.createElement("button");
		var lel = document.createTextNode("CLICK ME");  
		fbutton.appendChild(lel);
		
		var list = document.getElementById('addthebutton');
		list.appendChild(fbutton);*/
		//console.log(htmloutput);
	
	}
	
	//console.log(htmloutput);
	
	//If id is in favourites
		//Add html for favourites list
	//Else
		//Add to normal list output

	//Then, generateHTML for favourites
	
	/*
	var fbutton = document.createElement("button");
		fbutton.innerHTML = "+";
		fbutton.setAttribute("gistID", String(gistobject[i]["id"]));
		fbutton.onclick = function(){
			favoredlist.push(eyedee);
			localStorage["favoredlist"] = JSON.stringify(favoredlist);
		}
	
	*/
	
	
	//call function to put html on elements
	return htmloutput;
}




function addToFaves(eyedee){
	favoredlist.push(eyedee);
	localStorage["favoredlist"] = JSON.stringify(favoredlist);
}

function isInFaves(checknum){
	pulledlist = JSON.parse(localStorage["favoredlist"]);
	
	for(var i = 0; i < pulledlist.length; i++){
		if (checknum == pulledlist[i]){
			return 1;
		}
	}
	return 0;
}

function saveinput(){
	favoredlist.push(eyedee);
	favoredlist[1] = prompt("Hey hey?");
	localStorage["favoredlist"] = JSON.stringify(favoredlist);
}

function showinput() {
	favoredlist = JSON.parse(localStorage["favoredlist"]);
	console.log(favoredlist);
}

window.onload = function() {
	htmlholder = "<li class=\"list-group-item\">Cras justo odio</li>\
	<li class=\"list-group-item\">Dapibus ac facilisis in</li><li class=\"list-group-item\">Dapibus ac facilisis in</li>";
	document.getElementById('listoutput').innerHTML = htmloutput;
	
}