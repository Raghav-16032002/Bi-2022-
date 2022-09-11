function generateCard() {
    // Get value of Student name from form input 
    const nameElement = document.getElementById("name");
    const nameValue = nameElement.value; 
    // Assign the value of student name to generated card
    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;

    // Get value of college name from form input 
    const collegeNameValue = document.getElementById("collegeName").value;
    // Assign the value of college name to generated card
    document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

    // Get value of location name from form input 
    const locationValue = document.getElementById("location").value;
    // Assign the value of location name to generated card
    document.getElementById("cardLocation").innerHTML = locationValue;
    // Get value of Image name from form input 
    // const ImageValue = document.getElementById("Image").value;
    // // Assign the value of Image to generated card
    // document.getElementById("cardImage").style.display = ImageValue;
    // Display final generated card to user     
    document.getElementById("collegeCard").style.display = "block";
}
function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        console.log(e.target.result);
        document.getElementById('blah').setAttribute("src",e.target.result);
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }