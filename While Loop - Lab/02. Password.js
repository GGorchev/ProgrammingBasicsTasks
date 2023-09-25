// function password(input) {
//     let index = 0;
//     let username = input[index];
//     index++;
//     let password = input[index];
//     index++;

//     let temporaryPassword = input[index];
//     index++;

//     while(temporaryPassword !== password) {
//         temporaryPassword = input[index];
//         index++;
//     }
//     console.log(`Welcome ${username}!`);
    
// }

// password(["Nakov",

// "1234",

// "Pass",

// "1324",

// "1234"])

function password(input) {
    let username = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3;

    while (data !== password) {
        data = input[index];
        index++
    }
    console.log(`Welcome ${username}!`);
}

password(["Nakov",

"1234",

"Pass",

"1324",

"1234"])