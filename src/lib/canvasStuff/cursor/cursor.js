class customCursor{
    constructor(){
        this.canvas = document.querySelector("canvas");
    }

    draw(r, positionX=this.canvas.width/2, positionY=this.canvas.height/2, startPos=0, endPos=2 * Math.PI){
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(positionX, positionY, r, startPos, endPos);
        ctx.stroke()
    }
}