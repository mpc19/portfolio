const url = 'https://cors-anywhere.herokuapp.com/https://www.cameroncountytx.gov/spacex/'

fetch(url)
  .then(response => response.text())
  .then(html => {
    console.log("loading");
    const closures = [];
    const tableRows = jQuery(html).find('table').find('tr');
    console.log("tables " + tableRows + ", size: " + tableRows.length);
    tableRows.each(function () {
            console.log("table");
      const row = $(this);
      const date = row.find('td').eq(0).text().trim();
      const time = row.find('td').eq(1).text().trim();
      const duration = row.find('td').eq(2).text().trim();
      const reason = row.find('td').eq(3).text().trim();
      if(date.length > 0 && !reason.includes("Canceled") && !reason.includes("Concluded") && reason != "") {
        console.log("Found a " + date + " closure on the " + time + ", for " + duration + ". Reason: " + reason);
        closures.push({
          date,
          time,
          duration,
          reason
        });
      }
    });

    const closuresDiv = document.getElementById("container");
    const opening = document.createElement("h2");
    opening.appendChild(document.createTextNode("SpaceX Closures (" + closures.length + " active)"));
    opening.classList.add("text-light");
    closuresDiv.appendChild(opening);

    if(closures.length > 0) {

      closures.forEach(i => {
        const closureParagraph = document.createElement("p");
        const closureText = document.createTextNode("Closure for " + i.date + " on " + i.time + " for " + i.duration + ". Reason: " + i.reason);
        closureParagraph.classList.add("text-light");
        closureParagraph.appendChild(closureText);
        closuresDiv.appendChild(closureParagraph);
      });
    } else {
      const none = document.createElement("p");
      none.classList.add("text-light");
      none.appendChild(document.createTextNode("No closures scheduled."));
      closuresDiv.appendChild(none);
    }

}).catch(() => {
  const closuresDiv = document.getElementById("container");
  const opening = document.createElement("h3");
  opening.appendChild(document.createTextNode("Error while loading closures. Read below."));
  opening.classList.add("text-light");
  closuresDiv.appendChild(opening);

  const instructions = document.createElement("p");
  instructions.classList.add("text-light");
  instructions.appendChild(document.createTextNode("Open cors-anywhere.herokuapp.com and click on request temporary access."));
  closuresDiv.appendChild(instructions);
});