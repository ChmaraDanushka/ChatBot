
//auto send using enter hey..........
var input = document.getElementById("userInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

//convesation start..................
    function sendMessage() {
      var userInput = document.getElementById("userInput");
      var userMessage = userInput.value.trim();

      if (userMessage !== "") {
        displayMessage(userMessage, "user");
        userInput.value = "";
        getBotResponse(userMessage);
      }
    }

    function getBotResponse(message) {
      // bot massage
      var botMessages = {

        "help": "How can I assist you today? You can ask anything about MYBANK"

      };

      var botResponse;
      var botName;
      var cusname;
      
      if (message.toLowerCase().includes("balance")) {
        botResponse = botMessages["balance"];
      } 

//Get bot name.........  
else if (message.toLowerCase().includes("name")) {


      botResponse = "My name is SUSI From MYBANK and i Hare for help you...";
      

 
}
   
//respond for hi.........
      else if (message.toLowerCase().includes("hi")) {
        var randomans =[
             "How are you..Do you want any help ? ",
             "Hi...How Is Your Day.Any help...",
             "Hello How i Assist you"
        ];
        var randomIndex = Math.floor(Math.random() * randomans.length);
        botResponse = randomans[randomIndex];
      } 

      //respond for hello.........
      else if (message.toLowerCase().includes("hello")) {
        var randomans =[
             "How are you..Do you want any help ? ",
             "Hi...How Is Your Day.Any help...",
             "Hello How i Assist you"
        ];
        var randomIndex = Math.floor(Math.random() * randomans.length);
        botResponse = randomans[randomIndex];
      } 
      //respond for morning.........
      else if (message.toLowerCase().includes("morning")) {
        var randomans =[
            "GOOD MORNING!...How are you..Do you want any help ? ",
            "Hi...GOOD MORNING!...How Is Your Day.Any help...",
            "GOOD MORNING!...Hello How i Assist you today"
        ];
        var randomIndex = Math.floor(Math.random() * randomans.length);
        botResponse = randomans[randomIndex];
      }

      //respond for evening.........
      else if (message.toLowerCase().includes("evening")) {
        var randomans =[
             "GOOD EVENING!...How are you..Do you want any help ? ",
             "Hi...GOOD EVENING!...How Is Your Day.Any help...",
             "GOOD EVENING!...Hello How i Assist you"
        ];
        var randomIndex = Math.floor(Math.random() * randomans.length);
        botResponse = randomans[randomIndex];
      }

      //respond for night.........
      else if (message.toLowerCase().includes("night")) {
        var randomans =[
             "oky GOOD NINGT!...its pleser to help you ? ",
             "bye..bye.. have a nice day!... GOOD NIGHT!",
             "oky then GOOD NIGHT! any time im here for help"
        ];
        var randomIndex = Math.floor(Math.random() * randomans.length);
        botResponse = randomans[randomIndex];
        setTimeout(() => {
            location.reload();
            }, 4000);
    
            
        
      }

      else if (message.toLowerCase().includes("yes")) {
         
        var randomans =[
             "Sure! I will Help You with any MYBANK related think....",
             "Ok, I will assist you with any MYBANK related quection."   
        ];
        var randomIndex = Math.floor(Math.random() * randomans.length);
        botResponse = randomans[randomIndex];
      } 

// details about mybank............
      else if (message.toLowerCase().includes("mybank")) {
          fetch('db/about.txt')
          .then(response => response.text())
          .then(data => {
         var branchNames = data.split('\n');
        botResponse = "Yah sure this is small discription of our bank"+'<br><br>'+branchNames.join('<br>')+'<br>'+"Anything else.....";
         console.log(botResponse);

         })

      }
// details about branches by province............
      else if (message.toLowerCase().includes("branch")) {
        fetch('db/branches/branches.txt')
        .then(response => response.text())
        .then(data => {
       var branchNames = data.split('\n');
      botResponse = "This is details about where we have our branches "+'<br><br>'+branchNames.join('<br>')+'<br>'+"To get branches detail sellect name or code";
       console.log(botResponse);

       })

    }
//branches of central...................................................................................
      else if (message.toLowerCase().includes("my01") || message.toLowerCase().includes("central")) {
                fetch('db/branches/branch_dtl/central/central.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse = branchNames.join('<br>');
               console.log(botResponse);
        })
    }

    else if (message.toLowerCase().includes("ky001") || message.toLowerCase().includes("kandy")) {
                fetch('db/branches/branch_dtl/central/ky001.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse = branchNames.join('<br>')+('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
        })
    }

    else if (message.toLowerCase().includes("dg002") || message.toLowerCase().includes("digana")) {
                fetch('db/branches/branch_dtl/central/dg002.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse = branchNames.join('<br>')+('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
        })
    }

    else if (message.toLowerCase().includes("kt003") || message.toLowerCase().includes("katugasthota")) {
                fetch('db/branches/branch_dtl/central/kt003.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse = branchNames.join('<br>')+('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
        })
    }

    else if (message.toLowerCase().includes("np004") || message.toLowerCase().includes("nawalapitiya")) {
                fetch('db/branches/branch_dtl/central/np004.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse = branchNames.join('<br>')+('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
        })
    }

    else if (message.toLowerCase().includes("mt005") || message.toLowerCase().includes("mathale")) {
                fetch('db/branches/branch_dtl/central/mt005.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse = branchNames.join('<br>')+('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
        })
    }

    else if (message.toLowerCase().includes("uw006") || message.toLowerCase().includes("ukuwela")) {
                fetch('db/branches/branch_dtl/central/uw006.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse = branchNames.join('<br>')+('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
        })
    }
    else if (message.toLowerCase().includes("nw007") || message.toLowerCase().includes("nuwaraeliya")) {
                fetch('db/branches/branch_dtl/central/nw007.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse = branchNames.join('<br>')+('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
        })
    }
    else if (message.toLowerCase().includes("bt008") || message.toLowerCase().includes("bagawanthalawa")) {
                fetch('db/branches/branch_dtl/central/bt008.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse = branchNames.join('<br>')+('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
        })
    }
    else if (message.toLowerCase().includes("dg009") || message.toLowerCase().includes("dayagama")) {
                fetch('db/branches/branch_dtl/central/dg009.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse = branchNames.join('<br>')+('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
        })
    }



