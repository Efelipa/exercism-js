const dayRate = dayPerHour => dayPerHour * 8;
console.log(dayRate(89)) 

const daysInBudget = (budget, dayPerHour) => Math.floor(budget/dayRate(dayPerHour));

console.log(daysInBudget(20000, 89));

//A menudo, los clientes del trabajador independiente los contratan para proyectos que abarcan varios meses. En estos casos, el autónomo decide ofrecer un descuento por cada mes completo, y los días restantes se facturan a tarifa diaria. Cada mes tiene 22 días facturables. Ayúdelos a estimar el costo de dichos proyectos, dada una tarifa por hora, la cantidad de días que dura el proyecto y una tasa de descuento mensual. El descuento siempre se pasa como un número, donde 42% se convierte en 0.42. El resultado debe redondearse al número entero más próximo.
const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
    const monthlyRate = dayRate(ratePerHour) * 22;
    const daysExceded = (numDays % 22);
    const exactlyMonths = Math.floor((numDays-daysExceded)/22);
    const monthlyDiscount = (monthlyRate*exactlyMonths) * (1 - discount); 
    const newPrice = Math.ceil(((monthlyDiscount)) + (daysExceded * dayRate(ratePerHour)));
    return newPrice; 
}
console.log(priceWithMonthlyDiscount(29.654321, 155, 0.2547))