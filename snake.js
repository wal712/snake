function Snake(size) {
        // Snake's current x y coordinates
        this.x = 0;
        this.y = 0;

        // Array of xy positions of tail blocks of snake
        this.tail = [];

        this.xdir = 1;
        this.ydir = 0;

        // Used for scale of movement
        if (size <= 0) {
                this.size = 10;
        } else {
                this.size = size;
        }

        //All purpose function for running snake object
        this.run = function() {
                this.display();
                this.update();
                this.offScreen();
                // console.log("xspeed is: " + this.xspeed);
                // console.log("yspeed is: " + this.yspeed);
        }

        //updates location of snake
        this.update = function() {
                //sets each segment of the tail to the location of the segment before it
                for (var i = 0; i < this.tail.length - 1; i++) {
                        this.tail[i] = this.tail[i+1];
                }

                if (this.tail.length > 0) {
                        this.tail[this.tail.length - 1] = createVector(this.x, this.y);
                }

                this.x += this.xdir * size;
                this.y += this.ydir * size;
        }

        //displays snake on screen
        this.display = function() {
                fill(255);
                for (var i = 0; i < this.tail.length; i++) {
                        rect(this.tail[i].x, this.tail[i].y, size, size);
                }
                rect(this.x, this.y, size, size);
        }

        //Prevents going off screen
        this.offScreen = function() {
                if (this.x < 0) {
                        this.x = width - size;
                } else if (this.x > width - size) {
                        this.x = 0;
                }

                if (this.y < 0) {
                        this.y = height - size;
                } else if (this.y > height - size) {
                        this.y = 0;
                }
        }

        this.eat = function () {
                this.tail.push(createVector(this.x, this.y));
        }

        // Boolean function returns true if snake is colliding with tail
        this.crash = function () {
                for (var i = 0; i < this.tail.length; i++) {
                        var l = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
                        if (l < size) {
                                return true;
                        }
                }
                return false;
        }

        this.reset = function () {
                this.x = 0;
                this.y = 0;
                this.xdir = 1;
                this.ydir = 0;
                this.tail = [];
        }

        /*
        * Direction Functions
        * * Will not occur if snake is moving in opposite direction with a tail
        */
        this.up = function() {
                if (this.ydir !== 1 || this.tail.length === 0) {
                        this.xdir = 0;
                        this.ydir = -1;
                }
        }

        this.down = function() {
                if (this.ydir !== -1 || this.tail.length === 0) {
                        this.xdir = 0;
                        this.ydir = 1;
                }
        }

        this.left = function() {
                if (this.xdir !== 1 || this.tail.length === 0) {
                        this.ydir = 0;
                        this.xdir = -1;
                }
        }

        this.right = function() {
                if (this.xdir !== -1 || this.tail.length === 0) {
                        this.ydir = 0;
                        this.xdir = 1;
                }
        }
}
