const circle = {
    raduis: 1, 
    location : {
        x: 0,
        y: 0
    },
    draw: function(){
        console.log("drawing");
    }
}

circle.draw();

//Factory method

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log("drawing");
        }
    }
}


const circle1 = createCircle(1);

//Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("drawing for object 2");
    }
}

const circle2 = new Circle(1);

//In javascript, functions are objects

/*const Circle2 = new Function('raduiu', `
this.radius = radius;
this.draw = function(){
    console.log("drawing for object 2");
}
`);
*/

Circle.call({}, 1)
Circle.apply({}, [1, 2, 3])

const Circle2 = new Circle(1);

let obj = { vaalue:10};
function increaseNumber(number) {
    obj = obj + 1;
}

increaseNumber(obj);
console.log(obj);

circle.location = {x: 1}

delete Circle2.location;


//Enumerate objects
for (let key in circle){
    if (typeof circle[key] !== 'function'){
       console.log(key, circle[key], );
    }
   const keys =  Object.keys(circle);
   console.log(keys);

   //Checkinig if object exists
   if ('raduis' in circle){
    console.log("Circle has a raduis");
   }
}

//Implementing abstraction
function Cirlcle2(radius){
    let defualtLocation = {x :0, y : 0}
    let computedLocation = function(Factory){
        return defualtLocation;
    }
    this.radius = radius;
    this.draw = function(){
        console.log("drawing for object 2");
        console.log(computedLocation(0.1));
    }
}

const circle3 = new Cirlcle2(1);
circle3.draw();