function changePassword()
{
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const retypePassword = document.getElementById('retypePassword').value;

    if (newPassword !== retypePassword)
    {
        alert('Error : Password does not match');
        return;
    }
    else if (currentPassword !== currentPassword)
    {
        alert("Error : Current Password is Incorrect");
        return;
    }


    // Clear the input fields
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('retypePassword').value = '';
}