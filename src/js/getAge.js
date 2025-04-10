export default function getAge(birthdateString) {
    const birthdate = new Date(birthdateString);
    const today = new Date();
  
    let age = today.getFullYear() - birthdate.getFullYear();
  
    const hasHadBirthdayThisYear =
        today.getMonth() > birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() && today.getDate() >= birthdate.getDate());
  
    if (!hasHadBirthdayThisYear) {
        age--;
    }
  
    return age;
}
  