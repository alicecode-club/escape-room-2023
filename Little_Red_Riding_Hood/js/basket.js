let counter = 0;

function items_counter() {
    counter = counter+1;
    console.log(counter);

    if(counter == 1) {
        document.getElementById("items_counter").innerHTML = "Items counter: 1/4";
    }

    if(counter == 2) {
        document.getElementById("items_counter").innerHTML = "Items counter: 2/4";
    }

    if(counter == 3) {
        document.getElementById("items_counter").innerHTML = "Items counter: 3/4";
    }

    if(counter == 4) {
        document.getElementById("items_counter").innerHTML = "Items counter: 4/4";
        /*window.location.replace("html/last_page.html");*/
    }
}