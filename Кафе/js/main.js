

function ShowOrder() {


    $("#ElementsToInsert").empty();
    var elementsToInsert = document.getElementById("ElementsToInsert");
    var Sum = document.getElementById("Sum");
    var OrderSum = 0;

    GetOrderList = JSON.parse(localStorage.getItem("Order List"));//получить объект и преобразовать из формата JSON
    //получили массив строк

    GetOrderList.forEach(function (element,index) {
        element = JSON.parse(element);//преобразовываем каждую строку отдельно в объект и работаем с ним

        var button = document.createElement("button");
        button.className = "Delete-buttons";
        button.id = "Delete-button" + index;
        // button.innerHTML = "Delete";

        
        image = new Image;
        image.className = "Bar-images";
        image.src = element.img;

        var imgdivOrder = document.createElement("div");
        imgdivOrder.id = "imgdivOrder";

        var spandivOrder = document.createElement("div");
        spandivOrder.id = "spandivOrder";

        var Price_Trash_div = document.createElement("div");
        Price_Trash_div.id = "Price_Trash_div";

        var descriptionSpanOrder = document.createElement("span");
        descriptionSpanOrder.textContent = element.descriptionSpan;

        var descriptionPriceOrder = document.createElement("span");
        descriptionPriceOrder.textContent = element.descriptionPrice;

        descriptionSpanOrder.className = "description-span-Order";
        descriptionPriceOrder.className = "description-price-Order";

        Price_Trash_div.insertAdjacentElement("beforeend", button);
        Price_Trash_div.insertAdjacentElement("afterbegin", descriptionPriceOrder);

        spandivOrder.insertAdjacentElement("afterbegin", Price_Trash_div);
        spandivOrder.insertAdjacentElement("afterbegin", descriptionSpanOrder);
        
        imgdivOrder.insertAdjacentElement("afterbegin", spandivOrder);
        imgdivOrder.insertAdjacentElement("afterbegin", image);
        

        elementsToInsert.insertAdjacentElement("afterbegin", imgdivOrder);

        var str = descriptionPriceOrder.textContent;

        OrderSum += +str.slice(0, -1);//обрезка строки от знака валюты, преобразование в число и прибавление к общей сумме заказа

        $('#Delete-button' + index).on('click', function (event) {

            DeleteFromOrder(event.target.id);
            ShowOrder();
        });

    });




    Sum.textContent = "Order price : " + OrderSum + " $";

}
