function bottlesOfBeer(){
    var num=99;
    while (num>0){
        if (num==1){
            console.log(num+" bottle of beer on the wall, "+num+" bottle of beer.");
        }
        else if (num==2){
            console.log(num+" bottles of beer on the wall, "+num+" bottles of beer.");
            console.log("Take one down and pass it around, "+(--num)+" bottle of beer on the wall.");
            continue;
        }
        else {
            console.log(num+" bottles of beer on the wall, "+num+" bottles of beer.");
        }
        console.log("Take one down and pass it around, "+(--num)+" bottles of beer on the wall.");
    }
}

bottlesOfBeer();
