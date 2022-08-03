// BOOSTRAP TOOL TIP INIT STARTS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
//  BOOSTRAP TOOL TIP INIT STARTS

// profile tooltip
$(document).ready(function () {
$("#l_name").click(function () { 
  $("#close_user").slideToggle(200);;
  
});
$("#close_user").click(function () { 
  $(this).slideUp();
  
});
});








var signin= document.getElementById("signup_btn")

// DISPLAY INFO ON ELEMENTS THAT ARENT FUNCTIONING
$(document).ready(function () {
  $("#signup_btn").click(function () { 
    $(".offcanvas-bottom").fadeOut();
    $("#alert_info_wrapper").slideDown(3000);
    setTimeout(() => {$("#alert_info_wrapper").slideUp(3000);}
, 5300)
    
  });
  $(".log_in").click(function () { 
    $(".offcanvas-bottom").fadeOut();
    $("#alert_login_wrapper").slideDown(3000);
    setTimeout(() => {$("#alert_login_wrapper").slideUp(3000);}
, 5300)
    
  });
    // hide the message chat box on window laod
    $(".ad_start_chatbox_wrapper").hide();


  // show chat box message box on click
  $(".ad_start_chat").click(function () { 
      $(".ad_start_chatbox_wrapper").show();  
      $(this).toggle();  //hide the chat button on click 
  });

// hide chat box on click
$(".close_chat").click(function () { 
  $(".ad_start_chatbox_wrapper").hide();
  $(".ad_start_chat").show();
});


  
  // show the contact on click
  $(".ad_s").click(function () { 
    $(".ad_s").text("+44 (994) 3458 34")    
  });


  // change the main display image to the clicked image
$(".ad_thum_img").click(function () { 
  var x = $(this).attr("src"); 
  $(".main_img").attr("src", x); 
});

// show border on click
$(".ad_thum_img").click(function () { 
  var y= $(this).attr("src");
  var z = $(".main_img").attr("src");
   $(".ad_thum_img").css("border", "none")
  if (y == z) {
   $(this).css("border", "3px solid blue");
  }
});

// show make offer modal

$(".ad_make_offer").click(function () { 
  
  $(".make_o_wrapper").css("display", "flex").slideDown();
  
});
// hide modal

$(".ad_exit").click(function () { 
  $(".make_o_wrapper").toggle(); 
});

// display writing on submit offer
$(".ad_offer_btn").click(function () {
  var x = $(".form-control").val();

    $(".check_o").hide();
  $(this).text("loading....");
  setTimeout(() => {
    $(".make_o_wrapper").slideUp(1800)
  $("#alert_info_wrapper").html("Seller has recieved your offer, would get back to you shortly").slideDown(3000);
  setTimeout(() => {$("#alert_info_wrapper").slideUp(3000);}
, 5000)
  }, 2000);

  
});


// change appearance on clcik (in the my saved pages)

$(".saved_btn").click(function (e) { 
  e.preventDefault();
  
  $(".saved_btn").removeClass("saved_btn_active");
  $(this).addClass("saved_btn_active");
});


// change the display of the menu on the mesaages page
$(".msg_m").click(function (e) { 
  e.preventDefault();
  
  $(".msg_m").fadeIn(50);
  $(this).fadeOut(50);
});


// show archived chats option
$(".msg_spec_modal").hide(); // hide the modal 
$(".msg_m").click(function (e) { 
  e.preventDefault();

  $(".msg_spec_modal").toggle();
});

//this settings is for the  advert page\
$(".advert_text1").click(function (e) { 
  e.preventDefault();
   $(".advert_text1").removeClass("advr_right");
   $(this).addClass("advr_right");
   
});

// settings for the history page .
// this changes my display of my buttin on click
$(".bal_text1").click(function () { 
  $(".bal_text1").removeClass("bal_style_text");
  $(this).addClass("bal_style_text");
  
});


// my followers page (DISPLAY THE SHARE BUTTONS ON CLICK)
$(".follow_invite").click(function () { 
  
  $(".f_wrapper").css("display", "flex");
  $(".follow_inner_wrap").hide();
});

// chnage the content of the my blance page
$(".bal_1").click(function () { 
  
  $(".bal_body1_wrap").css("display", "flex");;
  $(".bal_body2_wrap").css("display", "flex");;
  $(".bal_body3_wrap").css("display", "none");;
});

$(".bal_2").click(function () { 
  
  $(".bal_body1_wrap").css("display", "none");
  $(".bal_body2_wrap").css("display", "none");
  $(".bal_body3_wrap").css("display", "flex");
});
//show manager log on click
$(".man_btn_c").click(function () { 
  
  $(".man_Call_Wrapper").slideDown(1000).css("display", "flex");
});
// Hide managers content page setting
$(".man_button").click(function () { 
  
  $(".man_Call_Wrapper").slideUp(1500);
});

// on click on yes 
$(".man_yes").click(function () { 
  
  $(this).html("loading.....");
  setTimeout(() => {
    $(".man_Call_Wrapper").slideUp(1500);
    $("#alert_info_wrapper").html("Your account manager would call you shortly!").slideDown(3000);
    setTimeout(() => {$("#alert_info_wrapper").slideUp(3000);}
  , 4000)
  }
, 2300)
  
});

//on click on No
$(".man_no").click(function () { 
  
  $(".man_Call_Wrapper").slideUp(1500);

});

// change the content  by clicking on menu
//active
$(".adv_active").click(function (e) { 
  e.preventDefault();
  
  $(".adv_inner_t1").text("There are no adverts yet..");

  $(".adv_inner_t2").text("Create new one now!");
});

//review
$(".adv_review").click(function (e) { 
  e.preventDefault();
  
  $(".adv_inner_t1").text("Kosmo checks each advert to make sure everything is correct.");

  $(".adv_inner_t2").text("Your new ads will be displayed here while we check them..");
});

//declined
$(".adv_decline").click(function (e) { 
  e.preventDefault();
  
  $(".adv_inner_t1").text("If we find any issues in your new adverts -we'll let you know.");

  $(".adv_inner_t2").text("Declined adverts will be displayed here, for you to fix them.");
});

//draft
$(".adv_draft").click(function (e) { 
  e.preventDefault();
  
  $(".adv_inner_t1").text("Drafts are unpublished ads due to some reasons.");

  $(".adv_inner_t2").text("Draft ads are not displayed on the platform until needed changes will be done.");
});


//closed
$(".adv_closed").click(function (e) { 
  e.preventDefault();
  
  $(".adv_inner_t1").text("If you close your advert, we’ll save it here safe and sound.");

  $(".adv_inner_t2").text("You can publish it again, edit or delete completely anytime");
});


//all
$(".adv_all").click(function (e) { 
  e.preventDefault();
  
  $(".adv_inner_t1").text("There are no adverts yet.");

  $(".adv_inner_t2").text("Create new one now!");
});







// window onload should display the produtcts recieved  from the xml file 
// window.addEventListener("load", ()=>{
//   loadDoc("main.xml", myFunction1)
// })

// // ajax function
// function loadDoc(url, cFunction) {  
//   var xhttp;
//   xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       cFunction(this);
//     }
//   };
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }

// function myFunction1(xhttp) {
//   var Doc = xhttp.responseText
// // appending the elements to the section
//   $("#product").append(Doc);
// }







// ******************** //
// PLEASE THIS IS THE MAIN CONTROL FOR PRODUCT DISPLAY THAT CONTROLS THE ENTIRE SITE BOX
//*********************** */





// $(".i_tem_wrapper").click(function () { 


   
//    //declare variables for the main page
//   var mainProductImg = $(".main_img").attr("src");
//   var small_1 = $(".small_1");
//   var small_2 = $(".small_2");
//   var small_3 = $(".small_3");
//   var small_4 = $(".small_4");
  
  
  
//     localStorage.setItem("mainImg", mianImg)
//     var y =localStorage.getItem("mainImg")
//     $(".main_img").attr("src", y);
//     console.log(y)
//   });



}
)

