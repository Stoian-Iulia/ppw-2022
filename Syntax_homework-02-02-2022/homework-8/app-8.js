
let userName = prompt("Write your login", '');

if (userName == 'Admin') {

  let pass = prompt('Write your password', '');

  if (pass == '1234') {
    alert( 'Login completed successfully!' );
  } else if (pass == '' || pass == null) {
    alert( 'validation error' );
  } else {
    alert( 'Login or password are incorrect' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Validation error' );
} else {
  alert( "Login is incorrect" );
}