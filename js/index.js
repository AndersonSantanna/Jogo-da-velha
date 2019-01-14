let jogo = ()=>{
    let vez = 'b';
    
    let c1 = document.getElementById('c1')
    c1.addEventListener("click", (event)=>{
        if(c1.innerHTML == ''){
            c1.innerHTML = '<img src="imagem/'+vez+'.png" width="130px" alt="">'
            vez = proximo(vez)
            verificar()
        }
        
    });

    let c2 = document.getElementById('c2')
    c2.addEventListener("click", (event)=>{
        if(c2.innerHTML == ''){
            c2.innerHTML = '<img src="imagem/'+vez+'.png" width="130px" alt="">'
            vez = proximo(vez)
            verificar()
        }
    });
    
    let c3 = document.getElementById('c3')
    c3.addEventListener("click", (event)=>{
        if(c3.innerHTML == ''){
            c3.innerHTML = '<img src="imagem/'+vez+'.png" width="130px" alt="">'
            vez = proximo(vez)
            verificar()
        }
    });
    let c4 = document.getElementById('c4')
    c4.addEventListener("click", (event)=>{
        if(c4.innerHTML == ''){
            c4.innerHTML = '<img src="imagem/'+vez+'.png" width="130px" alt="">'
            vez = proximo(vez)
            verificar()
        }
    });
    let c5 = document.getElementById('c5')
    c5.addEventListener("click", (event)=>{
        if(c5.innerHTML == ''){
            c5.innerHTML = '<img src="imagem/'+vez+'.png" width="130px" alt="">'
            vez = proximo(vez)
            verificar()
        }
    });
    let c6 = document.getElementById('c6')
    c6.addEventListener("click", (event)=>{
        if(c6.innerHTML == ''){
            c6.innerHTML = '<img src="imagem/'+vez+'.png" width="130px" alt="">'
            vez = proximo(vez)
            verificar()
        }
    });
    let c7 = document.getElementById('c7')
    c7.addEventListener("click", (event)=>{
        if(c7.innerHTML == ''){
            c7.innerHTML = '<img src="imagem/'+vez+'.png" width="130px" alt="">'
            vez = proximo(vez)
            verificar()
        }
    });
    let c8 = document.getElementById('c8')
    c8.addEventListener("click", (event)=>{
        if(c8.innerHTML == ''){
            c8.innerHTML = '<img src="imagem/'+vez+'.png" width="130px" alt="">'
            vez = proximo(vez)
            verificar()
        }
    });
    let c9 = document.getElementById('c9')
    c9.addEventListener("click", (event)=>{
        if(c9.innerHTML == ''){
            c9.innerHTML = '<img src="imagem/'+vez+'.png" width="130px" alt="">'
            vez = proximo(vez)
            verificar()
        }
    });
    function verificar(){
        if( c1.innerHTML == c2.innerHTML && c1.innerHTML == c3.innerHTML && c1.innerHTML != '' && c2.innerHTML != ''||
            c1.innerHTML == c4.innerHTML && c1.innerHTML == c7.innerHTML && c1.innerHTML != '' && c4.innerHTML != ''||
            c1.innerHTML == c5.innerHTML && c1.innerHTML == c9.innerHTML && c1.innerHTML != '' && c5.innerHTML != ''||
            c2.innerHTML == c5.innerHTML && c2.innerHTML == c8.innerHTML && c2.innerHTML != '' && c5.innerHTML != ''||
            c3.innerHTML == c6.innerHTML && c3.innerHTML == c9.innerHTML && c3.innerHTML != '' && c6.innerHTML != ''||
            c3.innerHTML == c5.innerHTML && c3.innerHTML == c7.innerHTML && c3.innerHTML != '' && c5.innerHTML != ''||
            c4.innerHTML == c5.innerHTML && c4.innerHTML == c6.innerHTML && c4.innerHTML != '' && c5.innerHTML != ''||
            c7.innerHTML == c8.innerHTML && c7.innerHTML == c9.innerHTML && c7.innerHTML != '' && c8.innerHTML != ''){

            open('pop-win', true, true)   
                
        }else if( c1.innerHTML != '' && c2.innerHTML != '' && c3.innerHTML != '' &&
        c4.innerHTML != '' && c5.innerHTML != '' && c6.innerHTML != '' &&
        c7.innerHTML != '' && c8.innerHTML != '' && c9.innerHTML != ''){
            open('pop-draw')
        }
    }
    function proximo(vez){
        return vez == 'x' ? 'b' : 'x'
    }
    function open(id, mensagem, imagem){
        document.getElementById(id).style = 'display: inline'
        imagem == true ? document.getElementById(id).innerHTML ='<img src="imagem/win.png" width="340px">' : ''
        if(mensagem != undefined){
            let ganhador = vez == 'b' ? '2' : '1'
            document.getElementById(id).innerHTML = 
            '<a onclick="fecharWin()"><span class="close ml-2 mr-1">X</span></a>'+
            document.getElementById(id).innerHTML + 
            '<h1>Parabéns, jogador '+ ganhador+' !! :) </h1>'+
            '<img src="imagem/'+ proximo(vez)+'.png" width="300px" >'
            
        } 
         
    }
}

