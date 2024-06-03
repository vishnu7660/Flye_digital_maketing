function showImages(index) {
    const images = document.querySelectorAll('.image-container img');
    const dots = document.querySelectorAll('.dot');
    const imagesPerPage = 4;

    // Hide all images
    images.forEach(img => img.style.display = 'none');

    // Show the range of images for the current dot
    const start = index * imagesPerPage;
    const end = start + imagesPerPage;
    for (let i = start; i < end; i++) {
        if (images[i]) {
            images[i].style.display = 'block';
        }
    }

    // Update the active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Initial display
showImages(0);


 // Contact Us button click event
 $('#contact_us').on('click', function() {
    $('#contactModal').modal('show');
});


///Contact us from submission //////////////
    $('#submit_contact').on('click', function(e) {
      e.preventDefault();
      var formData = $('#contact_details_form').serialize();
     
      $.ajax({
        type: 'POST',
        url: 'https://getform.io/f/warkqjkb', 
        crossDomain: true,
        data: formData,
        dataType: "json",
        headers: {
            "Accept": "application/json"
            },
        success: function(response) {
          console.log(response);
          // handle success response
          // handle success response
         $('#contact_details_form')[0].reset(); // reset the form
        },
        error: function(xhr, status, error) {
          console.log(error);
          // handle error response
        }
      });
    });


 