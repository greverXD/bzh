function getCentury(year) { 
    return Math.ceil(year / 100); 
  } 
   
   
  console.log(getCentury(1905));  
  console.log(getCentury(1700));  
  console.log(getCentury(2023));