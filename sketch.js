var snakeSize;
var s;
var f;
var score;
var diff; //lower diff value means higher difficulty

function setup() {
        createCanvas(400, 400);
        snakeSize = 10;
        score = 0;
        diff = 2;
        s = new Snake(snakeSize);
        f = new Food(snakeSize);
        f.findLoc();
}

function draw() {
        background(50);
        frameRate(10 + floor(score/diff));

        checkEat();
        textAlign(CENTER);
        textSize(50);
        s.run();
        f.display();
        checkEnd();
        fill(255., 55);
        text("Score: " + score, width / 2, height / 2);
}

function keyPressed() {
        if (keyCode === UP_ARROW) {
                s.up();
        } else if (keyCode === DOWN_ARROW) {
                s.down();
        } else if (keyCode === LEFT_ARROW) {
                s.left();
        } else if (keyCode === RIGHT_ARROW) {
                s.right();
        }
}

function checkEat() {
        var l = dist(s.x, s.y, f.pos.x, f.pos.y);
        if (l < snakeSize) {
                f.findLoc();
                s.eat();
                score++;
        }
}

function checkEnd() {

        //snake dies
        if (s.crash()) {

                score = 0;
                s.reset();
                f.findLoc();
        }

        //win condition
        if (score >= (floor(width / size) * floor(height / size)) - 1) {
                background(50);
                textAlign(CENTER);
                textSize(50);
                fill(255., 55);
                text("You Win!", width / 2, height / 2);
                noLoop();
        }
}
