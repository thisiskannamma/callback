function ten(callback) {
    setTimeout(() => {
        callback(null , '10')
    },1000);
}
function nine(callback) {
    setTimeout(() => {
        callback(null , '9')
    },1000);
}
function eight(callback) {
    setTimeout(() => {
        callback(null , '8')
    },1000);
}
function seven(callback) {
    setTimeout(() => {
        callback(null , '7')
    },1000);
}
function six(callback) {
    setTimeout(() => {
        callback(null , '6')
    },1000);
}
function five(callback) {
    setTimeout(() => {
        callback(null , '5')
    },1000);
}
function four(callback) {
    setTimeout(() => {
        callback(null , '4')
    },1000);
}
function three(callback) {
    setTimeout(() => {
        callback(null , '3')
    },1000);
}
function two(callback) {
    setTimeout(() => {
        callback(null , '2')
    },1000);
}
function one(callback) {
    setTimeout(() => {
        callback(null , '1')
    },1000);
}
function greet(callback){
    setTimeout(() =>{
        callback(null,'HAPPY INDEPENDENCE DAY')
    },1000);
}
ten(function(error,result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
        nine(function(error,result){
            if(error){
                console.error(error);
            }
            else{
                console.log(result);
                eight(function(error,result){
                    if(error){
                        console.error(error);  
                    }
                    else{
                        console.log(result);
                        seven(function(error,result){
                            if(error){
                                console.error(error); 
                            }
                            else{
                                console.log(result);
                                six(function(error,result){
                                    if(error){
                                        console.error(error);
                                    }
                                    else{
                                        console.log(result);
                                        five(function(error,result){
                                            if(error){
                                                console.error(error);
                                            }
                                            else{
                                                console.log(result);
                                                four(function(error,result){
                                                    if(error){
                                                        console.error(error);
                                                    }
                                                    else{
                                                        console.log(result);
                                                        three(function(error,result){
                                                            if(error){
                                                                console.error(error);
                                                            }
                                                            else{
                                                                console.log(result);
                                                                two(function(error,result){
                                                                    if(error){
                                                                        console.error(error);
                                                                    }
                                                                    else{
                                                                        console.log(result);
                                                                        one(function(error,result){
                                                                            if(error){
                                                                                console.error(error);
                                                                            }
                                                                            else{
                                                                                console.log(result);
                                                                                greet(function(error,result){
                                                                                    if(error){
                                                                                        console.error(error);
                                                                                    }
                                                                                    else{
                                                                                        console.log(result);
                                                                                    }
                                                                                })
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                }) 
                            }
                        })  
                    }
                })
            }
        })
    }
})

























