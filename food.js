function Food(size) {
        this.size = size;
        this.pos;

        this.display = function () {
                fill(255);
                rect(this.pos.x, this.pos.y, size, size);
        }

        //run before displaying
        this.findLoc = function () {
                var cols = floor(width/size);
                var rows = floor(height/size);

                this.pos = createVector(floor(random(cols)) * size, floor(random(rows)) * size);
        }
}
