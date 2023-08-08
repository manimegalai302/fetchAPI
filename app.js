async function fetchData(url){
  try{
    let response= await fetch(url); 
    if(!response.ok){
      console.log(response);
    }
    return response.json();
  }
  catch(error){
    console.log(error.message);
}  
} 

async function fetchabilityName(){
  const url='https://pokeapi.co/api/v2/ability';
  try{
    const data= await fetchData(url);  
  
    let selectedItem=document.getElementById("selected");
    let paraEle=document.getElementById("para");
    const ability=data.results;
    ability.forEach((item)=>{
         let option=document.createElement("option");
         option.innerText = item.name;
         selectedItem.appendChild(option)
         });

         selectedItem.addEventListener('change',async()=>{
           paraEle.innerText=" ";
           let selectedName=selectedItem.value;
           const selectedAbility=ability.find(item1 => item1.name === selectedName)

           if(selectedAbility){
            const urlData= await fetchData(selectedAbility.url)
            console.log(urlData)
            let para1=document.createElement("li");
       
            para1.innerHTML=urlData.flavor_text_entries[0].flavor_text;
            paraEle.appendChild(para1);
           }
          })
  }
  catch(error){
    let err=document.getElementById("errormsg")
    err.style.display="block"
};
}
fetchabilityName();




 