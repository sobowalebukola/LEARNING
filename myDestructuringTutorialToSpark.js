var sequence = { 
    first_Term:5,  
    increment: function*(d) {
        var n = this.first_Term;
         for(n; ; n++) {
        yield n + d;
             }
     }
     };// using the function* is an elementary example of a generator. You can use simpler concept and more presentable concepts. 
sequence.increment.call(sequence, 2);// the call shouldn't be a problem here. The common difference is '2'. This is rather verbose since this line isn't needed.Just using it to explain.
setTimeout(function () { console.log(sequence.increment.call(sequence, 2))}, 10000);// not really needed but was just playing with i_code's lecture
[a,b,c,d,e, ,f,g,h,y,u,i,j,w, ,q,p,r] = sequence.increment.call(sequence, 2);// omits the 6th and 15th index by using the commas
[a,b,c,d,e, ,f,g,h,y,u,i,j,w, ,q,p,r].reduce((x,y) => x+y);// reduce is an higher order function that just gives us the sum of the array





Return` the  sum of the 'second_Term' to the "18th Term'(You must omit the 6th and the 15th term in the addition) `generated` by the increment method