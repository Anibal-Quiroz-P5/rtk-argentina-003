/* var i=0;

while(i<= 5) {
  console.log("soy el número" + i);
  i++;
}
console.log("conté hasta " + (i-1));
console.log("conté " + i + " números"); */


const compatibleList = [
  {"category":"SUV y Crossovers","year":2021,"model":"Corolla Cross","version":"XLI","driveline":"","name":"Corolla Cross","sku":"corolla_cross_u_xli_2021"},
  {"category":"SUV y Crossovers","year":2021,"model":"Corolla Cross","version":"XEI","driveline":"","name":"Corolla Cross","sku":"corolla_cross_u_xei_2021"},
  {"category":"SUV y Crossovers","year":2021,"model":"Corolla Cross","version":"SEG","driveline":"","name":"Corolla Cross","sku":"corolla_cross_u_seg_2021"},
  {"category":"SUV y Crossovers","year":2021,"model":"Corolla Cross","version":"XEI HV","driveline":"HV","name":"Corolla Cross HV","sku":"corolla_cross_hv_xei hv_2021"},
  {"category":"SUV y Crossovers","year":2021,"model":"Corolla Cross","version":"SEG HV","driveline":"HV","name":"Corolla Cross HV","sku":"corolla_cross_hv_seg hv_2021"}
];

// Recorriendo el array con forEach
compatibleList.forEach(item => {
  console.log(item);
});