jogo()

function reiniciar(){
    window.location.reload()
}
function fecharWin(){
    document.getElementById('pop-win').style = 'display: none' 
    reiniciar()
}
function fecharDraw(){
    document.getElementById('pop-draw').style = 'display: none'
    reiniciar() 
}

/*let computador = () =>{

    let combWin = [[1, 2, 3],[1,4,7],[1,5,9],[2,5,8],[3,6,9], [4,5,6],[7,8,9]]
    
    let c1 = document.getElementById('c1')
    c1.addEventListener("click", (event)=>{
        c1.innerHTML = '<img src="imagem/b.png" width="130px" alt="">'
        verificar('c1')
    });

    let c2 = document.getElementById('c2')
    c2.addEventListener("click", (event)=>{
        c2.innerHTML = '<img src="imagem/b.png" width="130px" alt="">'
    });
    
    let c3 = document.getElementById('c3')
    c3.addEventListener("click", (event)=>{
        c3.innerHTML = '<img src="imagem/b.png" width="130px" alt="">'
    });
    let c4 = document.getElementById('c4')
    c4.addEventListener("click", (event)=>{
        c4.innerHTML = '<img src="imagem/b.png" width="130px" alt="">'
    });
    let c5 = document.getElementById('c5')
    c5.addEventListener("click", (event)=>{
        c5.innerHTML = '<img src="imagem/b.png" width="130px" alt="">'
    });
    let c6 = document.getElementById('c6')
    c6.addEventListener("click", (event)=>{
        c6.innerHTML = '<img src="imagem/b.png" width="130px" alt="">'
    });
    let c7 = document.getElementById('c7')
    c7.addEventListener("click", (event)=>{
        c7.innerHTML = '<img src="imagem/b.png" width="130px" alt="">'
    });
    let c8 = document.getElementById('c8')
    c8.addEventListener("click", (event)=>{
        c8.innerHTML = '<img src="imagem/b.png" width="130px" alt="">'
    });
    let c9 = document.getElementById('c9')
    c9.addEventListener("click", (event)=>{
        c9.innerHTML = '<img src="imagem/b.png" width="130px" alt="">'
    });

    function verificar(coluna){
        let jogada = Math.floor(Math.random() * 9)
        switch (coluna) {
            case 'c1':
                console.log(combWin[getRandom(3, 8)][getRandom(0,2)])
                c1.innerHTML = '<img src="imagem/x.png" width="130px" alt="">'
                break;
            case 'c2':
                jogada == 1 ? verificar('c2') : 1
                c2.innerHTML = '<img src="imagem/x.png" width="130px" alt="">'
                break;
            case 'c3':
                jogada == 2 ? verificar('c3') : 2
                c3.innerHTML = '<img src="imagem/x.png" width="130px" alt="">'
                break;
            case 'c4':
                jogada == 3 ? verificar('c4') : 3
                c4.innerHTML = '<img src="imagem/x.png" width="130px" alt="">'
                break;
            case 'c5':
                jogada == 3 ? verificar('c2') : 1
                c5.innerHTML = '<img src="imagem/x.png" width="130px" alt="">' 
                break;
            case 'c6':
                jogada == 3 ? verificar('c2') : 1
                c6.innerHTML = '<img src="imagem/x.png" width="130px" alt="">'
                break;
            case 'c7':
                jogada == 3 ? verificar('c2') : 1
                c7.innerHTML = '<img src="imagem/x.png" width="130px" alt="">'
                break;
            case 'c8':
                jogada == 3 ? verificar('c2') : 1
                c8.innerHTML = '<img src="imagem/x.png" width="130px" alt="">'
                break;
            case 'c9':
                jogada == 3 ? verificar('c2') : 1
                c8.innerHTML = '<img src="imagem/x.png" width="130px" alt="">'
                break;
        }
    }
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}
computador()*/