console.log("hello world log");

async function loadEquipments(){
    const response = await 
        fetch('/api/equipments');
    const equipments = await response.json();
    
    console.log("equipments response: ", equipments.response);  
    
    const table = document.querySelector('#equipment-table');
}

loadEquipments();