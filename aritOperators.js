function timeToMixJuice(name) {
    switch(name) {
        case "Pure Strawberry Joy":
            return 3;
            break;
        case "Energizer":
        case "Green Garden":
            return 1.5;
            break;
        case "Tropical Island":
            return 3;
            break;
        default:
            return 2.5;
    }
}
console.log(timeToMixJuice('Tropical Island'));

// function limesToCut(wedgesNeeded, limes) {
//     let wedges = 0;
//     let totalWedges = 0;
//     let i = 0;
//     while((i < limes.length) && (totalWedges <= wedgesNeeded)) {
//         switch (limes[i]) {
//             case 'small':
//                 wedges = 6;
//                 break;
//             case 'medium':
//                 wedges = 8;
//                 break;
//             case 'large':
//                 wedges = 10;
//                 break;
//             default:
//                 wedges = 0;
//         }
//     totalWedges += wedges;
//     if(wedgesNeeded !== 0) {
//     i++;  
//     }
//     }
//     return i;
// }
// console.log(limesToCut(0, ['small', 'large', 'medium']));
const orders = ['Pure Strawberry Joy',
    'Pure Strawberry Joy',
    'Vitality',
    'Tropical Island',
    'All or Nothing',
    'All or Nothing',
    'All or Nothing',
    'Green Garden',
    'Limetime',
];
function remainingOrders(timeLeft, orders) {
    let i = 0;
    do {
        const timeToMix = timeToMixJuice(orders[i]);
        if (timeLeft >= timeToMix) {
            timeLeft -= timeToMix;
            orders.shift();
        } else {
            i++;
        }
    } while (i < orders.length);
    return orders
}
console.log(remainingOrders(13, orders));
