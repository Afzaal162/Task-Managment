function calculateAge() {
    var birthdate = new Date(document.getElementById('birthdate').value)
    var now = new Date();
    var age = now.getFullYear() - birthdate.getFullYear();
    var monthDiff = now.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthdate.getDate))
        age--;
    document.getElementById('result').innerHTML = "Your age is :" + age;
}