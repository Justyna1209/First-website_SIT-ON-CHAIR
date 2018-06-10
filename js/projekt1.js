
document.addEventListener("DOMContentLoaded", function () {


    //SLIDER

    var buttonLeft=document.querySelector(".sliderLeft")
    console.log(buttonLeft);

    var buttonRight=document.querySelector(".sliderRight")
    console.log(buttonRight);

    var imagesSlider=document.querySelectorAll(".slider>li")
    console.log(imagesSlider)

    var tableOfImg=[];
    for (var element of imagesSlider){
        tableOfImg.push(element)
    }
    console.log(tableOfImg)

    imagesSlider[0].classList.add("visible")
    var counter=0;


    buttonRight.addEventListener("click", function () {
        imagesSlider[counter].classList.remove("visible")
        counter++;
        if (counter>imagesSlider.length-1){
            counter=0
        }
        imagesSlider[counter].classList.add("visible")
    })

    buttonLeft.addEventListener("click", function () {
        imagesSlider[counter].classList.remove("visible")
            counter--;
        if (counter<0){
            counter=imagesSlider.length-1;
        }
        imagesSlider[counter].classList.add("visible")
        })






    //Po najechaniu na zdjęcie nr1 znika jego opis
    var elementImg = document.getElementsByTagName("img")[3]
    console.log(elementImg)
    var elementBackground = document.querySelectorAll(".background")[0]
    console.log(elementBackground)

    elementImg.addEventListener("mouseover", function () {
        elementBackground.style.display="none"
    })

    elementImg.addEventListener("mouseout", function () {
        elementBackground.style.display="block"
    })
    // Po najchaniu na zdjęcie nr2 znika jego opis
    var elementImg2 = document.getElementsByTagName("img")[4]
    console.log(elementImg)
    var elementBackground2 = document.querySelectorAll(".background")[1]
    console.log(elementBackground)

    elementImg2.addEventListener("mouseover", function () {
        elementBackground2.style.display="none"
    })

    elementImg2.addEventListener("mouseout", function () {
        elementBackground2.style.display="block"
    })



    //DROP_DOWN

    //ZMIENNE DO KALKULATORA
    var priceOfChair=0;
    var priceOfColor=0;
    var priceOfPattern=0;
    var priceOfTransport=0;

    //zmienne wskazujące na panel lewy i prawy kalkulatora
    var rightPanel=document.querySelector(".panel_right")
    var leftPanel=document.querySelector(".panel_left")

    //zmienne określające wybór krzesła, koloru i wzoru
    var choiceChairLabel=document.querySelectorAll(".list_label")[0]
    console.log("tutaj" + choiceChairLabel)
    var choiceColorLabel=document.querySelectorAll(".list_label")[1]
    console.log("tutaj" + choiceColorLabel)
    var choicePatternLabel=document.querySelectorAll(".list_label")[2]
    console.log("tutaj" + choiceColorLabel)

    //zmienne określające wybrane wzory kolory po lewej str panela
    var choiceChair=leftPanel.querySelector("h4.title1")
    console.log(choiceChair)
    var choiceColor=leftPanel.querySelector(".color1")
    console.log(choiceColor)
    var choicePattern=leftPanel.querySelector(".pattern1")
    console.log(choicePattern)

    //zmienne określające cenę
    var priceOfChoiceChair=rightPanel.querySelector("h4.title")
    var priceOfChoiceColor=rightPanel.querySelector(".color")
    var priceOfChoicePattern=rightPanel.querySelector(".pattern")


    var totalSum=document.querySelector(".sum")
    console.log("tuuu" + totalSum)




    //wyszukanie spana od RODZAJU KRZESŁA
    var spanKindOfChair=document.querySelectorAll(".list_arrow")[0]
    console.log(spanKindOfChair)
    //wyszukanie listy krzeseł
    var listKindOfChair=document.querySelectorAll(".list_panel")[0]
    var newlist=listKindOfChair.getElementsByTagName("li")
    console.log(newlist)
    // stworzenie tablicy z li
    var tableOflistKindOfChair=[];
    for (var element of newlist){
        tableOflistKindOfChair.push(element)
    }
    console.log(tableOflistKindOfChair)
    //wyświetlenie listy
    spanKindOfChair.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("list_panel");
    })

    //dodawanie produktu
    for (var i=0; i<newlist.length; i++) {
        newlist[i].addEventListener("click", function () {
            choiceChairLabel.innerHTML = this.innerHTML;
            choiceChair.innerHTML = this.innerHTML;
            priceOfChoiceChair.innerHTML = this.dataset.chairPrice;
            priceOfChair = 0;
            priceOfChair = priceOfChair + parseInt(this.dataset.chairPrice);
            totalSum.innerHTML = priceOfChair + priceOfColor + priceOfPattern + priceOfTransport
            // this.parentElement.classList.add("list_panel")
        })
    }

    //wyszukanie spana od RODZAJU KOLORU
    var spanKindOfColor=document.querySelectorAll(".list_arrow")[1]
    console.log(spanKindOfColor)
    //wyszukanie listy krzeseł
    var listKindOfColor=document.querySelectorAll(".list_panel")[1]
    var newlist1=listKindOfColor.getElementsByTagName("li")
    console.log(newlist1)
    // stworzenie tablicy z li
    var tableOflistKindOfColor=[];
    for (var element of newlist1){
        tableOflistKindOfColor.push(element)
    }
    console.log(tableOflistKindOfColor)

    spanKindOfColor.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("list_panel");
    })
    //dodawanie produktu
    for (var i=0; i<newlist1.length; i++){
        newlist1[i].addEventListener("click", function () {
            choiceColorLabel.innerHTML=this.innerHTML;
            choiceColor.innerHTML=this.innerHTML;
            priceOfChoiceColor.innerHTML=this.dataset.colorPrice;
            priceOfColor=0;
            priceOfColor=priceOfColor + parseInt(this.dataset.colorPrice);
            totalSum.innerHTML=priceOfChair + priceOfColor + priceOfPattern + priceOfTransport
            // this.parentElement.classList.add("list_panel")
        })
    }



    //wyszukanie spana od RODZAJU MATERIAŁU
    var spanKindOfPattern=document.querySelectorAll(".list_arrow")[2]
    console.log(spanKindOfPattern)
    //wyszukanie listy krzeseł
    var listKindOfPattern=document.querySelectorAll(".list_panel")[2]
    var newlist2=listKindOfPattern.getElementsByTagName("li")
    console.log(newlist2)
    // stworzenie tablicy z li
    var tableOflistKindOfPattern=[];
    for (var element of newlist2){
        tableOflistKindOfPattern.push(element)
    }
    console.log(tableOflistKindOfPattern)

    spanKindOfPattern.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("list_panel");
    })

        //dodawanie produktu
        for (var i=0; i<newlist2.length; i++){
            newlist2[i].addEventListener("click", function () {
                choicePatternLabel.innerHTML=this.innerHTML;
                choicePattern.innerHTML=this.innerHTML;
                priceOfChoicePattern.innerHTML=this.dataset.patternPrice;
                priceOfPattern=0;
                priceOfPattern=priceOfPattern + parseInt(this.dataset.patternPrice);
                totalSum.innerHTML=priceOfChair + priceOfColor + priceOfPattern + priceOfTransport
                // this.parentElement.classList.add("list_panel")
            })
        }


    var checkDiv=document.querySelector(".checkbox")
    console.log("bla" + checkDiv)

    function clickCheck (){

        var checkButton=document.querySelector("input[type=checkbox]")
        console.log("totu" + checkButton)

            var choiceTransport=leftPanel.querySelector(".transport1")
            console.log(choiceTransport)

            var priceOfChoicetransport=rightPanel.querySelector(".transport.value")
            console.log("ja" + priceOfChoicetransport)

            if (checkButton.checked = true) {
                        choiceTransport.innerText = "Transport"
                        priceOfChoicetransport.innerHTML =checkButton.dataset.transportPrice
                        priceOfTransport = 0;
                        priceOfTransport = priceOfTransport + parseInt(checkButton.dataset.transportPrice);
                        totalSum.innerHTML = priceOfTransport + priceOfChair + priceOfColor + priceOfPattern + "zł"
            }
        }

        checkDiv.addEventListener("click", clickCheck)
})