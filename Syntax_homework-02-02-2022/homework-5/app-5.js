<<<<<<< HEAD

function  extractCurrencyValue(str) {
    str = String(str).trim()
    
    return str.replace(/[^0-9\.]+/g,"")
  }
  

=======

function  extractCurrencyValue(str) {
    str = String(str).trim()
    
    return str.replace(/[^0-9\.]+/g,"")
  }
  

>>>>>>> b4ae29b0e94e22a6fbe63c9d46edcd258346bb69
  alert(extractCurrencyValue('$120'));