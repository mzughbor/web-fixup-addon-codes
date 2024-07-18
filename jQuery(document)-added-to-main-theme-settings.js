jQuery(document).ready(function() {
  jQuery('.user_selection_chosen').click(function() {    
    // Get the ID of the clicked button
    var clickedId = jQuery(this).attr('id');
    console.log("The slected button is:", clickedId );
    // Store the clicked index in local storage
    localStorage.setItem('clickedId', clickedId);
  });
});
