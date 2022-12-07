document.body.style.backgroundColor = 'grey';
let userNom = document.getElementById('nom');
let userPrenom = document.getElementById('prenom');
let userAge = document.getElementById('age');
let addBtn = document.getElementById('btnUser');
let userList = document.getElementById('userList')
let userTab = document.getElementById("userTable");
let div = document.createElement('div');
let table = [];

class Users{
    constructor(lName, fName, age){
        this.lName= lName;
        this.fName= fName;
        this.age= age;
    }

    get firstName(){
        return this.lName;
    }
    get lastName(){
        return this.fName;
    }
    get userAge(){
        return this.age;
    }
}

function addUsers() {
    let n = userNom.value;
    let p = userPrenom.value;
    let a = userAge.value;
    let span = document.createElement('span');
    if(n.length == 0 || p.length == 0 || a.length == 0){
        alert("veuillez remplir tous les champs")
    }else {
        let row = userTab.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        row.appendChild(span);
        cell1.textContent = n;
        cell2.textContent = p;
        cell3.textContent = a;
        let newUser = new Users(n,p,a);
        table.push(newUser);
        console.log(table);
        let removeBtn = document.createElement("button");
        let txt = document.createTextNode("remove");
        removeBtn.className = "close";
        removeBtn.appendChild(txt);
        span.appendChild(removeBtn);
        let close = document.getElementsByClassName("close");
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            let parentEl = this.parentElement.parentElement;
            parentEl.remove();
        }
        }
    }
}

// remove all elements from the table after confirmation
function removeAll(){
    let userTable = document.getElementById('userTable');
    if(confirm('delete all users?')){userTable.innerHTML="";
    table = [];
    }
}




// same functionality as above, but in ordered list instead of a table

// function addUsers(){
//     let ul = document.getElementById("list");               
//     let li = document.createElement("li");
//     let n = userNom.value;
//     let p = userPrenom.value;
//     let a = userAge.value;
//     if(n.length == 0 || p.length == 0 || a.length == 0){
//         alert('fill out the fields');
//     }else {
//     li.appendChild(document.createTextNode(n+"   "+p+"   "+a));
//     ul.appendChild(li);
//     li.className="li";
//     //button to remove an item from the list
//     let removeBtn = document.createElement("button");
//     let x = document.createTextNode("remove");
//     removeBtn.className = "close";
//     removeBtn.appendChild(x);
//     li.appendChild(removeBtn);
//     let close = document.getElementsByClassName("close");
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         let parentEl = this.parentElement;
//         parentEl.remove();
//       }
//     }    
//     }
// }
// // remove all elements from the table after confirmation
// function removeAll(){
//     let userList = document.getElementById('list');
//     if(confirm('delete all users?')){userList.innerHTML="";
//     table = [];
//     }
// }
