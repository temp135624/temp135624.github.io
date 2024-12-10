
var teas = ["Ассам", "Дарджилинг", "Хун Ча", "Байхао Иньчжэнь", "Да Цзинь Чжэнь", "Лунцзин", "Гунтин"]
var price = [1500, 2500, 2000, 3000, 1600, 2000, 2700]
var cart = [""]
var total = 0;
const client = {cardnumber:"", name:""}
function add(val)
{
    var pr = parseInt(val);
    if (document.getElementById("disccheck").checked == true) {
        pr = pr * 0.8
    }
    total += pr;
}
function addc() 
{
    
    var id = document.getElementById("tealist").value
    cart.push(teas[id]);
    add(price[id])
    cart.sort();    
    var out = ""
    for (var i = 0; i < cart.length; i++) {
        out += cart[i] + "\n"
    }

    document.getElementById("cartlist").innerText = out
    document.getElementById("shoptot").innerText = total + "тг"
}
function payopen() {
    document.getElementById("payform").style.display = "block";
}
function pay() {
    client.cardnumber = document.getElementById("card").value
    client.name = document.getElementById("clientname").value
    if (document.getElementById("agree").checked == true) {
        if (document.getElementById("cvv").value != "") 
            {
                alert("Оплата совершена, " + client.name + "\n\nС карты " + client.cardnumber + " снято " + total + "тг")
            } else {alert("Необходимо указать CVV")}
       
    } else {
        alert("Необходимо согласиться с правилами оплаты")
    }
    
}


function xmlAdd() {
    $.ajax({url: "tea.xml", dataType: "xml", success: function (xml) {
            var tbody = $("#tlist");
            $(xml).find("tea").each(function () {
                var name = $(this).find("name").text();
                var type = $(this).find("type").text();
                var price = $(this).find("price").text();
                var origin = $(this).find("origin").text();
                var desc = $(this).find("desc").text();

                var row = `<tr>
                    <td>${name}</td>
                    <td>${type}</td>
                    <td>${price}</td>
                    <td>${origin}</td>
                    <td>${desc}</td>
                </tr>`;

                tbody.append(row);
            });
        }
    });
}

   
xmlAdd()

function sortTea(x) {
    var table = document.getElementById("teatable");
    var rows = Array.from(table.rows).slice(1);
    var asc = table.rows[0].cells[x].classList.toggle("asc");

    rows.sort(function(a, b) {
        var cellA = a.cells[x].textContent.toLowerCase();
        var cellB = b.cells[x].textContent.toLowerCase();
        if (asc) {
            return cellA.localeCompare(cellB);
        } else {
            return cellB.localeCompare(cellA);
        }
    });

    for (var i = 0; i < rows.length; i++) {
        table.appendChild(rows[i]);
    }
}

document.getElementById("filter").addEventListener("change", function() {
    var filter = this.value.toLowerCase();
    var rows = document.querySelectorAll("#tlist tr");

    rows.forEach(function(row) {
        var cellV = row.cells[1].textContent.toLowerCase();
        if (!filter || cellV.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
    
});