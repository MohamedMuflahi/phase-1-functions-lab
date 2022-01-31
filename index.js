// Code your solution in this file
function distanceFromHqInBlocks(x){
    return (Math.abs(x-42)); 
}
function distanceFromHqInFeet(x){
    return distanceFromHqInBlocks(x) * 264;
}
function distanceTravelledInFeet(x,y){
    
    return (Math.abs(x-y))*264;
}
function calculatesFarePrice(x,y){

    let f;
    let z = distanceTravelledInFeet(x,y);
    if(z <= 400){
        return 0;
    }else if(z <= 2000 && z > 400){
        f = (z-400)*0.02;
        return f;
    }else if(z > 2000 && z<=2500){
        return 25;
    }
    else if(z > 2500){
        return 'cannot travel that far';
    }
}