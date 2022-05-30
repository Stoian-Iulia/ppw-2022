const butterflies = [
    {
        type: "Adonis-blue",
        color: "Blue",
        age: 25,
        weight: 0.75,
        
    },
    {
        type: "Comma",
        color: "Yellow",
        age: 15,
        weight: 0.25,
        
    },
    {
        type: "Marbled-white",
        color: "White",
        age: 16,
        weight: 0.10,
        
    },
    {
        type: "Peacock",
        color: "Orange",
        age: 10,
        weight: 0.60,
        
    },
    {
        type: "Red-admiral",
        color: "Red",
        age: 3,
        weight: 0.35,
        
    }
]

const printInfo = () => {
    let infoCont = document.getElementById('infoCont');
    infoCont.innerHTML = "";
    for(let i = 0; i < butterflies.length; i++) {                                                                                                                      
        infoCont.innerHTML += '<div class="butterfly-card border" style="margin-top: 30px; margin-bottom: 20px;">' + '<div class="butterfly-details">' + "Id: " + i + '<br>' + butterflies[i].type + '<br>' + butterflies[i].color + '<br>' + butterflies[i].age + ' days' + '<br>' +   butterflies[i].weight.toFixed(2) + ' of a gram' + '</div>' + '</div>';
    }
}
printInfo();

const remove = () => {
    let removeById = document.getElementById('removeById').value;
    butterflies.splice(removeById, 1);
    printInfo();
}

const add = () => {
    let typeInput = document.getElementById("typeInput").value;
    let colorInput = document.getElementById("colorInput").value;
    let ageInput = document.getElementById("ageInput").value;
    let weightInput = document.getElementById("weightInput").value;

    let butterflyCopy = {
        type: "",
        color: "",
        age: 0,
        weight: 0,
    }

    butterflyCopy.type = typeInput;
    butterflyCopy.color = colorInput;
    butterflyCopy.age = ageInput;
    butterflyCopy.weight = weightInput;

    butterflies.push(butterflyCopy);

    printInfo();
    let save = JSON.stringify(butterflies);
    localStorage.setItem('Evaluation', save);
}



const calcAge = () => {
    let ageResult = document.getElementById('ageResult');
    let sum = 0;
    for(let i = 0; i < butterflies.length; i++ ) {
        sum += +butterflies[i].age;
    }
    ageResult.value = sum;
}

const findByWeight = () => {
    let filteredItems = document.getElementById('filteredItems');
    filteredItems.innerHTML = "";
    let suppArray = butterflies;
    suppArray = suppArray.filter(item => item.weight > 0.11);
    for(let i = 0; i < suppArray.length; i++) {
        filteredItems.innerHTML += '<div class="butterfly-card border" style="margin-top: 20px; margin-bottom: 20px;">' + '<div class="butterfly-details">' + "Id: " + i + '<br>' + suppArray[i].age + ' days' + '<br>' + suppArray[i].color + '<br>' + suppArray[i].type + '<br>' + suppArray[i].weight + '</div>' + '</div>';
    }
}

const modifyField = () => {
    for(let i = 0; i < butterflies.length; i++) {
        if(butterflies[i].age > 5) {
            butterflies[i].weight += butterflies[i].weight / 10
            
        }
    }
    printInfo();
}