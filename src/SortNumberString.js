function sort(arr){    
    var letters=arr;
    for(var i=0;i<arr.length;i++){
        for(var j=i;j<arr.length;j++){
            if(letters.charCodeAt(i)>letters.charCodeAt(j)){
                var temp=letters[i];                
                letters = letters.replaceAt(i,letters[j]);
                letters = letters.replaceAt(j,temp);                
            }         
        }       
    }
    return letters;    
}

String.prototype.replaceAt=function(index, arr) {
    return this.substr(0, index) + arr+ this.substr(index + arr.length);
}