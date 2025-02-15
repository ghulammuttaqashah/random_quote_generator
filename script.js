document.addEventListener("DOMContentLoaded", function(){
    const text=document.getElementById("txt");
    const getqoute=document.getElementById("gt");
    const ath=document.getElementById("ath");

    getqoute.addEventListener("click", async()=>{
        try{
            const response=await fetch('https://dummyjson.com/quotes/random')
            const data=await response.json();
            text.textContent=data.quote;
            ath.textContent=data.author
        }
        catch(error){
            text.textContent="failed to fetch"
        }
    })
})