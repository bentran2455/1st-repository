var a = function(){ 
    this.b = 1; }  // undefined
var b = function(){
    this.b = new a().b;
    return 5; // 5
}

var c = b() + new b();

