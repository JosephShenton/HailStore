// Initialize your app
var myApp = new Framework7({modalTitle:'HailStore'});

var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});  

// 1 Slide Per View, 0px Between
var mySwiper1 = myApp.swiper('.swiper-1', {
  pagination:'.swiper-1 .swiper-pagination',
  spaceBetween: 0
});
 
// 2 Slides Per View, 20px Between
var mySwiper2 = myApp.swiper('.swiper-2', {
  pagination:'.swiper-2 .swiper-pagination',
  spaceBetween: 0,
  slidesPerView: 1
});
 
// 3 Slides Per View, 10px Between
var mySwiper3 = myApp.swiper('.swiper-3', {
  pagination:'.swiper-3 .swiper-pagination',
  spaceBetween: 10,
  slidesPerView: 3
});
 
// Vertical, 0px Between
var mySwiperVertical = myApp.swiper('.swiper-vertical', {
  pagination:'.swiper-vertical .swiper-pagination',
  direction: 'vertical'
});
 
// Slow speed
var mySwiperSlow = myApp.swiper('.swiper-slow', {
  pagination:'.swiper-slow .swiper-pagination',
  speed: 600
});                  

// Export selectors engine
var $$ = Dom7;

// Add views
var tab1 = myApp.addView('#tab1');
var tab2 = myApp.addView('#tab2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var tab3 = myApp.addView('#tab3');
var tab4 = myApp.addView('#tab4');

		this.setAppsCount = function() {
			var AppsCount = 0;
			for (var i = 0; i < AppsStorage.length; i++) {
				var AppsItem = AppsStorage[i];
				if (AppsItem.status == "open") {
					openAppsCount++;
				}
			}
			$('#apps-badge').html(AppsCount);
		}


                this.login = function() {
            loginView.loadPage("frames/login/login.php?u="+$('input#username').val()+"&p="+MD5($('input#password').val()));
        };
        this.loginDemo = function() {
            fw7.showPreloader("Signing in");
            setTimeout(function() {
                fw7.hidePreloader();
                createCookie("username","HailStore Admin",24);
            }, 2500);
            setTimeout(function() {
                fw7.closeModal(".popup-login");
                if (readCookie("username") == undefined) {
                    $('#user-label').html("Login failed. Please allow Cookies on this website.");
                } else {
                    $('#user-label').html(readCookie("username")).removeAttr("data-i18n");
                }
                loginView.goBack(undefined, false);
            }, 3000);
        };
        this.loginCheckCookie = function() {
            if (!readCookie("username")) {
                
            } else {
                $('#user-label').html(readCookie("username")).removeAttr("data-i18n");
            }
        };
        this.rebindUserPanel = function() {
            $('#user-label').off("click");
            $('#user-label').on("click", function() {
                var clickedLink = this;
                var buttons = [
                {
                        text: 'Sign off',
                        bold: true,
                        onClick: function () {
                            eraseCookie("username");
                            $('#user-label').attr("data-i18n","NOT_SIGNED_IN").html("User is not signed in");
                            /* $('body').i18n(); */
                        }
                }];
                var buttons2 = [
                {
                        text: 'Cancel',
                        red: true,
                        color: "red",
                        onClick: function () {
                        }
                }];
            
                if (readCookie("username")) {
                    if (fw7.device.iphone) {
                        fw7.actions([buttons, buttons2]);
                    } else {
                        fw7.popover(".popover-usercp", clickedLink);
                    }
                } else {
                    fw7.popup(".popup-login");
                }
            });

        };


$('.submit-bug').on("click", function() {
    if (readCookie("username") && $('[name="newBugName"]').val() != "" && $('[name="newBugDesc"]').val() != "") {
        br7.submitNewBug();
    } else if (!readCookie("username")) {
        fw7.alert("This feature requires a valid login.","User not logged in");
    } else if ($('[name="newBugName"]').val() == "") {
        fw7.alert("Please specify a title before continuing.", "Missing fields");
    } else if ($('[name="newBugDesc"]').val() == "") {
        fw7.alert("Please enter some details before continuing.", "Missing fields");
    }
});


$$('.load').on('load', function () {
    myApp.addNotification({
        title: 'My Awesome App',
        subtitle: 'New message from John Doe',
        message: 'Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.',
        media: '<img width="44" height="44" style="border-radius:100%" src="img/NOTIFICATION.png">'
    });
});

$$('.about').on('click', function () {
    myApp.modal({
    title:  'About iOSEmus',
    text: 'iOSEmus is a Web App created by AiiR, to allow installation of Apps and Emulators not available through the App Store.',
    buttons: [
      {
        text: 'Got It!',
        color: '#fff', 
       
      },
    ]
  })
});  
$$('input[name="layout-radio"]').on('change', function () {
	if (this.checked) {
$$('.view').removeClass('layout-dark layout-white layout-default layout-transparent');
$$('.view').addClass(this.value);
								}
							});


									$$('input[name="theme-radio"]').on('sey', function () {
										if (this.checked) {
										$$('.view').removeClass('theme-white theme-black theme-yellow theme-red theme-blue theme-green theme-pink theme-lightblue theme-orange theme-gray');
										$$('.view').addClass(this.value);
										}
									});
	$$('.HailStore-Twitter').on('click', function () {
	myApp.modal({
    title:  'Go To The HailStore Twitter?',
    text: 'To continue, please click Go.',
    buttons: [
      {
        text: 'Cancel',
        color: 'red', 
       
      },
     
      {
        text: 'Go',
        bold: true,
        onClick: function() {
       window.open("https://twitter.com/HailStore");
		}
      },
    ]
  })
});
$$('.HailStoreUpdate-Twitter').on('click', function () {
	myApp.modal({
    title:  'Go To The HailStore Update Twitter?',
    text: 'To continue, please click Go.',
    buttons: [
      {
        text: 'Cancel',
        color: '#ff0000', 
       
      },
     
      {
        text: 'Go',
        bold: true,
        onClick: function() {
       window.open("https://twitter.com/HailStoreUpdates");
		}
      },
    ]
  })
});
$$('.updateme').on('click', function () {
  myApp.modal({
    title:  'teamihackify.com would like to install "HailStore Update"',
    buttons: [
      {
        text: 'Cancel',
        color: 'red', 
       
      },
     
      {
        text: 'Install',
        bold: true,
        onClick: function() {
       myApp.alert("Update Not Reachable Please Wait 5 Seconds To See If Found Then Close This Dialog");
        }
      },
    ]
  })
});
$$('.TeamiHackify-Twitter').on('click', function () {
	myApp.modal({
    title:  'Go To The TeamiHackify Twitter?',
    text: 'To continue, please click Go.',
    buttons: [
      {
        text: 'Cancel',
        color: '#ff0000', 
       
      },
     
      {
        text: 'Go',
        bold: true,
        onClick: function() {
       window.open("https://twitter.com/TeamiHackify");
		}
      },
    ]
  })
});
$$('.TeamiHackify-Website1').on('click', function () {
	myApp.modal({
    title:  'Go To The TeamiHackify Website?',
    text: 'To continue, please click Go.',
    buttons: [
      {
        text: 'Cancel',
        color: '#ff0000', 
       
      },
     
      {
        text: 'Go',
        bold: true,
        onClick: function() {
       window.open("http://ih3.elementfx.com");
		}
      },
    ]
  })
});
$$('.PayWithATweet').on('click', function () {
	myApp.modal({
    title:  'Promote Us On Twitter?',
    text: 'To continue, please click Go and you will be redirected to Pay With A Tweet.',
    buttons: [
      {
        text: 'Cancel',
        color: '#ff0000', 
       
      },
     
      {
        text: 'Go',
        bold: true,
        onClick: function() {
       window.open("http://www.paywithapost.de/pay?id=22074578-ebb0-4762-8b4e-86193bc27745 ");
		}
      },
    ]
  })
});
var gettingStartedView = fw7.addView('.view-getting-started', {
	swipeBackPages: true
});
fw7.onPageBeforeAnimation("getting-started", function() {
	$('.get-started').on("click", function() {
		console.log(fw7.device);
	});
});
$(document).ready(function() {
	$.ajaxSetup({ cache: false });
	br7.loginCheckCookie();
	br7.rebindUserPanel();
	br7.setOpenBugsCount();
	br7.changeDesign("init");
	if (!localStorage.doneTutorial) {
		fw7.popup(".gettingstarted");
	}
});

fw7.onPageInit("getting-started-main", function() {
	var mySlider = fw7.slider('.slider-container-h', {
			spaceBetween: 100,
			pagination:'.slider-pagination-h',
			paginationHide: false
	});
	var vSlider = fw7.slider('.slider-container-v', {
			spaceBetween: 100,
			pagination:'.slider-pagination-v',
			paginationHide: false
	});
	$('.close-tutorial').on("click", function() {
		fw7.closeModal();
		setTimeout(function() {
			gettingStartedView.loadPage("index.html", false);
			gettingStartedView.history = ["index.html"];	
		}, 300);
		localStorage.setItem("doneTutorial","yes");
	});
});

this.checkForUpdatesOnLoad = function() {
			if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
				$.getJSON("update.json", function(data) {
					var updateAccepted = false;
					var closeButtonPressed = false;
					fw7.addNotification({
						title: "Software Update",
						message: "Version "+data.en.updates[0].version+" is now available.",
						media: "<img style='width: 29px; height: 29px' src='iTunesArtwork.png' />",
						onClose: function() {
							closeButtonPressed = false;
							if (!updateAccepted) {
								fw7.alert(unescape("Updates will be installed when HailStore is restarted."));
							}
						},
						onClick: function() {
							setTimeout(function() {
								if (!closeButtonPressed) {
									updateAccepted = true;
									fw7.closeNotification("li.notification-item");
									mainView.loadPage("index.html#tab24");
								}
							}, 10); 
						} 
					});
				});
			}
		};
		this.update = function() {
			var html= "<div> \
			<div class='content-block tablet-inset'> \
				<div class='content-block-inner'> \
					<img src='iTunesArtwork.png' style='width: 60px; height: 60px; vertical-align: top; float: left;'> \
					<p style='margin: 0; margin-left: 8px;'> \
						<span style='font-weight: 500; font-size: 16px; margin-left: 8px'>HailStore {{version}}<br></span> \
						<span style='font-size: 14px; margin-left: 8px'>TeamiHackify<br></span> \
						<span style='font-size: 14px; margin-left: 8px'>Downloaded</span> \
					</p> \
					<p>{{description}}<br><br>For more information, visit:<br><a href='http://ih3.elementfx.com/recent_updates' class='external' target='_blank' style='text-decoration: underline;'>http://ih3.elementfx.com/recent_updates</a>{{instructions}}</p> \
				</div> \
			</div> \
			</div> \
			<div class='list-block tablet-inset'> \
				<ul> \
					<li> \
						<a href='#' class='item-link open-popup' data-popup='.popup-update-detail'> \
							<div class='item-content'> \
								<div class='item-inner'> \
									<div class='item-title'>Details</div> \
								</div> \
							</div> \
						</a> \
					</li> \
				</ul> \
			</div> \
			<div class='list-block tablet-inset'> \
				<ul> \
					<li class='center item-button'> \
						<a href='#' class='update-button'> \
							<div class='item-content'> \
								<div class='item-inner'> \
									<div class='item-title' style='width: 100%;'>Install</div> \
								</div> \
							</div> \
						</a> \
					</li> \
				</ul> \
			</div>";
			$.getJSON("update.json", function(data) {
				$('p#update-status').closest(".page-content").html(html.replace(/{{version}}/g, data.en.updates[0].version).replace(/{{description}}/g, data.en.updates[0].description).replace(/{{instructions}}/g, ""));
				$('span#content').html(data.en.updates[0].content);
				$('.update-button').on("click", function() {
					fw7.modal({
						title: "Software Update",
						text: unescape("HailStore "+data.en.updates[0].version+" will begin installing. The app will restart when installation is finished."),
						buttons: [
							{
								text: "Later",
								onClick: function() {
									fw7.closeModal(); 
								}
							},
							{
								text: "Install",
								bold: true,
								onClick: function() {
									fw7.hidePreloader();
									$('body').append("<div class=\"update-view\"><img src=\"iTunesArtwork.png\" /></div>");
									setTimeout(function() {
										$('.update-view').append("<div class=\"progress-bar\"><div class=\"inner-progress\" id=\"update-progress\"></div></div>");
										interval = setInterval(function() {
											br7.addProgressToBar("update-progress");
										}, Math.random() * 750);
									}, 1000);
								}
							}
						]
					});
				});
			});
		};

		// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
        
        var picURL = 'http://hhhhold.com/88/d/jpg?' + Math.round(Math.random() * 100);
        // Random song
        var song = songs[Math.floor(Math.random() * songs.length)];
        // Random author
        var author = authors[Math.floor(Math.random() * authors.length)];
        // List item html
        var itemHTML = '<li class="item-content">' +
                          '<div class="item-media"><img src="' + picURL + '" width="44"/></div>' +
                          '<div class="item-inner">' +
                            '<div class="item-title-row">' +
                              '<div class="item-title">' + song + '</div>' +
                            '</div>' +
                            '<div class="item-subtitle">' + author + '</div>' +
                          '</div>' +
                        '</li>';
        // Prepend new list element
        ptrContent.find('ul').prepend(itemHTML);
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
    }, 2000);
});

