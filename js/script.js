let menuItems = document.querySelectorAll(".menu .menu-item"),
    item2 = menuItems[2];
    menu = document.querySelector(".menu"),
    item5 = document.createElement("li"),
    title = document.getElementById("title"),
    promptApple = document.querySelector(".prompt"),
    advertising = document.querySelector('.adv');
    
    console.log(menu);

menu.removeChild(menuItems[2]);
menu.insertBefore(item2, menuItems[1]);
item5.classList.add("menu-item");
menu.appendChild(item5);
item5.textContent = "Пятый пункт";

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.innerHTML = "Мы продаем только подлинную технику Apple";

advertising.remove();

let attitude = prompt("Your attitude to Apple technology?");
promptApple.textContent = attitude;