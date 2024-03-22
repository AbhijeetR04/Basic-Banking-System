let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

// Send Money Function
function sendMoney(){
   var FirstName = document.getElementById("FirstName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 10000) {
      alert("Cannot Send More Than 10000$ in one transaction ")
   } else {
      var findUserBankAccount = FirstName + "Balance";
      console.log(findUserBankAccount);
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      console.log(finalAmount);
      myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
      console.log(myAccountBalance);
      document.getElementById("myAccountBalance").innerText = myAccountBalance;
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;

      transactionHistory();

      alert("Successful Transaction !!")
   }
}

// Transaction History Function
function transactionHistory(){
   var fName = document.getElementById("FirstName").value;
   var beneficiaryName = document.getElementById("FirstName").value + " " + document.getElementById("LastName").value;

   var emailId = document.getElementById(fName + "Email").innerHTML;
   
   var amountTransferred = document.getElementById("enterAmount").value;
     
   var dateAndTime = new Date();

   // Adding Transaction Record to the table
   
   let table = document.getElementById("addTransactions");
   
   let row = table.insertRow(0);
   
   let cell1 = row.insertCell(0);
   let cell2 = row.insertCell(1);
   let cell3 = row.insertCell(2);
   let cell4 = row.insertCell(3);

   cell1.innerHTML = beneficiaryName;
   cell2.innerHTML = emailId;
   cell3.innerHTML = amountTransferred;
   cell4.innerHTML = dateAndTime;

   row.appendChild(cell1);
   row.appendChild(cell2);
   row.appendChild(cell3);
   row.appendChild(cell4);
}