//branches of north......................................................................................
      else if (message.toLowerCase().includes("my02") || message.toLowerCase().includes("north") ) {
                fetch('db/branches/branch_dtl/north/north.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>');
               console.log(botResponse);

        })

    }

    else if (message.toLowerCase().includes("ap001") || message.toLowerCase().includes("anuradhapura") ) {
                fetch('db/branches/branch_dtl/north/ap001.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }
    else if (message.toLowerCase().includes("bl002") || message.toLowerCase().includes("bulnewa") ) {
                fetch('db/branches/branch_dtl/north/bl002.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }
    else if (message.toLowerCase().includes("gl003") || message.toLowerCase().includes("ganewela") ) {
                fetch('db/branches/branch_dtl/north/gl003.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }
    else if (message.toLowerCase().includes("gw004") || message.toLowerCase().includes("ganewalpola") ) {
                fetch('db/branches/branch_dtl/north/gw004.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }
    else if (message.toLowerCase().includes("mt005") || message.toLowerCase().includes("Madatugama") ) {
                fetch('db/branches/branch_dtl/north/mt005.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }

//branches of northern.....................................................................................  
      else if (message.toLowerCase().includes("my03") || message.toLowerCase().includes("northern")) {
                fetch('db/branches/branch_dtl/northern/northern.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }

    else if (message.toLowerCase().includes("jf001") || message.toLowerCase().includes("jaffna")) {
                fetch('db/branches/branch_dtl/northern/jf001.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }
    else if (message.toLowerCase().includes("kn002") || message.toLowerCase().includes("killinochchi")) {
                fetch('db/branches/branch_dtl/northern/kn002.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }
    else if (message.toLowerCase().includes("mn003") || message.toLowerCase().includes("mannar")) {
                fetch('db/branches/branch_dtl/northern/mn003.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }
    else if (message.toLowerCase().includes("vn004") || message.toLowerCase().includes("vavuniya")) {
                fetch('db/branches/branch_dtl/northern/vn004.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }
    else if (message.toLowerCase().includes("ma005") || message.toLowerCase().includes("millativu")) {
                fetch('db/branches/branch_dtl/northern/ma005.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }
    else if (message.toLowerCase().includes("am006") || message.toLowerCase().includes("alambil")) {
                fetch('db/branches/branch_dtl/northern/am006.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);

        })

    }



//branches of   eastern.....................................................................................      
      else if (message.toLowerCase().includes("my04") || message.toLowerCase().includes("eastern")) {
                fetch('db/branches/branch_dtl/eastern/eastern.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
  
        })

     }
     else if (message.toLowerCase().includes("ar001") || message.toLowerCase().includes("ampara")) {
                fetch('db/branches/branch_dtl/eastern/ar001.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
  
        })

     }
     else if (message.toLowerCase().includes("bt002") || message.toLowerCase().includes("batticaloa")) {
                fetch('db/branches/branch_dtl/eastern/bt002.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
  
        })

     }
     else if (message.toLowerCase().includes("tm003") || message.toLowerCase().includes("trincomalee")) {
                fetch('db/branches/branch_dtl/eastern/tm003.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
  
        })

     }
//branches of western........................................................................................       
      else if (message.toLowerCase().includes("my05") || message.toLowerCase().includes("western")) {
                fetch('db/branches/branch_dtl/western/western.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
    
        })

      }

      else if (message.toLowerCase().includes("wa001") || message.toLowerCase().includes("wariyapola")) {
                fetch('db/branches/branch_dtl/western/wa001.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
    
        })

      }

      
      else if (message.toLowerCase().includes("nk002") || message.toLowerCase().includes("nikaweratiya")) {
                fetch('db/branches/branch_dtl/western/nk002.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
    
        })

      }

      
      else if (message.toLowerCase().includes("pa003") || message.toLowerCase().includes("pannala")) {
                fetch('db/branches/branch_dtl/western/pa003.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
    
        })

      }

      
      else if (message.toLowerCase().includes("gm004") || message.toLowerCase().includes("galgamuwa")) {
                fetch('db/branches/branch_dtl/western/gm004.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
    
        })

      }

      
      else if (message.toLowerCase().includes("gg005") || message.toLowerCase().includes("gomugomuwa")) {
                fetch('db/branches/branch_dtl/western/gg005.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
    
        })

      }

      
      else if (message.toLowerCase().includes("pg006") || message.toLowerCase().includes("polgahawela")) {
                fetch('db/branches/branch_dtl/western/pg006.txt')
                .then(response => response.text())
                .then(data => {
               var branchNames = data.split('\n');
              botResponse =branchNames.join('<br>')+('<br>')+" Any other help...";
               console.log(botResponse);
    
        })

      }
      
// End of details about branches............

//Accout Types.................................................................................................       
else if (message.toLowerCase().includes("account")) {
                fetch('db/account/accounts.txt')
                .then(response => response.text())
                .then(data => {
               var accounts = data.split('\n');
              botResponse ="We have following account type available" + ('<br>') + accounts.join('<br>') + ('<br>') + ('<br>') +"  Type the name of account to get mor details.";
               console.log(botResponse);

        })

      }
// End of Accout types............

//..........................Accout Types details saving........................................................... 

else if (message.toLowerCase().includes("saving")) {
                fetch('db/account/accountdel/savingace/savingace.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
              botResponse ="oky you can get saving account details by using following areas" + ('<br>') + ('<br>') +  saveace.join('<br>') + ('<br>') + ('<br>') +" Use previous manu to get more details about saving accounts.";
               console.log(botResponse);

        })

      }
//  highlight.............
      else if (message.toLowerCase().includes("sav1")) {
                fetch('db/account/accountdel/savingace/highlight/highlight.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="This is highlighted detail of saving account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" want more details? use previous manu...";
               console.log(botResponse);

        })

      }

//  fasilities............
      else if (message.toLowerCase().includes("sav2")) {
                fetch('db/account/accountdel/savingace/facilities/facilities.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="This is main facilities of saving account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" want more details? use previous manu...";
               console.log(botResponse);
  
        })

      }
//  intress............
      else if (message.toLowerCase().includes("sav3")) {
                fetch('db/account/accountdel/savingace/intres/intres.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="This is intres rate of saving account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" want more details? use previous manu...";
               console.log(botResponse);

        })

      }
//  eligibility............
      else if (message.toLowerCase().includes("sav4")) {
                fetch('db/account/accountdel/savingace/eligibility/eligibility.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="Folloving details shows eligibility of saving account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about saving accounts.use previous manu...";
               console.log(botResponse);

        })

      }
//  requirement............
      else if (message.toLowerCase().includes("sav5")) {
                fetch('db/account/accountdel/savingace/requirement/requirement.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="Folloving details shows requirement of to open saving account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about saving accounts.use previous manu...";
               console.log(botResponse);

        })

      }

//  open account............
      else if (message.toLowerCase().includes("sav6")) {
                fetch('db/account/accountdel/savingace/openingace/openingace.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="How to open saving account.Use above details" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about saving accounts.Use previous manu...";
               console.log(botResponse);

        })

      }
// .........................End of Accout type saving ..............................................................
//..........................Accout Types details Current..............................................................  

else if (message.toLowerCase().includes("current")) {
                fetch('db/account/accountdel/currentace/currentace.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
              botResponse ="you can get Current account details by using following areas" + ('<br>') + ('<br>') +  saveace.join('<br>') + ('<br>') + ('<br>') +"  To get more details about Current accounts.Use previous manue.";
               console.log(botResponse);

        })

      }
//  highlight............
      else if (message.toLowerCase().includes("cur1")) {
                fetch('db/account/accountdel/currentace/highlight.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="This is highlighted detail of Current account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" want more details? Use previous manu...";
               console.log(botResponse);

        })

      }

//  fasilities............
      else if (message.toLowerCase().includes("cur2")) {
                fetch('db/account/accountdel/currentace/facility.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="This is main facilities of Current account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" want more details? use previous manu...";
               console.log(botResponse);

        })

      }

//  eligibility............
      else if (message.toLowerCase().includes("cur3")) {
                fetch('db/account/accountdel/currentace/eligibility.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="Folloving details shows eligibility of Current account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about current accounts.Use previous manu...";
               console.log(botResponse);

        })

      }
