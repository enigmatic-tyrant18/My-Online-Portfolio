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
      alert("Name: " + contactDetails.name);
      alert("Email: " + contactDetails.email);
      alert("Phone: " + contactDetails.phone);
    }

    document.getElementById("resumeButton").addEventListener("click", function() {
      // Replace 'path/to/your/resume.docx' with the actual path to your Word document
      var resumeUrl = './files/sf.resume.pdf';
    
      // Open the resume in a new tab or window
      window.open(resumeUrl, '_blank');
    });