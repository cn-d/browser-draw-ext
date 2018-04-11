console.log(drawConfig)

const paint = (sketch) => {
    sketch.setup = () => {
        document.body.style['userSelect'] = 'none';
        const body = document.body,
            html = document.documentElement;
        let docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        const c = sketch.createCanvas(sketch.windowWidth, docHeight);
        c.position(0, 0);
        c.style('pointer-events', 'none');
        c.style('z-index', 1000);
        sketch.clear();
    } 

    sketch.draw = () => {
        sketch.stroke(drawConfig.color);        
        sketch.strokeWeight(drawConfig.weight);
        if (sketch.mouseIsPressed) {
            sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        }
    }
};

const painter = new p5(paint);
