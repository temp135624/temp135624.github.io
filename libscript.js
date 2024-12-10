var app = Vue.createApp({
    data() {
        return {
            btnText: "Я люблю чай",
            showVueThing: false,
            showShop: false,
            favTea: '',
            size: 15
        };
    },
    methods: {
        teaClick() {
            this.btnText = "Я тоже!",
            this.showVueThing = true
        },
        inpClick(){
            toastr.info("Я тоже люблю " + this.favTea),
            this.showShop = true
            this.size = this.size + 5;
        }
    }
});

app.mount("#app");

$(document).ready(function () {
    $("#yesButton").click(function () {
        $("#teaReady p").text("Добро Пожаловать!");
        toastr.success("Добро пожаловать!")
        $(this).hide();
        $("#teaReady").append("<p>Red Leaf Tea</p>");
        $("#stuff").fadeToggle(500);
        $("#bg").fadeToggle(500);
        $("#app").fadeToggle(500);
        $("#bg").css({
            "background-image": "url(bg.jpg)",
            "background-attachment":"fixed",
            "background-repeat":"no-repeat",
            "position":"fixed",
            "width":"1920px",
            "height":"1080px",
            "margin":"-20px",
            "filter": "blur(2px) contrast(50%)",
            "z-index": "-1",
        });
    });


});

