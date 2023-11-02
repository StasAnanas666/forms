var form = document.querySelector("form");

function checkForm(e) {
    e.preventDefault();//отмена автоматической отправки формы
    let firstname = document.querySelector("#contact-firstname").value;
    let lastname = document.querySelector("#contact-lastname").value;
    let dateofBirth = document.querySelector("#contact-dateofbirth").value;
    let email = document.querySelector("#contact-email").value;
    let phone = document.querySelector("#contact-phone").value;
    let sex = document.getElementById("contact-sex");
    let sexElement;
    let image = document.querySelector("#contact-image").files[0].name;

    let tbody = document.querySelector("tbody");

    let tr = document.createElement("tr");//строка с записью пользователя

    //фото
    let tdImage = document.createElement("td");
    let imageTag = document.createElement("img");
    imageTag.setAttribute("src", `images/${image}`);
    imageTag.setAttribute("style", "width:100px");
    imageTag.setAttribute("alt", `${firstname}`);
    tdImage.append(imageTag);
    tr.append(tdImage);
    //имя
    let tdFirstName = document.createElement("td");//создаем ячейку таблицы
    tdFirstName.innerText = firstname;//текстовый контент ячейки
    tr.append(tdFirstName);//добавляем ячейку в строку
    //фамилия
    let tdLastName = document.createElement("td");
    tdLastName.innerText = lastname;
    tr.append(tdLastName);
    //ДР
    let tdDateOfBirth = document.createElement("td");
    tdDateOfBirth.innerText = dateofBirth;
    tr.append(tdDateOfBirth);
    //мэйл
    let tdEmail = document.createElement("td");
    tdEmail.innerText = email;
    tr.append(tdEmail);
    //телефон
    let tdPhone = document.createElement("td");
    tdPhone.innerText = phone;
    tr.append(tdPhone);
    //пол 
    let tdSex = document.createElement("td");
    tdSex.innerText = "sexElement";
    tr.append(tdSex);

    tbody.append(tr);


    // form.submit();//принудительная отпрака данных формы
}