//  requirement............
      else if (message.toLowerCase().includes("cur4")) {
                fetch('db/account/accountdel/currentace/requirement.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="Folloving details shows requirement of to open Current account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about current accounts.use previous manu...";
               console.log(botResponse);

        })

      }

//  open account............
      else if (message.toLowerCase().includes("cur5")) {
                fetch('db/account/accountdel/currentace/opening.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);

              botResponse ="How to open Current account.Use above details" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about current accounts.use previous manu...";
               console.log(botResponse);

        })

      }
// .........................End of Accout type current ............

//..........................Accout Types details salery..............................................................  

else if (message.toLowerCase().includes("salary")) {
                fetch('db/account/accountdel/salaryace/salaryace.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
              botResponse ="you can get Salary account details by using following areas" + ('<br>') + ('<br>') +  saveace.join('<br>') + ('<br>') + ('<br>') +"  To get more details about Salary accounts.Use previous manue.";
               console.log(botResponse);

        })

      }
//  highlight............
      else if (message.toLowerCase().includes("sal1")) {
                fetch('db/account/accountdel/salaryace/highlight.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="This is highlighted detail of Salary account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" want more details? Use previous manu...";
               console.log(botResponse);

        })

      }

//  fasilities............
      else if (message.toLowerCase().includes("sal2")) {
                fetch('db/account/accountdel/salaryace/facility.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="This is main facilities of Salary account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" want more details? use previous manu...";
               console.log(botResponse);

        })

      }

