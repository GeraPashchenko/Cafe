function Salad() {

        $("#ElementsToInsert").empty();
        sessionStorage.clear();



        var elementsToInsert = document.getElementById("ElementsToInsert");

        for (var image, i = 1; i != 8; i++) {

                var imgdiv = document.createElement("div");
                imgdiv.id = "imgdiv";

                var button = document.createElement("button");

                var descriptionSpan = document.createElement("span");
                var descriptionPrice = document.createElement("span");
                descriptionSpan.className = "description-span";
                descriptionPrice.className = "description-price";

                var spandiv = document.createElement("div");
                spandiv.id = "spandiv";

                descriptionSpan.className = "description-span";
                descriptionPrice.className = "description-price";
                spandiv.insertAdjacentElement("afterbegin", descriptionPrice);
                spandiv.insertAdjacentElement("afterbegin", descriptionSpan);

                switch (i) {
                        case i = 1:

                                descriptionSpan.textContent = "Snowman";
                                descriptionPrice.textContent = "5$";
                                break;

                        case i = 2:

                                descriptionSpan.textContent = "Peach";
                                descriptionPrice.textContent = "2$";
                                break;

                        case i = 3:

                                descriptionSpan.textContent = "Sea-tecila";
                                descriptionPrice.textContent = "2$";
                                break;

                        case i = 4:

                                descriptionSpan.textContent = "Treveller";
                                descriptionPrice.textContent = "1.6$";
                                break;

                        case i = 5:

                                descriptionSpan.textContent = "B & S";
                                descriptionPrice.textContent = "2$";
                                break;

                        case i = 6:

                                descriptionSpan.textContent = "Royalty";
                                descriptionPrice.textContent = "4$";
                                break;

                        case i = 7:

                                descriptionSpan.textContent = "Vegetarian";
                                descriptionPrice.textContent = "3$";
                                break;

                }

                button.className = "Bar-buttons";
                button.id = "Salad-button" + i;
                button.innerHTML = "To Order";

                imgdiv.insertAdjacentElement("afterbegin", button);
                button.insertAdjacentElement("beforebegin", spandiv);


                image = new Image;
                image.className = "Bar-images";
                image.src = "img/salad/salad" + i + ".jpg";


                imgdiv.insertAdjacentElement("afterbegin", image);
                elementsToInsert.insertAdjacentElement("afterbegin", imgdiv);




                var obj = {}

                obj.img = image.src;
                obj.descriptionPrice = descriptionPrice.textContent;
                obj.descriptionSpan = descriptionSpan.textContent;

                obj = sessionStorage.setItem(button.id, JSON.stringify(obj));

                $('#Salad-button' + i).on('click', function (event) {

                        MakeOrder(event.target.id);
                        OrdersNum();
                });
        }
}

function Soda() {

        $("#ElementsToInsert").empty();
        sessionStorage.clear();



        var elementsToInsert = document.getElementById("ElementsToInsert");

        for (var image, i = 1; i != 7; i++) {

                var imgdiv = document.createElement("div");
                imgdiv.id = "imgdiv";

                var button = document.createElement("button");

                var descriptionSpan = document.createElement("span");
                var descriptionPrice = document.createElement("span");
                descriptionSpan.className = "description-span";
                descriptionPrice.className = "description-price";

                var spandiv = document.createElement("div");
                spandiv.id = "spandiv";

                descriptionSpan.className = "description-span";
                descriptionPrice.className = "description-price";
                spandiv.insertAdjacentElement("afterbegin", descriptionPrice);
                spandiv.insertAdjacentElement("afterbegin", descriptionSpan);

                switch (i) {
                        case i = 1:

                                descriptionSpan.textContent = "Guiness";
                                descriptionPrice.textContent = "1.2$";
                                break;

                        case i = 2:

                                descriptionSpan.textContent = "Foal cherry";
                                descriptionPrice.textContent = "2$";
                                break;

                        case i = 3:

                                descriptionSpan.textContent = "Foal orange";
                                descriptionPrice.textContent = "2$";
                                break;

                        case i = 4:

                                descriptionSpan.textContent = "Coca-cola";
                                descriptionPrice.textContent = "1$";
                                break;

                        case i = 5:

                                descriptionSpan.textContent = "R-whites";
                                descriptionPrice.textContent = "2$";
                                break;

                        case i = 6:

                                descriptionSpan.textContent = "Lemmy";
                                descriptionPrice.textContent = "2$";
                                break;

                }

                button.className = "Bar-buttons";
                button.id = "Soda-button" + i;
                button.innerHTML = "To Order";

                imgdiv.insertAdjacentElement("afterbegin", button);
                button.insertAdjacentElement("beforebegin", spandiv);


                image = new Image;
                image.className = "Bar-images";
                image.src = "img/soda/soda" + i + ".jpg";


                imgdiv.insertAdjacentElement("afterbegin", image);
                elementsToInsert.insertAdjacentElement("afterbegin", imgdiv);




                var obj = {}

                obj.img = image.src;
                obj.descriptionPrice = descriptionPrice.textContent;
                obj.descriptionSpan = descriptionSpan.textContent;

                var obj = sessionStorage.setItem(button.id, JSON.stringify(obj));




                $('#Soda-button' + i).on('click', function (event) {

                        MakeOrder(event.target.id);
                        OrdersNum();
                });
        }
}

