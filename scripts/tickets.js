function generateTickets(){
var numberOfTickets = document.getElementById("NumberOfTickets").value;
var ticketTitle = document.createElement("h2");
ticketTitle.setAttribute("id","ticketTitle");
ticketTitle.innerHTML = "<i>Total HOUSIE Tickets : " + numberOfTickets +"</i>";

var ticketDivision = document.getElementById("tickets");
ticketDivision.appendChild(ticketTitle);

var list = document.createElement("ul");
list.setAttribute("id", "ticketList");
list.setAttribute("style","list-style-type:none");
list.setAttribute("class", "mid row");

for(i=1;i<=numberOfTickets;i++){
	var ticket = document.createElement("li");
	ticket.setAttribute("class","row")

    var table = document.createElement("table");
    table.setAttribute("id","table"+i);
    table.setAttribute("class","col-md-4 ticketSize table table-bordered table-dark");

    var headRow = document.createElement("tr");
    var headcol = document.createElement("td");
    headcol.setAttribute("colspan","5");
	headcol.innerHTML = "Ticket Number : "+i;
	headRow.appendChild(headcol);
	table.appendChild(headRow);
    
    for(j=1;j<=3;j++){
    	var row = document.createElement("tr");
		row.setAttribute("id","row"+j);

    	for(k=1;k<=5;k++){
    		var col = document.createElement("td");
    		col.setAttribute("id","col"+k);
    		col.innerHTML = Math.floor(Math.random() * 100) + 1;
    		row.appendChild(col);
    	}

    	table.appendChild(row);
    }
    ticket.appendChild(table);
    list.appendChild(ticket);
   
}
var mid = document.createElement("center");
mid.appendChild(list);
ticketDivision.appendChild(mid);

$("#NumberOfTickets").hide();
$("#ticketNumberSubmitButton").hide();

var play = document.createElement("Button");
play.setAttribute("id","playButton");
play.setAttribute("onClick","moveToFooter()");
play.setAttribute("class","playButton")
play.innerHTML = "Play";
document.getElementById("playArea").appendChild(play);

}