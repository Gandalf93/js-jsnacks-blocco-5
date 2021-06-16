// ESERCIZIO1 
// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

//  var array = [
//      {
//          nome : 'bici1',
//          peso : 10
//      },
//      {
//          nome : 'bici2',
//          peso : 25
//      },
//      {
//          nome : 'bici3',
//          peso : 7
//      },
//      {
//          nome : 'bici4',
//          peso : 41
//      }
//  ];

//  console.log(array);
//  var pesoMin = array[0];

//  for(var i = 1; i < array.length; i++){
//      if(array[i].peso < pesoMin.peso){
//          pesoMin = array[i];
//      }
//  }

//  console.log(pesoMin);

// ESERCIZIO2
// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

//  var zucchine = [
//      {
//          varieta : 'v1',
//          peso : 2,
//          lunghezza: 2
//      },
//      {
//          varieta : 'v2',
//          peso : 5,
//          lunghezza: 1
//      },
//      {
//          varieta : 'v3',
//          peso : 6,
//          lunghezza: 3
//      },
//      {
//          varieta : 'v4',
//          peso : 11,
//          lunghezza: 2
//      },
//      {
//          varieta : 'v5',
//          peso : 16,
//          lunghezza: 1
//      },
//      {
//          varieta : 'v6',
//          peso : 1,
//          lunghezza: 1
//      },
//      {
//          varieta : 'v7',
//          peso : 3,
//          lunghezza: 3 
//      },
//      {
//          varieta : 'v8',
//          peso : 9,
//          lunghezza: 1
//      },
//      {
//          varieta : 'v9',
//          peso : 23,
//          lunghezza: 2
//      },
//      {
//          varieta : 'v10',
//          peso : 4,
//          lunghezza: 4
//      }
//  ];

//  var totale = 0

//  for (i = 0; i< zucchine.length;i++){
//      var totale = totale + zucchine[i].peso;
//  }

//  console.log(totale);


// ESERCIZIO 3
// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine

// var zucchine = [
//     {
//         varieta : 'v1',
//         peso : 2,
//         lunghezza: 7
//     },
//     {
//         varieta : 'v2',
//         peso : 5,
//         lunghezza: 16
//     },
//     {
//         varieta : 'v3',
//         peso : 6,
//         lunghezza: 20
//     },
//     {
//         varieta : 'v4',
//         peso : 11,
//         lunghezza: 2
//     },
//     {
//         varieta : 'v5',
//         peso : 16,
//         lunghezza: 1
//     },
//     {
//         varieta : 'v6',
//         peso : 1,
//         lunghezza: 9
//     },
//     {
//         varieta : 'v7',
//         peso : 3,
//         lunghezza: 3 
//     },
//     {
//         varieta : 'v8',
//         peso : 9,
//         lunghezza: 35
//     },
//     {
//         varieta : 'v9',
//         peso : 23,
//         lunghezza: 2
//     },
//     {
//         varieta : 'v10',
//         peso : 4,
//         lunghezza: 40
//     }
// ];

// var piccolo = [];
// var grande = [];

// for (var i = 0; i < zucchine.length; i++){
//  if(zucchine[i].lunghezza < 15){
//    piccolo.push(zucchine[i]);
//  }
//  else{
//    grande.push(zucchine[i]);
//  }
// }

// var totale = 0

// for (i = 0; i < piccolo.length; i++){
//     var totalePiccolo = totale + piccolo[i].peso;
// }

// for (i = 0; i < grande.length; i++){
//     var totaleGrande = totale + grande[i].peso;
// }


// console.log(piccolo);
// console.log(grande);

// console.log('peso array piccolo:  ' + totalePiccolo);
// console.log('peso array grande:  ' + totaleGrande);
 

    

// CORREZIONE IN CLASSE


var zucchine = [
    {
        varieta : 'v1',
        peso : 2,
        lunghezza: 7
    },
    {
        varieta : 'v2',
        peso : 5,
        lunghezza: 16
    },
    {
        varieta : 'v3',
        peso : 6,
        lunghezza: 20
    },
    {
        varieta : 'v4',
        peso : 11,
        lunghezza: 2
    },
    {
        varieta : 'v5',
        peso : 16,
        lunghezza: 1
    },
    {
        varieta : 'v6',
        peso : 1,
        lunghezza: 9
    },
    {
        varieta : 'v7',
        peso : 3,
        lunghezza: 3 
    },
    {
        varieta : 'v8',
        peso : 9,
        lunghezza: 35
    },
    {
        varieta : 'v9',
        peso : 23,
        lunghezza: 2
    },
    {
        varieta : 'v10',
        peso : 4,
        lunghezza: 40
    }
];



var piccolo = [];
var grande = [];
var totPiccolo = 0;
var totGrande = 0;

for(var i = 0; i < zucchine.length; i++){
    if(zucchine[i].lunghezza < 15){
        piccolo.push(zucchine[i]);
        totPiccolo = totPiccolo + zucchine[i].peso;
    }else{
        grande.push(zucchine[i]);
        totGrande = totGrande + zucchine[i].peso;
    }
}

console.log(piccolo, grande);
console.log(totPiccolo);
console.log(totGrande);



