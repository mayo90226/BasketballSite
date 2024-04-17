// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random player with a unique ID and team ID
function generateRandomPlayer(playerId, teamId) {
    const positions = ['PG', 'SG', 'SF', 'PF', 'C'];
    const firstNames = ['Chad', 'Michael','Chris','James', 'John', 'Robert', 'David', 'William', 'Daniel', 'Joseph', 'Richard', 'Thomas', 'Charles',
    'Matthew', 'Christopher', 'George', 'Steven', 'Edward', 'Brian', 'Ronald', 'Timothy', 'Jason', 'Jeffrey',
    'Ryan', 'Jacob', 'Gary', 'Nicholas', 'Eric', 'Stephen', 'Jonathan', 'Larry', 'Justin', 'Scott',
    'Brandon', 'Benjamin', 'Samuel', 'Jeremy', 'Patrick', 'Carlos', 'Terry', 'Sean', 'Keith', 'Albert',
    'Lawrence', 'Alexander', 'Kevin', 'Philip', 'Bryan', 'Randy', 'Frank', 'Howard', 'Eugene', 'Curtis'];
    const lastNames = ['Katz','Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
    'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
    'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
    'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green',
    'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts' ];




    const PlayerBirthplaces = [
        "Los Angeles, California, USA",
        "Chicago, Illinois, USA",
        "New York City, New York, USA",
        "Philadelphia, Pennsylvania, USA",
        "Houston, Texas, USA",
        "Toronto, Ontario, Canada",
        "Miami, Florida, USA",
        "Cleveland, Ohio, USA",
        "Oakland, California, USA",
        "Brooklyn, New York, USA",
        "Dallas, Texas, USA",
        "Washington, D.C., USA",
        "Atlanta, Georgia, USA",
        "Detroit, Michigan, USA",
        "Seattle, Washington, USA",
        "Memphis, Tennessee, USA",
        "Indianapolis, Indiana, USA",
        "Boston, Massachusetts, USA",
        "Phoenix, Arizona, USA",
        "Charlotte, North Carolina, USA",
        "San Antonio, Texas, USA",
        "Milwaukee, Wisconsin, USA",
        "Orlando, Florida, USA",
        "Minneapolis, Minnesota, USA",
        "Portland, Oregon, USA",
        "Denver, Colorado, USA",
        "Salt Lake City, Utah, USA",
        "New Orleans, Louisiana, USA",
        "Sacramento, California, USA",
        "Oklahoma City, Oklahoma, USA",
        "Las Vegas, Nevada, USA",
        "Kansas City, Missouri, USA",
        "St. Louis, Missouri, USA",
        "San Francisco, California, USA",
        "Toronto, Ontario, Canada",
        "Vancouver, British Columbia, Canada",
        "Montreal, Quebec, Canada",
        "Barcelona, Spain",
        "Athens, Greece",
        "Beijing, China",
        "Shanghai, China",
        "Tokyo, Japan",
        "Moscow, Russia",
        "Paris, France",
        "London, England, UK",
        "Berlin, Germany",
        "Sydney, Australia",
        "Rio de Janeiro, Brazil",
        "Buenos Aires, Argentina",
      ];

      const basketballUniversities = [
        "University of Kentucky",
        "Duke University",
        "University of North Carolina at Chapel Hill",
        "University of Kansas",
        "University of California, Los Angeles (UCLA)",
        "Syracuse University",
        "University of Connecticut",
        "University of Arizona",
        "University of Texas at Austin",
        "Michigan State University",
        "University of Florida",
        "Georgetown University",
        "Ohio State University",
        "Indiana University Bloomington",
        "University of Louisville",
        "University of Maryland, College Park",
        "University of Michigan",
        "University of Wisconsin-Madison",
        "University of Nevada, Las Vegas (UNLV)",
        "University of Memphis",
        "University of Oklahoma",
        "University of Southern California (USC)",
        "North Carolina State University",
        "University of Illinois at Urbana-Champaign",
        "University of Georgia",
        "University of Alabama",
        "University of California, Berkeley (UC Berkeley)",
        "University of Tennessee",
        "University of Washington",
        "Florida State University",
        "Louisiana State University (LSU)",
        "Villanova University",
        "Baylor University",
        "University of Oregon",
        "University of Iowa",
        "Texas Tech University",
        "Arizona State University",
        "Auburn University",
        "Purdue University",
        "University of Minnesota Twin Cities",
        "University of Miami",
        "University of Virginia",
        "Gonzaga University",
        "Creighton University",
        "Butler University",
        "Wichita State University",
        "University of Utah",
        "Brigham Young University (BYU)",
        "San Diego State University",
      ];
      
      
      


     

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]; //make a random name
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const playerName = firstName + ' ' + lastName;


    const Birthplace = PlayerBirthplaces[Math.floor(Math.random() * PlayerBirthplaces.length)];
    const School = basketballUniversities[Math.floor(Math.random() * basketballUniversities.length)];
    
    const PlayerAge = getRandomNumber(19, 42);
    const PlayerHeightFeet = getRandomNumber(4, 7);
    const PlayerHeightInches = getRandomNumber(0, 11);
    const PlayerHeight = PlayerHeightFeet + "'" + PlayerHeightInches;

    if (PlayerHeightFeet > 6){
        positionHeight = positions[4];
    }
    else if (PlayerHeightFeet > 5){
        if (PlayerHeightInches > 7){
            positionHeight = positions[3];
        }
        else if (PlayerHeightInches <= 7 && PlayerHeightInches > 4){
            positionHeight = positions[2];
        }

        else {
            positionHeight = positions[1]; 
        }
        
    }
    else{
        positionHeight = positions[0]; 
    }
    
    const positionBaseHeigt = positionHeight;
    //shooting stats
    const threePointSkill = getRandomNumber(50, 99);
    const midRangePointSkill = getRandomNumber(50, 99);
    const NearPointSkill = getRandomNumber(50, 99);

    //defense stats
    const ReboundingSkill  = getRandomNumber(50, 99);
    const SpeedSkill = getRandomNumber(50, 99);
    const StealSkill = getRandomNumber(50, 99);
    const BlockSkill = getRandomNumber(50, 99);
    
    //playmaking stats
    const visionSkill = getRandomNumber(40, 90);
    const ballHandlingSkill = getRandomNumber(40, 90);
    const passingSkill = getRandomNumber(40, 90);

    const shootingSkill = Math.floor((threePointSkill + midRangePointSkill + NearPointSkill) / 2.90)
    const playmakingSkill = Math.floor((visionSkill + ballHandlingSkill + passingSkill) / 2.90)
    const defenseSkill = Math.floor((ReboundingSkill + SpeedSkill + StealSkill + BlockSkill) / 3.90)

    const player = { // Player Data
        id: playerId, // Id
        name: playerName, // Name
        position: positionBaseHeigt, // Position
        teamId: teamId, // Team ID
        height: PlayerHeight,
        Age: PlayerAge,
        Birthplace: Birthplace,
        School: School, 


        shooting: shootingSkill, // Overall Shooting
        ThreePoint: threePointSkill, // 3pt
        MidRange: midRangePointSkill, // Middy
        Finishing: NearPointSkill, // Layups and dunks

        vision: visionSkill,
        ballhandling:ballHandlingSkill,
        passing: passingSkill,
        playmaking:playmakingSkill,

        defense: defenseSkill,
        steal: StealSkill,
        block: BlockSkill,
        speed: SpeedSkill,
        Rebounding: ReboundingSkill,


        



        overall: Math.floor((shootingSkill + passingSkill + defenseSkill) / 2.85)
    };

    return player;
}

// Function to regenerate players
function regeneratePlayers() {
    if (Object.keys(localStorage).filter(key => key.startsWith('player_')).length > 0) {
        alert('Players already exist. Please refresh the page to regenerate.');
        return;
    }
    let teamId = 0; // Initialize teamId
    for (let i = 0; i < 360; i++) {
        const playerId = 'player_' + i;
        const player = generateRandomPlayer(playerId, ('team_'+(teamId+1))); // Pass the current teamId
        localStorage.setItem(playerId, JSON.stringify(player)); // Store player data in local storage
        if ((i + 1) % 12 === 0) { // Check if 12 players have been generated for the current team
            teamId++; // Increment teamId for the next group of players
        }
    }
}
