class Amenaker extends KendaniEak{
    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
        this.eatCount = 0;
        this.energy = 15;
    }



    eat() {
        var emptyCord = this.getDirections(3);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
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
            if (this.energy < 3) {
                this.die();
            }
        }
    }

    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var noramenaker = new Amenaker(x, y, this.index);
            amenArr.push(noramenaker);

            matrix[y][x] = 4;
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in amenArr) {
            if (this.x == amenArr[i].x && this.y == amenArr[i].y) {
                amenArr.splice(i, 1);
            }
        }
    }
}
