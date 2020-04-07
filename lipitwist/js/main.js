body = document.body;

container = create(body)('div')('container')({});

header = create(container)('div')('header')({});

area = create(container)('textarea')('area')({contenteditable : true});

mirror = create(container)('div')('mirror')({});

reflection = create(container)('div')('reflection')({});

area.onkeyup = () => { 
    mirror.innerHTML = hkToDev(area.value);
    reflection.innerHTML = devToLang(hkToDev(area.value))(sharada);
}

