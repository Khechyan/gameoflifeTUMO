class Taron extends KendaniEak{
    newDirections() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    move() {
        var emptyCord = this.getDirections(0);
        var cord1 = random(emptyCord);

        if (cord) {
             var x = cord[0];
             var y = cord[1];

             matrix[y][x] = 6;

             matrix[this.y][this.x] = 0;

             this.x = x;
             this.y = y;
        }
    }

        mul() {
        var emptyCord1 = this.getDirections(0);

        var cord1 = random(emptyCord);
        if (cord1) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var nortaron = new Taron(x, y, this.index);
            tarArr.push(nortaron);

            matrix[y][x] = 6;
            this.multiply = 0;
        }
    }

    //////////
        eat() {
        var emptyCord2 = this.getDirections(1);
        var emptyCord3 = this.getDirections(2);
        var emptyCord = this.getDirections(3);
        var emptyCord1 = this.getDirections(4);
        var emptyCord4 = this.getDirections(5);

        var cord = random(emptyCord);
        var cord1 = random(emptyCord1);
        var cord2 = random(emptyCord2);
        var cord3 = random(emptyCord3);
        var cord4 = random(emptyCord4);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 6;
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

            matrix[y][x] = 6;
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

            matrix[y][x] = 6;
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

            matrix[y][x] = 6;
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
////
            if (cord4) {
            this.multiply++;

            var x = cord3[0];
            var y = cord3[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in hzorArr) {
                if (x == hzorArr[i].x && y == hzorArr[i].y) {
                    hzorArr.splice(i, 1);
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

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in tarArr) {
            if (this.x == tarArr[i].x && this.y == tarArr[i].y) {
                tarArr.splice(i, 1);
            }
        }
    }
}       