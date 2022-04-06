let dice = document.getElementById("dice")


dice.addEventListener("click", function() {
    let fetchRes = fetch("https://api.adviceslip.com/advice");
    fetchRes.then(res =>
        res.json()).then(result => {
            document.getElementById("id").innerText = "AcDVICE #" + result.slip.id
            document.getElementById("advice").innerText = result.slip.advice
    })
    
  });