function Pizza() {

        $("#ElementsToInsert").empty();
        sessionStorage.clear();



        var elementsToInsert = document.getElementById("ElementsToInsert");

        for (var image, i = 1; i != 8; i++) {

                var imgdiv = document.createElement("div");
                imgdiv.id = "imgdiv";

                var button = document.createElement("button");

                var descriptionSpan = document.createElement("span");
                var descriptionPrice = document.createElement("span");
                descriptionSpan.className = "description-span";
                descriptionPrice.className = "description-price";

                var spandiv = document.createElement("div");
                spandiv.id = "spandiv";

                descriptionSpan.className = "description-span";
                descriptionPrice.className = "description-price";
                spandiv.insertAdjacentElement("afterbegin", descriptionPrice);
                spandiv.insertAdjacentElement("afterbegin", descriptionSpan);

                switch (i) {
                        case i = 1:

                                descriptionSpan.textContent = "Mystic";
                                descriptionPrice.textContent = "5$";
                                break;

                        case i = 2:

                                descriptionSpan.textContent = "Cauliflower";
                                descriptionPrice.textContent = "2$";
                                break;

                        case i = 3:

                                descriptionSpan.textContent = "Fabulous";
                                descriptionPrice.textContent = "3$";
                                break;

                        case i = 4:

                                descriptionSpan.textContent = "Portobello";
                                descriptionPrice.textContent = "4$";
                                break;

                        case i = 5:

                                descriptionSpan.textContent = "Pineapple";
                                descriptionPrice.textContent = "5$";
                                break;

                        case i = 6:

                                descriptionSpan.textContent = "Grilled";
                                descriptionPrice.textContent = "4$";
                                break;

                        case i = 7:

                                descriptionSpan.textContent = "Dream";
                                descriptionPrice.textContent = "7$";
                                break;

                }

                button.className = "Bar-buttons";
                button.id = "Pizza-button" + i;
                button.innerHTML = "To Order";

                imgdiv.insertAdjacentElement("afterbegin", button);
                button.insertAdjacentElement("beforebegin", spandiv);


                image = new Image;
                image.className = "Bar-images";
                image.src = "img/pizza/pizza" + i + ".jpg";


                imgdiv.insertAdjacentElement("afterbegin", image);
                elementsToInsert.insertAdjacentElement("afterbegin", imgdiv);




                var obj = {}

                obj.img = image.src;
                obj.descriptionPrice = descriptionPrice.textContent;
                obj.descriptionSpan = descriptionSpan.textContent;

                var obj = sessionStorage.setItem(button.id, JSON.stringify(obj));




                $('#Pizza-button' + i).on('click', function (event) {

                        MakeOrder(event.target.id);
                        OrdersNum();
                });
        }
}

