    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    hamberger.addEventListener('click', function(){
      mobileNav.classList.add('open');  
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });

    var contactDetails = {
      name: "Ayush Bhagat",
      email: "bhagatayush710@gmail.com",
      phone: "+91 9536977782"
    };
    

    function contact() {
      // alert("Your contact details are:");
      alert("Name: " + contactDetails.name);
      alert("Email: " + contactDetails.email);
      alert("Phone: " + contactDetails.phone);
    }
    