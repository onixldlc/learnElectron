(function(){
    const canvas = document.querySelector("canvas");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    resize()
    window.addEventListener('resize', resize)
})();

var cursor = new customCursor();
cursor.draw(15);