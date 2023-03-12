let counter = 1;
let items_list = [0,0,0,0];

function items_counter(id) {
    console.log(counter);


    console.log(id);
    let item;

    if(id === 'grandmother') {
        item = 0;
    }

    if(id === 'wolf') {
        item = 1;
    }

    if(id === 'cape') {
        item = 2;
    }

    if(id === 'book') {
        item = 3;
    }



    if((counter == 1) && (items_list[item] == 0)) {
        document.getElementById("items_counter").innerHTML = "<span> Items counter: 1/4 </span>";
        items_list[item] = 1;
        alert(`You found the ${id}!!`);
        counter = counter+1;
        document.getElementById(id).style.display = "none";
    }

    if((counter == 2) && (items_list[item] == 0)) {
        document.getElementById("items_counter").innerHTML = "<span> Items counter: 2/4 </span>";
        items_list[item] = 1;
        alert(`You found the ${id}!!`);
        counter = counter+1;
        document.getElementById(id).style.display = "none";
    }

    if((counter == 3) && (items_list[item] == 0)) {
        document.getElementById("items_counter").innerHTML = "<span> Items counter: 3/4 </span>";
        items_list[item] = 1;
        alert(`You found the ${id}!!`);
        counter = counter+1;
        document.getElementById(id).style.display = "none";
    }

    if((counter == 4) && (items_list[item] == 0)) {
        document.getElementById("items_counter").innerHTML = "<span> Items counter: 4/4 </span>";
        items_list[item] = 1;
        alert(`You found the ${id}!!`);
        counter = counter+1;
        document.getElementById(id).style.display = "none";
        window.location.assign("../html/last_page.html");
    }
    if(id === 'wolf'){
        document.getElementById('wolf_tail').style.display = "none";
    }

    console.log(items_list);
    console.log(item);
}