$(document).ready(function () {
  

var x;
var y;   


  $(".i_tem_wrapper").click(function () {
      //decleare the element varaibles and store them
   var mianImg= $(this).find(".img_1").attr('src');
   var thumb1= $(this).find(".img_1").attr('src');
   var thumb2= $(this).find(".img_2").attr('src');
   var thumb3= $(this).find(".img_3").attr('src');
   var thumb4= $(this).find(".img_4").attr('src'); 

   //item name attribute value
    var itemvalueName= $(this).attr("category");

   // item name
   var itemName= $(this).find(".item_specific_name").text(); 

   // item description
   var itemDes= $(this).find(".item_tagline").text(); 

   // item price
   var itemPrice= $(this).find(".item_price").text(); 

   // item condition
   var itemCondition= $(this).find(".item_condition").text(); 

   // item location
   var itemLocation= $(this).find(".item_location").text(); 
   
   //item views
   var itemViews= $(this).find(".item_views").text(); 

   // item posted date
   var itemPostTime= $(this).find(".item_posted_time").text(); 
   
   //item spec text 1
   var item_specs= $(this).find(".item_sp_ecs").html(); 
  
   //item more bottom des
   var item_more_desc= $(this).find(".item_more_desc").html(); 

   //item seller name
   var item_seller_name= $(this).find(".item_seller_name").html(); 

   // set localstorage variable
  localStorage.setItem("mainimg" , mianImg)
  localStorage.setItem("thumb1" , thumb1)
  localStorage.setItem("thumb2" , thumb2)
  localStorage.setItem("thumb3" , thumb3)
  localStorage.setItem("thumb4" , thumb4)
  localStorage.setItem("itemvalueName" , itemvalueName)
  localStorage.setItem("itemname" , itemName)
  localStorage.setItem("itemdescription" , itemDes)
  localStorage.setItem("itemprice" , itemPrice)
  localStorage.setItem("itemcondition" , itemCondition)
  localStorage.setItem("itemlocation" , itemLocation)
  localStorage.setItem("itemviews" , itemViews)
  localStorage.setItem("itemposttime" , itemPostTime)
  localStorage.setItem("item_specs" , item_specs)
  localStorage.setItem("item_more_desc" , item_more_desc)
  localStorage.setItem("item_seller_name" , item_seller_name)

 
});

// this is the display settings for the product page. now lets get to it
$(".thum_wrapper").click(function () { 
     var p_category = $(this).find("p").attr("name");
    localStorage.setItem("p_category" , p_category)
});


// chnaging the product diplay using the search bar
$(".src_btn").click(function () { 
  var select_val = $("#srch").val();
  localStorage.setItem("p_category" , select_val)
  console.log(select_val);
window.location.href="product.html"
 
});

window.addEventListener("load", ()=>{

  // for the search bar function
  var select_val_get = localStorage.getItem("select_val")

// get item for the diplay.html age
   var loc101 =  window.location.pathname
  if (loc101 == "/product.html") {
    var p_category_get= localStorage.getItem("p_category")
    $( ".i_tem_wrapper" ).each(function(  ) {
      var p_item_n =  $(this).attr("category")

       if(p_category_get == ""){
        $(this).hide();
        $(".product_spec_under_txt").css("display", "block");
        console.log("not found");
      }
      else if (p_category_get != p_item_n) {
        $(this).hide();
      }
     else if (p_category_get == p_item_n) {
       $(this).show();
      } 
      

    })
  }
var mainimgget= localStorage.getItem("mainimg")
var thumb1get= localStorage.getItem("thumb1")
var thumb2get= localStorage.getItem("thumb2")
var thumb3get= localStorage.getItem("thumb3")
var thumb4get= localStorage.getItem("thumb4")
var itemvalueNameget= localStorage.getItem("itemvalueName")
var item_name_get= localStorage.getItem("itemname")
var item_description_get= localStorage.getItem("itemdescription")
var item_price_get= localStorage.getItem("itemprice")
var item_condition_get= localStorage.getItem("itemcondition")
var item_location_get= localStorage.getItem("itemlocation")
var item_views_get= localStorage.getItem("itemviews")
var item_post_time_get= localStorage.getItem("itemposttime")
 var item_specs_get= localStorage.getItem("item_specs")
 var item_more_desc_get= localStorage.getItem("item_more_desc")
 var item_seller_name_get= localStorage.getItem("item_seller_name")


// change the element on load of the new page
$(".main_img").attr("src", mainimgget);
$(".small_1").attr("src", thumb1get);
$(".small_2").attr("src", thumb2get);
$(".small_3").attr("src", thumb3get);
$(".small_4").attr("src", thumb4get);
$(".bread_text").html(itemvalueNameget);
$(".nam").html(item_name_get);
$(".ad_posted").html("<i class='bi bi-clock'></i> " + " " + item_post_time_get);
$(".ad_location").html('<i class="bi bi-geo-alt-fill"> ' + " "+item_location_get);
$(".ad_views").html(item_views_get);
$(".ad_views").html(item_views_get);
$(".ad_specs_wrapper").html(item_specs_get);
//$(".ad_specs_wrapper").html(item_more_desc_get);
$(".ad_price").html(item_price_get);
$(".seller_name").html(item_seller_name_get);


// hide the images with a src path
if (thumb4get == "") {
  $(".small_4").css("display", "none");

  if (thumb3get == "") {
    $(".small_3").css("display", "none");

    if (thumb2get == "") {
      $(".small_2").css("display", "none");
    }
  }
  
}

// hide similar items

// hide already diplsyed items



console.log(localStorage)
// this settings is just for the specs of the product you get
var loc =  window.location.pathname
console.log(loc);
 if (loc == "/ad_listing.html") {
  console.log("its working right ")
  $( ".i_tem_wrapper" ).each(function(  ) {
        
  var x0= $(this).attr("category");
  var y0= $(".bread_text").text()
  var z0= $(this).find(".item_specific_name").text()
  var j1= $(".nam").text();
  if (x0 != y0) {
    
    $(this).hide();
  } else{
    $(this).show();
  }

  if (z0 == j1) {
    console.log(z0)
    $(this).hide()
  }
  
})



// on click of the main image settings
$(".main_img_wrapper").click(function () { 

  var c1= $(".main_img").attr("src")
  $(".img_itself").attr("src", c1);

    $(".main_img_d_wrapper").slideDown(800).css("display", "flex");
});

// on click exit the image wrapper
$(".img_exit_wrap").click(function (e) { 
  e.preventDefault();
  $(".main_img_d_wrapper").slideUp(1000).css("display", "flex");
});


 }

 


})
});