function Coffee() {

        $("#ElementsToInsert").empty();
        sessionStorage.clear();



        var elementsToInsert = document.getElementById("ElementsToInsert");

        for (var image, i = 1; i != 7; i++) {

                var imgdiv = document.createElement("div");
                imgdiv.id = "imgdiv";

                var button = document.createElement("button");

                var descriptionSpan = document.createElement("span");
                var descriptionPrice = document.createElement("span");
                descriptionSpan.className = "description-span";
                descriptionPrice.className = "description-price";

                var spandiv = document.createElement("div");
                spandiv.id = "spandiv";

                descriptionSpan.className = "description-span";
                descriptionPrice.className = "description-price";
                spandiv.insertAdjacentElement("afterbegin", descriptionPrice);
                spandiv.insertAdjacentElement("afterbegin", descriptionSpan);

                switch (i) {
                        case i = 1:

                                descriptionSpan.textContent = "Latte";
                                descriptionPrice.textContent = "1.2$";
                                break;

                        case i = 2:

                                descriptionSpan.textContent = "With cinnam";
                                descriptionPrice.textContent = "1.5$";
                                break;

                        case i = 3:

                                descriptionSpan.textContent = "Coffee light";
                                descriptionPrice.textContent = "1$";
                                break;

                        case i = 4:

                                descriptionSpan.textContent = "Vergnano";
                                descriptionPrice.textContent = "2$";
                                break;

                        case i = 5:

                                descriptionSpan.textContent = "With cream";
                                descriptionPrice.textContent = "2$";
                                break;

                        case i = 6:

                                descriptionSpan.textContent = "Americano";
                                descriptionPrice.textContent = "1$";
                                break;

                }

                button.className = "Bar-buttons";
                button.id = "Coffee-button" + i;
                button.innerHTML = "To Order";

                imgdiv.insertAdjacentElement("afterbegin", button);
                button.insertAdjacentElement("beforebegin", spandiv);


                image = new Image;
                image.className = "Bar-images";
                image.src = "img/coffee/coffee" + i + ".jpg";


                imgdiv.insertAdjacentElement("afterbegin", image);
                elementsToInsert.insertAdjacentElement("afterbegin", imgdiv);




                var obj = {}

                obj.img = image.src;
                obj.descriptionPrice = descriptionPrice.textContent;
                obj.descriptionSpan = descriptionSpan.textContent;

                var obj = sessionStorage.setItem(button.id, JSON.stringify(obj));




                $('#Coffee-button' + i).on('click', function (event) {

                        MakeOrder(event.target.id);
                        OrdersNum();
                });
        }
}

function Bakery() {

        $("#ElementsToInsert").empty();
        sessionStorage.clear();



        var elementsToInsert = document.getElementById("ElementsToInsert");

        for (var image, i = 1; i != 9; i++) {

                var imgdiv = document.createElement("div");
                imgdiv.id = "imgdiv";

                var button = document.createElement("button");

                var descriptionSpan = document.createElement("span");
                var descriptionPrice = document.createElement("span");
                descriptionSpan.className = "description-span";
                descriptionPrice.className = "description-price";

                var spandiv = document.createElement("div");
                spandiv.id = "spandiv";

                descriptionSpan.className = "description-span";
                descriptionPrice.className = "description-price";
                spandiv.insertAdjacentElement("afterbegin", descriptionPrice);
                spandiv.insertAdjacentElement("afterbegin", descriptionSpan);

                switch (i) {
                        case i = 1:

                                descriptionSpan.textContent = "Roses";
                                descriptionPrice.textContent = "3$";
                                break;

                        case i = 2:

                                descriptionSpan.textContent = "Puncake";
                                descriptionPrice.textContent = "2$";
                                break;

                        case i = 3:

                                descriptionSpan.textContent = "Nuts-cream";
                                descriptionPrice.textContent = "3$";
                                break;

                        case i = 4:

                                descriptionSpan.textContent = "Flamingo";
                                descriptionPrice.textContent = "3$";
                                break;

                        case i = 5:

                                descriptionSpan.textContent = "Aero";
                                descriptionPrice.textContent = "5$";
                                break;

                        case i = 6:

                                descriptionSpan.textContent = "Auger";
                                descriptionPrice.textContent = "2$";
                                break;

                        case i = 7:

                                descriptionSpan.textContent = "Triplex";
                                descriptionPrice.textContent = "1.5$";
                                break;

                        case i = 8:

                                descriptionSpan.textContent = "Which";
                                descriptionPrice.textContent = "3$";
                                break;

                }

                button.className = "Bar-buttons";
                button.id = "Bakery-button" + i;
                button.innerHTML = "To Order";

                imgdiv.insertAdjacentElement("afterbegin", button);
                button.insertAdjacentElement("beforebegin", spandiv);


                image = new Image;
                image.className = "Bar-images";
                image.src = "img/bakery/bakery" + i + ".jpg";


                imgdiv.insertAdjacentElement("afterbegin", image);
                elementsToInsert.insertAdjacentElement("afterbegin", imgdiv);




                var obj = {}

                obj.img = image.src;
                obj.descriptionPrice = descriptionPrice.textContent;
                obj.descriptionSpan = descriptionSpan.textContent;

                var obj = sessionStorage.setItem(button.id, JSON.stringify(obj));




                $('#Bakery-button' + i).on('click', function (event) {

                        MakeOrder(event.target.id);
                        OrdersNum();

                });

        }

}

