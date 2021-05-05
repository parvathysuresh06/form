const array = [];
  const messageBox = document.getElementById("display");
  
  const fname = document.getElementById("Fname");
  const lname = document.getElementById("Lname");
  const Email = document.getElementById("email");
  const phn = document.getElementById("phn");
  const pass = document.getElementById("pass");
  const name = fname + lname;

  const add = () => {
      const fnam = fname.value;
      if (fnam == "") {
        alert("First Name must be filled out");
        return false;
      }
      const lnam = lname.value;
      if (lnam == "") {
        alert("Last Name must be filled out");
        return false;
      }
      const Em = Email.value;
      if (Em == "") {
        alert("Email must be filled out");
        return false;
      }
      const ph = phn.value;
      if (ph == "") {
        alert("Phone must be filled out");
        return false;
      }
      const gender=document.querySelector('input[type="radio"]:checked').value;
      if (gender== "") {
        alert("gender must be filled out");
        return false;
      }
    array.push({fnam : fnam, lnam : lnam, Em : Em,gen : gender, ph : ph});
    clearAndDisplay();
  };
  function clearAndDisplay() {
    fname.value = "";
    lname.value = "";
    Email.value = "";
    phn.value = "";
    pass.value = "";
  
  
  var html = "";

  // Show our output
  html += "<tr>";
  html += "<td>Name</td>";

  html += "<td>Email</td>";
  html +="<td>Gender</td>";
  html += "<td>Phone num</td>";
  html += "</tr>";
  for(i = 0; i <= array.length - 1; i++)
  {
    html += "<tr>";
    html += "<td>" + array[i].fnam + " " + array[i].lnam + "</td>";
   
    html += "<td>" + array[i].Em + "</td>";
    html +="<td>" + array[i].gen + "</td>";
    html += "<td>" + array[i].ph + "</td>";
    html += "</tr>";
  }
  messageBox.innerHTML = html;
}