class Eatgrass extends KendaniEak{
    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
             var x = cord[0];
             var y = cord[1];

             matrix[y][x] = 2;

             matrix[this.y][this.x] = 0;

             this.x = x;
             this.y = y;
        }    
    }

    eat() {
        var emptyCord = this.getDirections(1);
        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;
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
            this.energy = 10;
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

            var norEatgrass = new Eatgrass(x, y, this.index);
            eatArr.push(norEatgrass);

            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }
}
