var OrderList = [];
var num = 0;
var pl;

function MakeOrder(id) {
    pl = sessionStorage.getItem(id);
    OrderList.push(pl);

    localStorage.setItem("Order List", JSON.stringify(OrderList));
}

function DeleteFromOrder(id) {
    GetOrderList = JSON.parse(localStorage.getItem("Order List"));//получить объект и преобразовать из формата JSON
    //получили массив строк

    var index = +id.slice(-1);//получили индекс объекта
    GetOrderList.splice(index, 1);//удалили объект

    localStorage.setItem("Order List", JSON.stringify(GetOrderList));//заменили старый список новым
}




function OrdersNum() {
    num++;
    document.getElementById("Order").innerHTML = " Order (" + num + ")";
}


