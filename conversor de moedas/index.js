    const convertButton = document.querySelector ("#button-convert")
    const selectConvert = document.querySelector(".convert-select")
    function botaoClick(){
        const inputvalue = document.querySelector(".input-convert").value
        const realValue = document.querySelector(".coin-value-real")
        const dolarValue = document.querySelector(".coin-value-usa")
    const dolarToday = 4.8548
    const euroToday = 5.32
    

    if(selectConvert.value == "dolar"){
    dolarValue.innerHTML= new Intl.NumberFormat("en-ES",{
        style: "currency",
        currency: "USD"
    }).format (inputvalue / dolarToday)
    }
     
    if(selectConvert.value == "euro"){
        dolarValue.innerHTML= new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency:"EUR"
    }).format(inputvalue / euroToday)
    }
    realValue.innerHTML=new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency: "BRL"
    }).format(inputvalue)
    
}
    
    function changeCurrency(){
        const currencyName = document.getElementById ("currency-name")
        const currencyImage = document.querySelector(".currency-img")
        if(selectConvert.value == "dolar"){      
        currencyName.innerHTML= "Dólar Americano"
        currencyImage.src = "./logo Dolar.png"
 
    }       
        if(selectConvert.value == "euro"){
            currencyName.innerHTML= "Euro"
            currencyImage.src= "./logo Euro.png"
        }
        botaoClick()
}    






selectConvert.addEventListener("change",changeCurrency);
convertButton.addEventListener("click",botaoClick);