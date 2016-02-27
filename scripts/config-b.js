document.addEventListener('DOMContentLoaded', function () {
         new Zodiac('zodiac-blog',                      // HTMLCanvasElement or id
            {                                      //// OPTIONS
               directionX: -1,                      // -1:left;0:random;1:right
               directionY: 1,                     // -1:up;0:random;1:down
               velocityX: [1, 0.5],                // [minX,maxX]
               velocityY: [0.5, 1],                 // [minY,maxY]
               bounceX: false,                      // bounce at left and right edge
               bounceY: false,                     // bounce at top and bottom edge
               parallax: 0,                       // float [0-1...]; 0: no paralax
               pivot: 1,                           // float [0-1...]; pivot level for parallax;
               density: 5000,                     // px^2 per node
               dotRadius: 1,                   // px value or [minR,maxR]
               backgroundColor: 'rgb(13,27,42)',      // default transparent; use alpha value for motion blur and ghosting
               dotColor: 'rgba(160,170,186,0.1)',
               linkColor: 'rgba(160,170,186,0.1)',
               linkDistance: 90,
               linkWidth: 1
            });
});