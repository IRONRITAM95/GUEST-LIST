var list =[];

function submit(){
    var n = document.getElementById("i1").value ;
    list.push(n);
    document.getElementById("names").innerHTML=list ;
}

function show(){
    var h = list.join("<br>");
    document.getElementById("names1").innerHTML=h ;
}

function sort(){
    var a = list.sort();
    document.getElementById("sorted_names").innerHTML=a ;
}

function search(){
    var s =document.getElementById("i2").value ;
    var found=0 ;
    var j;
    for(j=0; j<list.length; j++)
    {
        if(s==list[j]){
            found=found+ 1 ;
        }
    }
    document.getElementById("found").innerHTML="name found "+found+" time/s ";
    console.log("found name "+found+" time/s ");
}