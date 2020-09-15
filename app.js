function submitEmail()
{
  
var booking_email = $('input[name=booking_email]').val();
if(booking_email=="")
{
alert('Please enter email ID');
}
else if( /(.+)@(.+){1,}\.(.+){2,}/.test(booking_email) )

{
alert('success');

}
else {
  alert('Please enter Valid Email ID');
}
}
