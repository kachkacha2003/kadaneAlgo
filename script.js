

// function subArr(arr){
//     let count=-Infinity;
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length+1;j++){
//             let sliced=arr.slice(i,j);
//             let reduced=sliced.reduce((acc,num)=>acc+num);
//            if(reduced>count){
//             count=reduced;
//            }
//         }
//      }
//      return count;
// }
// console.log(subArr(arr))
// let arr=[-2, 1, -3, 4, -1, 2, 1, -5, 4];
// function subArr(arr){
//     let current=arr[0];
//     let global=arr[0];

//     for(let i=1;i<arr.length;i++){
//         if(current+arr[i]>arr[i]){
//             current=current+arr[i]; //-2;
//         }else{
//             current=arr[i]; // 1;
//         };

//         if(current>global){
//             global=current; //1;
//         }
//     }
//     return global;

// }
// console.log(subArr(arr))

// let array=[1,2,3,4,5,6,7,8];


// function arrayPair(arr,target){
//     let pairs=[];
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==target){
//                 pairs.push([arr[i],arr[j]]);
//             }
//         }
//     }
//     if(pairs.length>0){
//         return pairs;
//     }
//     return "wyvili ar arsebobs"
// }

// console.log(arrayPair(array,11))