//  eligibility............
      else if (message.toLowerCase().includes("sal3")) {
                fetch('db/account/accountdel/salaryace/eligibility.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="Folloving details shows eligibility of Current account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about current accounts.Use previous manu...";
               console.log(botResponse);

        })

      }
//  requirement............
      else if (message.toLowerCase().includes("sal4")) {
                fetch('db/account/accountdel/salaryace/requirement.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="Folloving details shows requirement of to open Salary account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about current accounts.use previous manu...";
               console.log(botResponse);

        })

      }

//  open account............
      else if (message.toLowerCase().includes("sal5")) {
                fetch('db/account/accountdel/salaryace/opening.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="How to open Salary account.Use above details" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about current accounts.use previous manu...";
               console.log(botResponse);

        })

      }

      //  Deposit and Withdraw account............
      else if (message.toLowerCase().includes("sal6")) {
                fetch('db/account/accountdel/salaryace/dipwith.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);;
              botResponse ="Details about Deposit and Withdraw of Salary Accounts" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about current accounts.use previous manu...";
               console.log(botResponse);

        })

      }
// .........................End of Accout type salary .......................................................
//..........................Accout Types details senior cilizen..............................................................  

else if (message.toLowerCase().includes("senior")) {
                fetch('db/account/accountdel/senior/seniorcitizenace.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
              botResponse ="you can get Senior Citizen account details by using following areas" + ('<br>') + ('<br>') +  saveace.join('<br>') + ('<br>') + ('<br>') +"  To get more details about Citizen account.Use previous manue.";
               console.log(botResponse);

        })

      }
