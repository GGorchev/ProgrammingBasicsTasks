function projectCreation(input) {
    let name = input[0];
    let projectTime = 3;
    let projectsCount = input[1]; 
    let totalHours = projectTime * Number(projectsCount);
    console.log(`The architect ${name} will need ${totalHours} hours to complete ${projectsCount} project/s.`)
}

projectCreation(["Georgi", "9"]);