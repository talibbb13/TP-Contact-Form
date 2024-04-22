function success() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let sub = document.getElementById("subject").value;
  let msg = document.getElementById("message").value;

  if (email == "") {
    console.log("please fill * inputs");
  }
  else if (msg == "") {
    console.log("sale, msg khali hai");
  }
  else {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Submit?',
      text: "You won't be able to change this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Submit it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Submitted!',
          'Your Form is submitted.',
          'success'
          
        )
        document.getElementById("email").value= "";
        document.getElementById("message").value= "";
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your submition is cancelled :)',
          'error'
        )
      }
    })
  }
}

// • Sweet alert pack file