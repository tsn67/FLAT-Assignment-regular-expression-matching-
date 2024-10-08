var btn1 = $(".email-btn");
var btn2 = $(".phone-btn");
var btn3 = $(".url-btn");


btn1.click(() => {
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const str = $(".email1").val();
    
    $(".email .valid,.invalid").remove();

    if(emailRegex.test(str)) {
        var element = $("<h3>").text("valid email!");
        element.addClass("valid");
        $(".email").append(element);
    } else {
        var element = $("<h3>").text("invalid email!");
        element.addClass("invalid");
        $(".email").append(element);
    }
    
});

btn2.click(() => {

    const phoneRegex = /^[0-9]{10}$/;
    const str = $(".phone1").val();
    
    $(".phone .valid,.invalid").remove();

    if(phoneRegex.test(str)) {
        var element = $("<h3>").text("valid phone number!");
        element.addClass("valid");
        $(".phone").append(element);
    } else {
        var element = $("<h3>").text("invalid phone number!");
        element.addClass("invalid");
        $(".phone").append(element);
    }

});

btn3.click(() => {

    const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\/[a-zA-Z0-9._%+-]*)*\/?$/;
    const str = $(".url1").val();
    
    $(".url .valid,.invalid").remove();

    if(urlPattern.test(str)) {
        var element = $("<h3>").text("valid url!");
        element.addClass("valid");
        $(".url").append(element);
    } else {
        var element = $("<h3>").text("invalid url!");
        element.addClass("invalid");
        $(".url").append(element);
    }

});