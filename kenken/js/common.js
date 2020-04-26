let create = parent => tag => element => parameters => { 
    x = document.createElement(tag);
    x.className = element;
    for( i in parameters){
        x.setAttribute(i, parameters[i]);
    }
    parent.appendChild(x);
    return x;
}

vanish = el => el.display = "none"

reappear = el => el.display = "initial"

randomColor = () =>{
        return 'rgb(' + (Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255)) + ')';
}

(function(){a={_b:0,c:function(){this._b++;return this.b;}};HTMLElement.prototype.pseudoStyle=function(d,e,f){var g="pseudoStyles";var h=document.head||document.getElementsByTagName('head')[0];var i=document.getElementById(g)||document.createElement('style');i.id=g;var j="pseudoStyle"+a.c();this.className+=" "+j;i.innerHTML+=" ."+j+":"+d+"{"+e+":"+f+"}";h.appendChild(i);return this;};})();

