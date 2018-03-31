var matrix = []
var side = 10;
var grassArr = [];
var eatArr = [];
var gishArr = [];
var amenArr = [];
var hzorArr = [];
var tarArr = [];

/*
var matrix = [
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 6, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 3, 3, 0, 1, 0, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 5, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 3, 0, 1, 2, 0, 1, 0, 5, 1, 1, 3, 1, 1, 1],
    [2, 2, 2, 0, 0, 1, 0, 0, 1, 0, 5, 1, 6, 1, 1, 1, 1],
    [0, 3, 0, 0, 0, 1, 0, 0, 1, 0, 5, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 5, 1, 1, 1, 1, 1, 1],
    [0, 0, 4, 4, 6, 1, 2, 0, 1, 0, 5, 1, 1, 3, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 0, 1, 4, 1, 4, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 1, 4, 2, 2, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 2, 3, 2, 2, 1, 1, 1, 1, 1],
]*/


var bardz = 50;
var layn = 50;
var matrix = [];
var grassCount = 200;
var eatGrassCount = 100;
var gishatichCount = 100;
var amenakerCount = 50;
var hzorCount = 50;
var tarCount = 60;
var matrix = [];

for (var i = 0; i < bardz; i++) {
    matrix.push([]);

    for (var j = 0; j < layn; j++) {
        matrix[i].push(0);
    }
}


function setup() {
    var c = 0;
    while (c < grassCount) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        if (matrix[y][x] == 0); {
            matrix[y][x] = 1;
            c++;
        }
    }

    var q = 0;
    while (q < eatGrassCount) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        if (matrix[y][x] == 0); {
            matrix[y][x] = 2;
            q++;
        }
    }

    var p = 0;
    while (p < gishatichCount) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        if (matrix[y][x] == 0); {
            matrix[y][x] = 3;
            p++;
        }
    }


    var u = 0;
    while (u < amenakerCount) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        if (matrix[y][x] == 0); {
            matrix[y][x] = 4;
            u++;
        }
    }

    var m = 0;
    while (m < hzorCount) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        if (matrix[y][x] == 0); {
            matrix[y][x] = 5;
            m++;
        }
    }

    var z = 0;
    while (z < tarCount) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        if (matrix[y][x] == 0); {
            matrix[y][x] = 6;
            z++;
        }
    }


    noStroke()
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                grassArr.push(grass);
            } else if (matrix[i][j] == 3) {
                var gishatich = new Gishatich(j, i, 3);
                gishArr.push(gishatich);
            } else if (matrix[i][j] == 4) {
                var amenaker = new Amenaker(j, i, 4);
                amenArr.push(amenaker);
            } else if (matrix[i][j] == 5) {
                var hzoraguyn = new Hzoraguyn(j, i, 5);
                hzorArr.push(hzoraguyn);
            } else if (matrix[i][j] == 6) {
                var taron = new Taron(j, i, 6);
                tarArr.push(taron);
            }
        }
    }
    // console.log(matrix);
}

var hashvich = 0;

function draw() {
    hashvich++;
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                if (hashvich * 10 <= 200) {
                    fill('#8A2BE2');
                    rect(j * side, i * side, side, side);
                } else if (hashvich * 10 <= 400) {
                    fill("green");
                    rect(j * side, i * side, side, side);
                } else if (hashvich * 10 <= 600) {
                    fill('#FF7F50');
                    rect(j * side, i * side, side, side);
                } else if (hashvich * 10 <= 800) {
                    fill('#white');
                    rect(j * side, i * side, side, side);
                } else if(hashvich >= 800){
                    hashvich == 0;
                }
            }
            if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            }
            if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            }
            if (matrix[i][j] == 4) {
                fill('#E9967A');
                rect(j * side, i * side, side, side);
            }
            if (matrix[i][j] == 5) {
                fill("black");
                rect(j * side, i * side, side, side);
            }
            if (matrix[i][j] == 6) {
                fill("blue");
                rect(j * side, i * side, side, side);

            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();

    }

    for (var i in eatArr) {
        eatArr[i].eat();

    }

    for (var i in gishArr) {
        gishArr[i].eat();

    }

    for (var i in amenArr) {
        amenArr[i].eat();

    }

    for (var i in hzorArr) {
        hzorArr[i].eat();
    }

    for (var i in tarArr) {
        tarArr[i].eat();

    }
}


