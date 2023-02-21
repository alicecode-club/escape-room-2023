let counter = 0;

function items_counter() {
    counter = counter+1;
    console.log(counter);

    if(counter == 4) {
        window.location.replace("html/last_page.html");
    }
}