//  highlight............
      else if (message.toLowerCase().includes("sen1")) {
                fetch('db/account/accountdel/senior/highlight.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="This is highlighted detail of  Senior Citizen  account account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" want more details? Use previous manu...";
               console.log(botResponse);

        })

      }

//  fasilities............
      else if (message.toLowerCase().includes("sen2")) {
                fetch('db/account/accountdel/senior/facility.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="This is main facilities of  Senior Citizen  account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" want more details? use previous manu...";
               console.log(botResponse);

        })

      }

//  eligibility............
      else if (message.toLowerCase().includes("sen3")) {
                fetch('db/account/accountdel/senior/eligibility.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="Folloving details shows eligibility of Senior Citizen account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about  Senior Citizen accounts.Use previous manu...";
               console.log(botResponse);

        })

      }
//  requirement............
      else if (message.toLowerCase().includes("sen4")) {
                fetch('db/account/accountdel/senior/requirement.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="Folloving details shows requirement of to open  Senior Citizen account" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about Senior Citizen accounts.use previous manu...";
               console.log(botResponse);

        })

      }

//  open account............
      else if (message.toLowerCase().includes("sen5")) {
                fetch('db/account/accountdel/senior/opening.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="How to open  Senior Citizen account.Use above details" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about  Senior Citizen accounts.use previous manu...";
               console.log(botResponse);

        })

      }

      //  Deposit and Withdraw account............
      else if (message.toLowerCase().includes("sen6")) {
                fetch('db/account/accountdel/senior/dipwith.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
               var saDetails = saveace.map(line => "•  " + line);
              botResponse ="Details about Deposit and Withdraw of  Senior Citizen  Accounts" + ('<br>') + ('<br>') + saDetails.join('<br>') + ('<br>') + ('<br>') +" if want more details about  Senior Citizen accounts.use previous manu...";
               console.log(botResponse);

        })

      }
