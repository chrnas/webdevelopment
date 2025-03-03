function generateEmailFromForm(){
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const email = document.getElementById("email").value;

    const body = `Hej,\n\n${message}\n\nKind Regards \n${fname} ${lname}`;
    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailToLink;
}