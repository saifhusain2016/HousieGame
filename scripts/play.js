function moveToFooter(){
    var x = document.getElementById("tickets");
    x.setAttribute("class","footer");    
    getHousieTable();
    $("#playButton").hide();
}

function getHousieTable(){
	var div = document.getElementById("playArea");
	var table = document.createElement("table");
    table.setAttribute("id","HousiTable");
    table.setAttribute("class","col-md-4 table table-bordered housiTable");

    var headRow = document.createElement("tr");
    var headCol = document.createElement("td");
    headCol.setAttribute("colspan","10");
    var title = document.createElement("center");
	title.innerHTML = "<button id=\"housie\" onClick=\"housie()\"> ....HOUSIE TABLE....</button>";
	headCol.appendChild(title);
	headRow.appendChild(headCol);
	table.appendChild(headRow);
    
    for(j=0;j<10;j++){
    	var row = document.createElement("tr");
		row.setAttribute("id","row"+j);

    	for(k=1;k<=10;k++){
    		var col = document.createElement("td");
    		col.setAttribute("id","cell"+(j*10+k));
    		col.innerHTML = j*10+k;
    		row.appendChild(col);
    	}
    	table.appendChild(row);
    }
    div.appendChild(table);
}

var numbers = new Array(110);
console.log(numbers.length);
for(i=1;i<=100;i++){
numbers[i]=0;
}

function housie(){
	while(true){
		var index = Math.floor(Math.random()*100)+1;
		if(numbers[index]==0){
			var x = document.createElement("strike");
            var cell = document.getElementById("cell"+index);
            cell.setAttribute("class","circle strikeCell");
            x.innerHTML = "<b>"+cell.innerHTML+"</b>";
            cell.innerHTML = "";
            cell.appendChild(x);
            numbers[index]=1;
			break;
		}
	}
}