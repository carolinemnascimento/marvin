function tempo(data1, data2, unidade){
 data1 = new Date(data1);
 data2 = new Date(data2);
 switch(unidade){
      case "dia":
      var periodo = Math.abs(data1.getTime() -
      data2.getTime())/1000/60/60/24;
      return Math.round(periodo);
      break;
      case "mes":
      var periodo = Math.abs(data1.getTime() -
      data2.getTime())/1000/60/60/24/30;
      return Math.round(periodo);
      break;
      default:
      var periodo = Math.abs(data1.getTime() -
      data2.getTime())/1000/60/60/24/365;
      return Math.round(periodo);
      break;
 }
}    