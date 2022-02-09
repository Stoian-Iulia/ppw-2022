
function  extractCurrencyValue(str) {
    str = String(str).trim()
    
    return str.replace(/[^0-9\.]+/g,"")
  }
  

  alert(extractCurrencyValue('$120'));