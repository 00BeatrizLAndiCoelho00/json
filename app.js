/*_________________________________________________________________________________________________________________________________________________//

    objective : understand array concepts
    date 24/2/2023
    Autor : A. Beatriz Landi
    Ver 1.0
//_________________________________________________________________________________________________________________________________________________*/

//   [] - this means we´re playing with arrays data
//   {} - this means we´re playing with JSON data

//Creating an array
//arays aways return objects

const listaNomes = ['gigi','maria','luis','caio', 'camila'];
const listaProdutos = ['teclado','mouse,','monitor','pc','fone', 'impressora', 'scaner','webcan'];
const ListaProdutosJSON = {};
//show the array elements
//console.log(listaNome[0])
//console.log(listaNome.length)


const manipulandoElementos = function(){

//while

let cont = 0;
let qntdItens = listaNomes.length;

while(cont < qntdItens){
    console.log(`Nome : ${listaNomes[cont]}`);
    cont ++    
}

//For
let qntdNomes = listaNomes.length;

for(let cont = 0; cont < qntdNomes; cont ++){

    console.log(`Nome ${listaNomes[cont]}`)
}

//its impossible make an foer each in a  json element 
//for each
listaNomes.forEach(function(nome){

    console.log(`Nome :${nome}`)
});

//_____________________________________________________________add an exclude in the end of an array__________________________________________________________________________________//
//push
//ADD New elements in the end of array
listaNomes.push('Alexandre')
listaNomes.push('Alex','lucas')
console.log(listaNomes)

//pop
//Take of the last element of an array
listaNomes.pop()
console.log(listaNomes)

//_____________________________________________________________add an exclude  in the start of an array__________________________________________________________________________________//

//unshift
//ADD a new element in the start of an array(and push the previewd elements )
listaNomes.unshift('Maria Ana', 'Leo nardo')
console.log(listaNomes)

//shift
//remove a new element in the start of an array(and push the previewd elements )
listaNomes.shift()
console.log(listaNomes)

};

const filtrandoElementos = function(){
//_____________________________________________________________show an specific item in an array__________________________________________________________________________________//

//indexof
//show the numeric position of an element in an array, if the retun number is bigger than 0 the element exist, else the element didint exist

//element exist
console.log(listaProdutos.indexOf('fone'))

if (listaProdutos.indexOf('fone')>= 0 ){
    console.log('item found')
}

//elemnd didnt exist
console.log(listaProdutos.indexOf('ababa'))

if (listaProdutos.indexOf('ababa') >= 0 ){
    console.log('item found')
}else{
 console.log('we cant find the item')
}

//____________________________________________________________________Clone the array_____________________________________________________________________________________________//

//slice
//alowe us to create an arrray clone
const novosprodutos = listaProdutos.slice(2,5)

console.log(listaProdutos)
console.log(novosprodutos)


};

const removerElementos = function(nomeProduto){
    //_____________________________________________Remove especif elements in an array_______________________________________________________________________________________________//

 let nome = nomeProduto;
 let indice = listaProdutos.indexOf(nome);
 let status;

 if(indice >=0){
    //splice remove an element of array by index 
    listaProdutos.splice(indice,1);
    status = true
 }else{
    status= false
 }

 return status
};

//console.log(removerElementos('pc')) 
//console.log(listaProdutos)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const removerElemento = function(array , nomeItem){
    //_____________________________________________Remove especif elements in an array_______________________________________________________________________________________________//

 let newList = array.slice()

 let nome = nomeProduto;
 let indice = array.indexOf(nome);
 let status;

 if(indice >= 0){

   newList.splice(indice,1)
   status =true

 }else{
    status = false
 }

 if(status){
    return newList
 }else{
    return status
 }
}

//console.log(removerElemento.listaProdutos,'pc')
//console.log(ne)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//toda api deve retornar um formato json(mesmo que dentro do jasin tenha arrays)

const listagemProdutos  = function (){

    let ListaProdutosJSON ={}

    let listProdutos = [

        
        { nome : 'Teclado DELL', valor:200, quantidade: 50, },
        { nome : 'Monitor DELL', valor:1000, quantidade: 70 },
        { nome : 'Mouse DELL', valor:100, quantidade: 350 }


    ];
    
    let listCores =['Branco', 'Preto','Cinza'];
    let listTipoTeclado = ['mecanico','semimecanico', 'mebrana'];
    let listTipoMonitor = ['lcd','full-hd', '4k','OLED'];

//teclado
    listProdutos[0].cores = listCores;
    listProdutos[0].tipo =listTipoTeclado;

//monitor
    listProdutos[1].cores=listCores;
    listProdutos[1].tipo =listTipoMonitor;

//teclado
    listProdutos[2].cores = listCores;

    ListaProdutosJSON.produtos = listaProdutos;
    ListaProdutosJSON.clientes = listaNomes;

    ListaProdutosJSON.produtos = listProdutos

    
    
   // console.log(ListaProdutosJSON.produtos[1].nome);
   // console.log(ListaProdutosJSON.produtos[1].valor);
    //console.log(ListaProdutosJSON.produtos[1].cores[3]);

    //for ecah so vai se for array

    // while (){
         
     //}
    //console.log(ListaProdutosJSON.produtos[0]);

//retorn od dadodos de produto
    ListaProdutosJSON.produtos.forEach(function(dadosProduto){
        console.log('Nome   '+ dadosProduto.nome)
        console.log('valor   '+ dadosProduto.valor)

        //retorna todas as cores existentes para cada produto
        dadosProduto.cores.forEach(function(dadosCores){
            console.log('**Cores  '+ dadosCores)


            if(dadosProduto.tipo != undefined){
                dadosProduto.tipo.forEach(function(dadosTipo){
                    console.log('***'+dadosTipo)
                })
            }

        });
    });

   
    
}


listagemProdutos();










