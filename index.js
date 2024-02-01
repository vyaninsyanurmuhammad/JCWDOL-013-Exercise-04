// 1. Create a function that can create a triangle pattern according to the height we provide like the

const triangleByHeight = (height) => {
    const triangelNumberList = [];
    let sortNumber = 0;

    for (let i = 0; i < height; i++) {

        let triangelNumberLineList = [];

        for (let j = 0; j <= i; j++) {
            sortNumber++;
            triangelNumberLineList.push(sortNumber);
        }

        triangelNumberList.push(triangelNumberLineList);

    }

    const biggestLengthCharacterNumberTriangle = triangelNumberList[height - 1][height - 1].toString().length;

    triangelNumberList.forEach((triangleLineNumberList) => {
        const triangle = triangleLineNumberList
            .map((data) => data.toString().padStart(biggestLengthCharacterNumberTriangle, '0'))
            .join(' ');

        console.log(triangle);
    });
}

triangleByHeight(4);