function makecomment(id){console.log("1");if($$("#thumb-"+"down"+"-"+id).hasClass("boxed")){like=false;console.log("2");}
if($$("#thumb-"+"up-"+id).hasClass("boxed")){like=true;console.log("3");}
if(typeof(like)=="undefined"){console.log("4");HailStore.addNotification({title:'<span style="color:white">HailStore Comments</span>',subtitle:'Error!',message:'You must like or dislike to comment',media:'<img style="border-radius: 7px;" src="img/HailStoreH" width="44"></img>'});return;}
boxvalue=document.getElementById("comment-"+ id).value;data={"comment":boxvalue,"like":like,"id":id};console.log(data);var commentrequest=new XMLHttpRequest();commentrequest.onreadystatechange=function()
{HailStore.hideIndicator();if(commentrequest.readyState==4&&commentrequest.status==200)
{try{resp=JSON.parse(commentrequest.responseText);}
catch(err){HailStore.alert(err,"Response Error!");console.log(commentrequest.responseText);return;}
console.log(resp);if(resp.success){(eval(HailStore.getCurrentView().selector.substr(1,5)+".refreshPage()"))}
if(typeof resp.error!='undefined'){HailStore.alert(resp.error,"HailStore Comments")}}}
commentrequest.open('POST','comment.php',true);HailStore.showIndicator();commentrequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');commentrequest.send("comment="+ JSON.stringify(data));}
function thumb(stat,id){if(stat=="up"){if($$("#thumb-"+stat+"-"+id).hasClass("boxed")){$$("#thumb-up-"+id).removeClass("boxed");}
$$("#thumb-down-"+id).removeClass("boxed");$$("#thumb-"+stat+"-"+id).addClass("boxed");}
if(stat=="down"){if($$("#thumb-"+stat+"-"+id).hasClass("boxed")){$$("#thumb-down-"+id).removeClass("boxed");}
$$("#thumb-up-"+id).removeClass("boxed");$$("#thumb-"+stat+"-"+id).addClass("boxed");}}

this.submitNewBug = function() {
            bugsStorage.push({
                title: $('[name="newBugName"]').val() + " ",
                address: $('[name="newBugCat"]').val() + " ",
                description: $('[name="newBugDesc"]').val() + " ",
                author: readCookie("username"),
                status: "open",
                id: bugsStorage.length +1,
                date: dateString
            });
            localStorage.bugsData = JSON.stringify(bugsStorage);
            fw7.showPreloader("Submitting...");
            setTimeout(function() {
                fw7.hidePreloader();
                setTimeout(function() {
                    fw7.closeModal();
                    br7.generateHTML("open");
                    setTimeout(function() {
                        $('[name="newBugName"]').val("");
                        $('[name="newBugDesc"]').val("");
                    }, 300);
                    setTimeout(function() {
                        $('.views').removeClass("popup-compose");
                        component.generateHTML("open");
                    }, 500);
                }, 500);
            }, 2000);
        };




        var HailStoreData = localStorage.hsData ? JSON.parse(localStorage.hsData) : [];

$$('.popup').on('open', function () {
    $$('body').addClass('with-popup');
});
$$('.popup').on('opened', function () {
    $$(this).find('input[name="title"]').focus();
});
$$('.popup').on('close', function () {
    $$('body').removeClass('with-popup');
    $$(this).find('input[name="title"]').blur().val('');
});

// Popup colors
$$('.popup .color').on('click', function () {
    $$('.popup .color.selected').removeClass('selected');
    $$(this).addClass('selected');
});


// Add Task
$$('.popup .add-task').on('click', function () {
    var title = $$('.popup input[name="title"]').val().trim();
    if (title.length === 0) {
        return;
    }
    var color = $$('.popup .color.selected').attr('data-color');
    HailStoreData.push({
        title: title,
        color: color,
        checked: '',
        id: (new Date()).getTime()
    });
    localStorage.hsData = JSON.stringify(todoData);
    buildHailStoreListHtml();
    myApp.closeModal('.popup');
});


buildHailStoreListHtml();

// Mark checked
$$('.hailstore-items-list').on('change', 'input', function () {
    var input = $$(this);
    var item = input.parents('li');
    var checked = input[0].checked;
    var id = item.attr('data-id') * 1;
    for (var i = 0; i < HailStoreData.length; i++) {
        if (HailStoreData[i].id === id) HailStoreData[i].checked = checked ? 'checked' : '';
    }
    localStorage.hsData = JSON.stringify(HailStoreData);
});

// Delete item
$$('.HailStore-items-list').on('delete', '.swipeout', function () {
    var id = $$(this).attr('data-id') * 1;
    var index;
    for (var i = 0; i < HailStoreData.length; i++) {
        if (HailStoreData[i].id === id) index = i;
    }
    if (typeof(index) !== 'undefined') {
        HailStoreData.splice(index, 1);
        localStorage.hsData = JSON.stringify(todoData);
    }
});

var options = {
  'bgcolor': '#0da6ec',
  'fontcolor': '#fff'
}
var welcomescreen = myapp.welcomescreen(welcomescreen_slides, options);
var welcomescreen_slides = [
  {
    id: 'slide0',
    picture: '<div class="tutorialicon">♥</div>',
    text: 'Welcome to this tutorial. In the next steps we will guide you through a manual that will teach you how to use this app.'
  },
  {
    id: 'slide1',
    picture: '<div class="tutorialicon">✲</div>',
    text: 'This is slide 2'
  },
  {
    id: 'slide2',
    picture: '<div class="tutorialicon">♫</div>',
    text: 'This is slide 3'
  },
  {
    id: 'slide3',
    picture: '<div class="tutorialicon">☆</div>',
    text: 'Thanks for reading! Enjoy this app.<br><br><a id="tutorial-close-btn" href="#">End Tutorial</a>'
  }
];