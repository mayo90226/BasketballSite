
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("teamsTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "desc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}



//Function to create the table displaying all stats.
function displayAllTeams() {
  const teamsContainer = document.getElementById('teamsContainer');
  teamsContainer.innerHTML = ''; // Clear existing content

  const teamDiv = document.createElement('div');
  teamDiv.classList.add('team');
  teamDiv.innerHTML = `
      <h2>Teams</h2>
      <div class="players">
          <table class="teamsTable" id="teamsTable" cellspacing="0" style="margin-top: 0.5%;">
  <colgroup>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
  </colgroup>
  <thead>
      <tr>
          <th onclick="sortTable(0)">Team</th>
          <th onclick="sortTable(1)">League</th>
          <th onclick="sortTable(2)"><div class="tooltip">Began</div></th>
          <th onclick="sortTable(3)">To</th>
          <th onclick="sortTable(4)">Years</th>
          <th onclick="sortTable(5)">G</th>
          <th onclick="sortTable(6)">W</th>
          <th onclick="sortTable(7)">L</th>
          <th onclick="sortTable(8)">%</th>
          <th onclick="sortTable(9)">Plyoff</th>
          <th onclick="sortTable(10)">Div</th>
          <th onclick="sortTable(11)">Conf</th>
          <th onclick="sortTable(12)">Champ</th>
          
      </tr>
  </thead>
  <tbody id="teamsTableBody">
  </tbody>`;
  teamsContainer.appendChild(teamDiv);
  console.log("loading all");
  teamNames.forEach((name, index) => {
      var teamsTableBody = document.getElementById("teamsTableBody");
      var currentTeam = teams.find(team => team.name === name);
      console.log(name);
      var newRow = document.createElement("tr");
      var teamData = document.createElement("td");
      var leagueData = document.createElement("td");
      var beganData = document.createElement("td");
      var toData = document.createElement("td");
      var yearsData = document.createElement("td");
      var gamesData = document.createElement("td");
      var winsData = document.createElement("td");
      var lossesData = document.createElement("td");
      var winlossData = document.createElement("td");
      var playoffsData = document.createElement("td");
      var divisionalsData = document.createElement("td");
      var conferencesData = document.createElement("td");
      var championshipsData = document.createElement("td");
      newRow.appendChild(teamData);
      newRow.appendChild(leagueData);
      newRow.appendChild(beganData);
      newRow.appendChild(toData);
      newRow.appendChild(yearsData);
      newRow.appendChild(gamesData);
      newRow.appendChild(winsData);
      newRow.appendChild(lossesData);
      newRow.appendChild(winlossData);
      newRow.appendChild(playoffsData);
      newRow.appendChild(divisionalsData);
      newRow.appendChild(conferencesData);
      newRow.appendChild(championshipsData);
      teamData.innerHTML = `${currentTeam.name}`;
      leagueData.innerHTML = `${currentTeam.league}`;
      beganData.innerHTML = `${currentTeam.beganYear}`;
      toData.innerHTML = `${currentTeam.untilYear}`;
      yearsData.innerHTML = `${currentTeam.untilYear-currentTeam.beganYear}`;
      gamesData.innerHTML = `${currentTeam.wins+currentTeam.lost}`;
      winsData.innerHTML = `${currentTeam.wins}`;
      lossesData.innerHTML = `${currentTeam.lost}`;
      winlossData.innerHTML = `${(currentTeam.wins/(currentTeam.wins+currentTeam.lost)).toFixed(3)}`;
      playoffsData.innerHTML = `${currentTeam.playoffs}`;
      divisionalsData.innerHTML = `${currentTeam.divisionals}`;
      conferencesData.innerHTML = `${currentTeam.conferences}`;
      championshipsData.innerHTML = `${currentTeam.championships}`;
      teamsTableBody.appendChild(newRow);
  });
}
// Function to display the selected team
function displaySelectedTeam() {
  const teamSelect = document.getElementById('teamSelect');
  var selectedTeamId = (teamSelect.value);
  console.log(selectedTeamId);
  if (selectedTeamId == "def") {
    console.log("working");
      displayAllTeams();
      return;
  }
  console.log("past");
  selectedTeamId = parseInt(teamSelect.value);
  if (!selectedTeamId || isNaN(selectedTeamId)) return;
  displayTeams('team_'+(selectedTeamId));
}

// Function to display team stats on the HTML page
function displayTeams(selectedTeamId) {
console.log(selectedTeamId);
const teamsContainer = document.getElementById('teamsContainer');
teamsContainer.innerHTML = ''; // Clear existing content

const selectedTeam = teams.find(team => team.id === selectedTeamId);
if (!selectedTeam) return;

const teamDiv = document.createElement('div');
teamDiv.classList.add('team');
teamDiv.innerHTML = `
    <h2>${selectedTeam.name}</h2>
    <div class="players">
        <table class="teamsTable" id="teamsTable" cellspacing="0" style="margin-top: 0.5%;">
<colgroup>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
</colgroup>
<thead>
    <tr>
        <th onclick="sortTable(0)">Team</th>
        <th onclick="sortTable(1)">League</th>
        <th onclick="sortTable(2)"><div class="tooltip">Began</div></th>
        <th onclick="sortTable(3)">To</th>
        <th onclick="sortTable(4)">Years</th>
        <th onclick="sortTable(5)">G</th>
        <th onclick="sortTable(6)">W</th>
        <th onclick="sortTable(7)">L</th>
        <th onclick="sortTable(8)">%</th>
        <th onclick="sortTable(9)">Plyoff</th>
        <th onclick="sortTable(10)">Div</th>
        <th onclick="sortTable(11)">Conf</th>
        <th onclick="sortTable(12)">Champ</th>
        
    </tr>
</thead>
<tbody>
    <tr>
        <td>${selectedTeam.name}</td>
        <td>${selectedTeam.league}</td>
        <td>${selectedTeam.beganYear}</td>
        <td>${selectedTeam.untilYear}</td>
        <td>${selectedTeam.untilYear-selectedTeam.beganYear}</td>
        <td>${selectedTeam.wins+selectedTeam.lost}</td>
        <td>${selectedTeam.wins}</td>
        <td>${selectedTeam.lost}</td>
        <td>${(selectedTeam.wins/(selectedTeam.wins+selectedTeam.lost)).toFixed(2)}</td>
        <td>${selectedTeam.playoffs}</td>
        <td>${selectedTeam.divisionals}</td>
        <td>${selectedTeam.conferences}</td>
        <td>${selectedTeam.championships}</td>
    </tr>
</tbody>
    </div>
`;
const teamTable = document.getElementById("teamsTable")
teams.forEach((team, index) => {
    const startIndex = index * 12; // Calculate the starting index for players of this team
        });
teamsContainer.appendChild(teamDiv);
}