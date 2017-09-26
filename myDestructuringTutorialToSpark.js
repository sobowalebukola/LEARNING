var sequence = { 
    first_Term:5,  
    increment: function*(d) {
        var n = this.first_Term;
         for(n; ; n++) {
        yield n + d;
             }
     }
     }; 
sequence.increment.call(sequence, 2);
setTimeout(function () { console.log(sequence.increment.call(sequence, 2))}, 10000);
[a,b,c,d,e, ,f,g,h,y,u,i,j,w, ,q,p,r] = sequence.increment.call(sequence, 2);
[a,b,c,d,e, ,f,g,h,y,u,i,j,w, ,q,p,r].reduce((x,y) => x+y);





