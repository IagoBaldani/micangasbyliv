
const qsl = el => document.querySelector(el);
const qsla = el => document.querySelectorAll(el);

qsl('.drop').addEventListener('click', ()=>{
    let dropArea = qsl(".dropdown");
    let dropWidth = qsl(".drop");

    if(dropArea.style.display=='flex'){
        dropArea.style.display = 'none';
    }
    else{
        dropArea.style.display = 'flex';
    }

    if(dropWidth.style.width > '750px'){
        dropWidth.style.display = 'none'; 
    }
    else{
        dropWidth.style.display = 'flex'; 
    }
});

produtosJson.map((item,index)=>{
    let prodItem = qsl('.models .item').cloneNode(true);
    
    prodItem.setAttribute('data-key', index);
    prodItem.querySelector('.item-preco').innerHTML = ` R$ ${item.preco.toFixed(2)}`;
    prodItem.querySelector('.item-img img').src = item.img;

    let idFormatada = item.id;
    
    if(idFormatada.length<4){
        idFormatada = idFormatada.slice(2,3); 
    }else{
        idFormatada = idFormatada.slice(2,4); 
    }
    

    prodItem.querySelector('.item-id').innerHTML = `#${idFormatada}`;

    switch(item.tipo){
        case 'chaveiro':
            qsl('.item-area--chaveiros').append(prodItem);
            break;
        case 'chockers':
            qsl('.item-area--chockers').append(prodItem);
            break;
        case 'outros':
            qsl('.item-area--outros').append(prodItem);
            break;
    }
    
});

window.onload = function(){
    qsl(".menu-mobile").addEventListener("click",function(){
        if(qsl(".menuint ul").style.display == 'flex'){
            qsl(".menuint ul").style.display = 'none';
        }
        else{
            qsl(".menuint ul").style.display = 'flex';
        }
    })
}
