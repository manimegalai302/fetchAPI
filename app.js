function fetchAbilityName() {
    const url='https://pokeapi.co/api/v2/ability';

    return fetch(url)
    .then(res => {
       return res.json();
    })

    .then(msg => {

     const ability=msg.results;
     let selectedItem=document.getElementById("selected");

     ability.forEach((item)=>{
     let option=document.createElement("option");
     option.innerText = item.name;
     selectedItem.appendChild(option)
     })

    })
    .catch(error => {
     console.log('Error', error);
    });
 }

fetchAbilityName();







