function data() {
    let fact;
    let n = document.getElementById("num").value;
  
    for (x = 1; x <= n; x++) {
     {
        fact = fact * x;
      }
    }
    document.getElementById("text").innerText = `sum of even number = ${sum}`;
  }
  