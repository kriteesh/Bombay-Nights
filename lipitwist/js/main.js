body = document.body;

container = create(body)('div')('container')({});

header = create(container)('div')('header')({});

lefthead = create(header)('div')('lefthead')({});

lefthead.innerText = heading.split(" ")[0];

righthead = create(header)('div')('righthead')({});

righthead.innerText = heading.split(" ")[1];


area = create(container)('textarea')('area')({contenteditable : true});

chooser = create(container)('select')('chooser')({});

options = choosy.map(x=>{
    y = create(chooser)('option')('options')({});
    y.innerText = x["tag"];
    y.value = x["lingo"];
    return y;
});

reflection = create(container)('textarea')('reflection')({readonly:true});

twist = (lang) =>(val)=> { 
    if(val==null) reflection.innerHTML = '';
    reflection.innerHTML = devToLang(hkToDev(val))(lang);
}

area.onkeyup = () => {
    twist(chooser.value.split(","))(area.value);
}

chooser.onchange = () =>{
    console.log(chooser.value);
    if(chooser.value == 'english'){
        reflection.innerHTML = hkToIast(area.value);
    }
    else reflection.innerHTML = devToLang(hkToDev(area.value))(chooser.value.split(","));
}

