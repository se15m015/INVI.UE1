var dsv = d3.dsv(";","text/plain");
        dsv("cars.csv", function(data) {
            var originLookup = ["","USA", "Europe", "Japan"];
            return {
                "Acceleration": +data["Acceleration"].replace(",","."),
                "Cylinders": +data["Cylinders"].replace(",","."),
                "Engine displacement": +data["Engine displacement"].replace(",","."),
                "Horsepower": +data["Horsepower"].replace(",","."),
                "Miles per gallon": +data["Miles per gallon"].replace(",","."),
                "Model year": +data["Model year"].replace(",",".") +1900,
                "Name": data["Name"],
                "Origin": originLookup[+data["Origin"].replace(",",".")],
                "Vehicle weight": +data["Vehicle weight"].replace(",",".")
            }; 
            }, function(error, rows) {
                if(error)
                    console.log(error);
            //https://gist.github.com/jfreels/6814721
              var columns = d3.keys(rows[0]);
              var table = d3.select("body").append("table");
              var thead =  table.append("thead");
              var tbody = table.append("tbody");
               
              thead.append("tr")
	            .selectAll("th")
	            .data(columns)
	            .enter()
	            .append("th")
	            .text(function (d) { return d });
	            
	        var tableRows = tbody.selectAll("tr")
	            .data(rows)
	            .enter()
	            .append("tr");
                
              var cells = tableRows.selectAll("td")
	            .data(function(row) {
	    	        return columns.map(function (column) {
	    		    return { column: column, value: row[column] }
	                })
                    })
                    .enter()
                    .append("td")
                    .text(function (d) { return d.value })  
              /*
              tableRows.selectAll("td").data(d3.values(rows[1])).enter().append("td");
              */
                console.log();
            });
        /*
                    table.append("thead").append("tr").selectAll("th").data(d3.keys(rows[0])).enter().append("th").text(function(d){return d;});
              var tableRows = table.append("tbody").selectAll("tr").data(rows).enter().append("tr");
              tableRows.selectAll("td").data(d3.values(rows[1])).enter().append("td");
        
            var dataset = [ 5, 10, 15, 20, 25 ];
            
            d3.select("body").selectAll("p")
                .data(dataset)
                .enter()
                .append("p")
                .text(function(d){return "paragraph: "+d;})
                .style("color", function(d) {
                    if (d > 15) {   //Threshold of 15
                        return "red";
                    } else {
                        return "black";
                    }
                });
    */