// .........................End of Accout type senior citiyen ............

//  ............................loan..................................................

      else if (message.toLowerCase().includes("loan")) {
                fetch('db/loan/loan.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
              
              botResponse ="We offer Following loan types for our customer "+('<br>') +('<br>')+ saveace.join('<br>') + ('<br>') + ('<br>') +"Select loan code from above manu, if you want more details.";
               console.log(botResponse);

        })

      }

      else if (message.toLowerCase().includes("loa1")) {
                fetch('db/loan/education.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
              
              botResponse ="Main delais about Education loan"+('<br>')+('<br>') + saveace.join('<br>') + ('<br>') + ('<br>') +"Visit your nearst branch to get more details...any other help?";
               console.log(botResponse);

        })

      }

      else if (message.toLowerCase().includes("loa2")) {
                fetch('db/loan/home.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
              
      
              botResponse ="Main delais about home loan"+('<br>')+('<br>') + saveace.join('<br>') + ('<br>') + "Visit your nearst branch to get more details...any other help?";
               console.log(botResponse);

        })

      }

      else if (message.toLowerCase().includes("loa3")) {
                fetch('db/loan/leasing.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
              botResponse ="Main delais about Leasing loan"+('<br>')+('<br>') + saveace.join('<br>') + ('<br>') + ('<br>') +"Visit your nearst branch to get more details...any other help?";
               console.log(botResponse);

        })

      }

      else if (message.toLowerCase().includes("loa4")) {
                fetch('db/loan/personal.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
              
              botResponse ="Main delais about Personal loan"+('<br>')+('<br>') + saveace.join('<br>') + ('<br>') + ('<br>') +"Visit your nearst branch to get more details...any other help?";
               console.log(botResponse);

        })

      }
      //  about susi............
      else if (message.toLowerCase().includes("yourself")) {
                fetch('db/imsusi.txt')
                .then(response => response.text())
                .then(data => {
               var saveace = data.split('\n');
              
              botResponse =('<br>') + saveace.join('<br>') + ('<br>') + ('<br>') +"Visit your nearst branch to get more details...any other help?";
               console.log(botResponse);

        })

      }

//Conversation for bye ............
    
        else if (message.toLowerCase().includes("bye")) {
      var randomans =[
             "Oky.. im always hear for any help.. see you again..",
             "Its pleasure to help you, Bye Bye...."   
        ];
        var randomIndex = Math.floor(Math.random() * randomans.length);
        botResponse = randomans[randomIndex];
    //refresh page
        setTimeout(() => {
        location.reload();
        }, 4000);

        
    }

    //Conversation for thanks ............
    
    else if (message.toLowerCase().includes("thank")) {
      var randomans =[
             "It was my pleasure.....see you later...",
             "You're most welcome..See you...",
             "Its pleasure to help you, Bye Bye...."   
        ];
        var randomIndex = Math.floor(Math.random() * randomans.length);
        botResponse = randomans[randomIndex];
    //refresh page
        setTimeout(() => {
        location.reload();
        }, 4000);

        
    }
// help............
        else if (message.toLowerCase().includes("help")) {

            botResponse = botMessages["help"];  
    }
      else {
        var randomans =[
             "Sorry! i Cant understand it. Plz... Chack and tell me what help you want... ",
             "I think its wrong word.i cant understand....",
             "That thing is not in my area. Sorry for that.... anything else"
        ];
        var randomIndex = Math.floor(Math.random() * randomans.length);
        botResponse = randomans[randomIndex];

      }

      setTimeout(function() {
        displayMessage(botResponse, "bot");
      }, 500);
    }

    //end......................................................................
   
    //.....................................................................

    function displayMessage(message, sender) {
      var chatContainer = document.getElementById("chatContainer");
      var messageElement = document.createElement("div");
      
      messageElement.classList.add(sender + "-message");
      messageElement.innerHTML = message;

      chatContainer.appendChild(messageElement);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
