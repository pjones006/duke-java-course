function doChange() {
  alert("Clicked JS button");
}

function confirmClick() {
  var choice = confirm("Are you sure?");
  if (choice == true) {
    alert('You selected Okay!');
  }
  else {
     alert('You selected cancel!');
  }
}