const voters = [['Antonio', true, 5], ['Marija', false],['Darko', false], ['Angel', true, 3], ['Nadica', true, 2]];

const enterName = prompt("Please enter a name: ");

let doesNameExist = false;

for (let i = 0; i < voters.length; i++) {
    if (voters[i][0] === enterName) {
        if (voters[i][1] === true) {
            console.log(`${voters[i][0]} | Voted | ${voters[i][2]}`)
            doesNameExist = true;
        } else {
            console.log(`${voters[i][0]} | Didn't vote`);
            doesNameExist = true;
        }    
    } else if (doesNameExist === false && voters[i] === voters[voters.length - 1]) {
        console.log('The name was not found.');
    }
}