function change(element){
    var id = element.innerHTML;
    //  $("photo1").animate({left: '-=100px'});
    //   $("photo1").css("opacity", "0");
    
    document.getElementById("txt2").style.color = "black";
    document.getElementById("int").style.display = "flex";
    document.getElementById("fx").style.width = "700px";
    document.getElementById("int").style.margin = "100px 0";
    document.getElementById("fx").style.margin= "20px 0";
    
    document.getElementById("photo1").width = "400";
    document.getElementById("photo2").width = "0";
    document.getElementById("photo3").width = "0";
    document.getElementById("photo4").width = "0";
    switch(id){
        case "MEN":
            document.getElementById("photo1").src = "https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/2021/11/forum-size-guide-body-image-1a_221-808411.jpg";
            
            document.getElementById("txt").innerHTML = "Forum 84 Hi";
            document.getElementById("txt1").innerHTML = "An enduring icon, the adidas Forum debuted in 1984 as a basketball sneaker and has since been spun into a street style legend, spawning multiple collaborations, colorways and variations over the years. It was also adidas’ first basketball shoe to be offered in low, mid and hi-top models. Standing tall with a crisp leather upper, the trefoil logo on the shoe’s tongue peers just above its unmistakable strap—making for a timeless look. Although many versions of the Forum have been introduced since its inception, its roots on the hardwood have always been on display. This is also reflected in how the sneaker feels on foot, offering a fit that has been consistent for decades.";
            document.getElementById("txt2").innerHTML =  "$100"
            //document.getElementById("txt2").style.float = "right";
            load();
            break;
        case "WOMEN":
            document.getElementById("photo1").src = "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fba703a85ed0432fbe75ae430021a9e3_9366/Trefoil_2.0_Backpack_Blue_GA7177_04_standard.jpg";
            document.getElementById("txt").innerHTML = "TREFOIL 2.0 BACKPACK";
            document.getElementById("txt1").innerHTML = "Carry your whole world with you. Everything from your laptop to earbuds to a change of clothes fits neatly inside this adidas backpack. And even with all that stuffed inside, all anyone will see is your effortless sense of style. The Trefoil logo is the first detail to catch the eye, reflecting your originality. Made in part with recycled content generated from production waste, e.g. cutting scraps, and post-consumer household waste to avoid the larger environmental impact of producing virgin content.";
            document.getElementById("txt2").innerHTML =  "$89"
            load();
            break;
        case "KIDS":
            document.getElementById("photo1").src = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/kids-fw22-360-disney-launch-com-hp-teaser-carousel-d_tcm221-958702.jpg";
            document.getElementById("txt").innerHTML = "DISNEY SUPERSTAR 360 SHOES";
            document.getElementById("txt1").innerHTML = "Your little one is in good hands with Disney's favorite mouse and friends. On these toddlers' adidas Superstar 360 Shoes, the beloved Disney characters are sure to delight. The flexible, lightweight midsole and outsole ensure that your tot's toes will be cradled in comfort. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.";
            document.getElementById("photo1").style.marginTop = 0;
            document.getElementById("txt2").innerHTML =  "$50"
            load();
            break;
        case "SALE":
            document.getElementById("photo1").src = "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3468a4eaab024fd08b74accd017da9a9_9366/Game_and_Go_Pullover_Hoodie_Blue_GT0054_21_model.jpg";
            document.getElementById("txt").innerHTML = "GAME AND GO PULLOVER HOODIE";
            document.getElementById("txt1").innerHTML = "Your heart is pumping, your muscles are screaming and the energy is rising as you push towards your last rep. Reward your efforts by sinking into the cozy comfort of this fleece adidas hoodie. As you walk out the gym doors, AEROREADY absorbs moisture to help you recharge. This product is made with recycled content as part of our ambition to end plastic waste..";
            document.getElementById("txt2").innerHTML =  "$29";
            document.getElementById("txt2").style.color ="red";
            load();
            break;          
    }
    

}

function sizebig(element){
    element.style.fontSize = "20px";
}   
function sizesmall(element){
    element.style.fontSize = "18px";
}  
function big(element){
    element.style.scale = "1.02";
}
function small(element){
    element.style.scale = "1";
}
function load(){
    $(".txt1").css({opacity: '0'});
    $(".txt").css({opacity: '0'});
    $(".txt").animate({opacity: '1'}, "slow");
    $(".txt1").animate({opacity: '1'}, "slow");
    $(".txt2").css({opacity: '0'});
    $(".txt2").animate({opacity: '1'}, "slow");

    $(".im1").css({opacity: '0'});
    $(".im1").animate({opacity: '1'}, "slow");
    $(".im2").css({opacity: '0'});
    $(".im2").animate({opacity: '1'}, "slow");
    $(".im3").css({opacity: '0'});
    $(".im3").animate({opacity: '1'}, "slow");

}

