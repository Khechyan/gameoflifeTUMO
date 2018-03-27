class Hzoraguyn extends KendaniEak{
       move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
        this.eatCount = 0;
        this.energy = 10;
    }


    eat() {
        var emptyCord2 = this.getDirections(1);
        var emptyCord3 = this.getDirections(2);
        var emptyCord = this.getDirections(3);
        var emptyCord1 = this.getDirections(4);

        var cord = random(emptyCord);
        var cord1 = random(emptyCord1);
        var cord2 = random(emptyCord2);
        var cord3 = random(emptyCord3);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishArr) {
                if (x == gishArr[i].x && y == gishArr[i].y) {
                    gishArr.splice(i, 1);
                }
            }
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
        }
        if (this.energy < 3) {
            this.die();
        }

        if (cord1) {
            this.multiply++;

            var x = cord1[0];
            var y = cord1[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in amenArr) {
                if (x == amenArr[i].x && y == amenArr[i].y) {
                    amenArr.splice(i, 1);
                }
            }
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();
            }
        }/////
        if (cord2) {
            this.multiply++;

            var x = cord2[0];
            var y = cord2[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
        }
        if (this.energy < 3) {
            this.die();
        }
        //////
              if (cord3) {
            this.multiply++;

            var x = cord3[0];
            var y = cord3[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
        }
        console.log(this.energy);
        if (this.energy < 3) {
            this.die();
        }  
    }

    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norhzoraguyn = new Hzoraguyn(x, y, this.index);
            hzorArr.push(norhzoraguyn);

            matrix[y][x] = 5;
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in hzorArr) {
            if (this.x == hzorArr[i].x && this.y == hzorArr[i].y) {
                hzorArr.splice(i, 1);
                break;
            }
        }
    }
}
