const niza = [
    ['Antonio', true, 5], ['Marija', false],['Darko', false], ['Angel', true, 3], ['Nadica', true, 2]
];

const ime = prompt("Please enter a name: ");

let doesNameExist = false;

for (let i = 0; i < niza.length; i++) {
    if (niza[i][0] === ime) {
        if (niza[i][1] === true) {
            console.log(`${niza[i][0]} | Voted | ${niza[i][2]}`)
            doesNameExist = true;
        } else {
            console.log(`${niza[i][0]} | Didn't vote`);
            doesNameExist = true;
        }    
    } else if (doesNameExist === false && niza[i] === niza[niza.length - 1]) {
        console.log('The name is not found.');
    }
}