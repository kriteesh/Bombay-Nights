body = document.body;

container = create(body)('div')('container')({});

game = create(container)('div')('game')({});

pad = create(container)('div')('pad')({});

if(screen.width < screen.height)
    {
        game.style.width = '90%';
        game.style.height = game.clientWidth ;
        game.style.marginLeft = '5%';
        game.style.marginTop = '5vh';

    }

else{
        game.style.height = '70vh';
        game.style.width = game.clientHeight;
        game.style.marginLeft = '5vw';
        game.style.marginTop = '5vh';
        pad.style.width = "50%";
        pad.style.setProperty('--size', "8vmin");
        container.style.flexDirection = "row";
    }	

w = game.clientWidth;

order = 9;

selectedCell = null; 

selected = el =>  el.classList.add('clicked');

unselected = el => el.classList.remove('clicked');

cells = new Array(order*order).fill(1).map(x=>{
    y = create(game)('div')('cell')({});
    game.style.gridTemplateColumns = 'repeat(' + order + ',1fr)';
    return y;
});

mainGrid = generateGrid(order);
grinder = looper(gridChanger(mainGrid));
solution = mainGrid.join(",").split(",");

cells.map((x,i)=>{
    x.style.height = x.style.width = x.style.lineHeight = w/order + "px";
    x.onclick = () => { 
        if(selectedCell!=null){
            unselected(cells[selectedCell]);
            selected(x);
            selectedCell = i;
        }
        else{
            selected(x);
            selectedCell = i;
        }
    }
});

padButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "✕", "पुनः", "चैक", "हल", "⇥"];

padButtons = padButtons.map((x,i)=>{
    y = create(pad)('div')('buttons')({});
    y.innerText =x;
    return y;
})

padButtons.map((x,i)=>{
    if(i<10){
        x.onclick = () =>{
            if(cells[selectedCell].children.length==0){
                z = create(cells[selectedCell])('div')('cellette')({}); 
                if(i<9) z.innerText = x.innerText;
                else if(i==9) z.innerText = '';
            }
            else if(cells[selectedCell].children[0].className=="celltop"){
                if(cells[selectedCell].children.length==1){
                    z = create(cells[selectedCell])('div')('cellette')({}); 
                    if(i<9) z.innerText = x.innerText;
                    else if(i==9) z.innerText = '';
                    z.style.marginTop = "-50%";
                }
                else{
                    cells[selectedCell].removeChild(cells[selectedCell].childNodes[1]);
                    z = create(cells[selectedCell])('div')('cellette')({}); 
                    if(i<9) z.innerText = x.innerText;
                    else if(i==9) z.innerText = '';
                    z.style.marginTop = "-50%";
                }
            }
            else{
                    cells[selectedCell].removeChild(cells[selectedCell].childNodes[0]);
                    z = create(cells[selectedCell])('div')('cellette')({}); 
                    if(i<9) z.innerText = x.innerText;
                    else if(i==9) z.innerText = '';
                    
            }
        }
    }
    else if(i==10){
        x.onclick = () =>{
            document.querySelectorAll('.cellette').forEach(e => e.remove());
        }
    }

    else if(i==11){
        x.onclick = () =>{
            document.querySelectorAll('.cellette').forEach((e,i) => {
                if(e.innerText ==solution[i]) e.style.background = "green";
                else e.style.background = "red";
            });
        }
    }

    else if(i==12){
        x.onclick = () =>{
            document.querySelectorAll('.cellette').forEach(e => e.remove());
            cells.map((y,j)=>{
                if(y.children.length==0){
                    z = create(y)('div')('cellette')({});
                    z.innerText = solution[j] ;
                }
                else{
                    z = create(y)('div')('cellette')({});
                    z.innerText = solution[j] ;
                    z.style.marginTop = "-50%";
                    
                }
              
            })
        }
    }
    


})








