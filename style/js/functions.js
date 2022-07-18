// faqs section script start


let question = document.querySelectorAll(".question");

question.forEach(question => {
    question.addEventListener("click", event => {
        const active = document.querySelector(".question.active");
        if (active && active !== question) {
            active.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    })
})

// faqs section script end






// Alishba

// petSelection page script start

function petProduct(evt, productName) {
    var i, petSelectionForm, Box;
    petSelectionForm = document.getElementsByClassName("petSelectionForm");
    for (i = 0; i < petSelectionForm.length; i++) {
        petSelectionForm[i].style.display = "none";
    }
    Box = document.getElementsByClassName("Box");
    for (i = 0; i < Box.length; i++) {
        Box[i].className = Box[i].className.replace(" activeForm", "");
    }
    document.getElementById(productName).style.display = "block";
    evt.currentTarget.className += " activeForm";
    }
// petSelection page script end




// singleProdut page script start

function openProduct(evt, productName) {
    var i, Product, item;
    Product = document.getElementsByClassName("Product");
    for (i = 0; i < Product.length; i++) {
        Product[i].style.display = "none";
    }
    item = document.getElementsByClassName("item");
    for (i = 0; i < item.length; i++) {
        item[i].className = item[i].className.replace(" active", "");
    }
    document.getElementById(productName).style.display = "block";
    evt.currentTarget.className += " active";
    }
// singleProdut page script end





// CheckOutPage-1 page script start


// OpenBoxtabs
function openTab(evt, tabBox) {
    var i, tabsContentBox, tabNav;
    tabsContentBox = document.getElementsByClassName("tabsContentBox");
    for (i = 0; i < tabsContentBox.length; i++) {
        tabsContentBox[i].style.display = "none";
    }
    tabNav = document.getElementsByClassName("tabNav");
    for (i = 0; i < tabNav.length; i++) {
        tabNav[i].className = tabNav[i].className.replace(" activeTab", "");
    }
    document.getElementById(tabBox).style.display = "block";
    evt.currentTarget.className += " activeTab";
    }


// OpenSubscriptionModel
function openSubModel(evt, subModel) {
    var i, subscriptionModel, Subscription;
    subscriptionModel = document.getElementsByClassName("subscriptionModel");
    for (i = 0; i < subscriptionModel.length; i++) {
        subscriptionModel[i].style.display = "none";
    }
    Subscription = document.getElementsByClassName("Subscription");
    for (i = 0; i < Subscription.length; i++) {
        Subscription[i].className = Subscription[i].className.replace(" activeModel", "");
    }
    document.getElementById(subModel).style.display = "block";
    evt.currentTarget.className += " activeModel";
    }

// OpenSubscriptionModel page script end

// AnimalDropList function start

function itemList() {
    var list = document.getElementsByClassName('selectItems-List')[0];
    if (list.style.display === "none") {
      list.style.display = "block";
      list.style.transition = ".5s";
    } 
    else {
      list.style.display = "none";
    }
  }

  function itemList2() {
    var list2 = document.getElementsByClassName('selectItems-List2')[0];
    if (list2.style.display === "none") {
      list2.style.display = "block";
      list2.style.transition = ".5s";
    } 
    else {
      list2.style.display = "none";
    }
  }

// AnimalDropList function end


// Edit Product Modal

function EditProductModal(evt, block) {
    var i, modelBlock, editBox;
    modelBlock = document.getElementsByClassName("modelBlock");
    for (i = 0; i < modelBlock.length; i++) {
        modelBlock[i].style.display = "none";

    }
    editBox = document.getElementsByClassName("editBox");
    for (i = 0; i < editBox.length; i++) {
        editBox[i].className = editBox[i].className.replace(" activeModelBlock", "");
    }
    document.getElementById(block).style.display = "block";
    evt.currentTarget.className += " activeModelBlock";

    }






// function Profile(evt, sec) {
//     var i, profileInfoBox, profileList;
//     profileInfoBox = document.getElementsByClassName("profileInfoBox");
//     for (i = 0; i < profileInfoBox.length; i++) {
//         profileInfoBox[i].style.display = "none";
//     }
//     profileList = document.getElementsByClassName("profileList");
//     for (i = 0; i < profileList.length; i++) {
//         profileList[i].className = profileList[i].className.replace(" activeProfileBox", "");
//     }
//     document.getElementById(sec).style.display = "block";
//     evt.currentTarget.className += " activeProfileBox";
// }



function openBox(evt, list) {
    var i, profileInfoBox,  listB ;
    profileInfoBox = document.getElementsByClassName("profileInfoBox");
    for (i = 0; i < profileInfoBox.length; i++) {
        profileInfoBox[i].style.display = "none";
    }
        listB  = document.getElementsByClassName(" listB ");
    for (i = 0; i <  listB .length; i++) {
            listB [i].className =  listB [i].className.replace(" activeProfileBox", "");
    }
    document.getElementById(list).style.display = "block";
    evt.currentTarget.className += " activeProfileBox";
}