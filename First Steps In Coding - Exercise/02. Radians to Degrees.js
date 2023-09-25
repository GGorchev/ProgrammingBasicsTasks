function radiansToDegreese(input) {
    let radian = Number(input[0]);
    let degreese = radian * 180 / Math.PI;
    console.log(degreese)
}

radiansToDegreese(["3.1416"])