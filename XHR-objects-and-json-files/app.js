document.getElementById("btn1").addEventListener("click", loadCustomerData);
document.getElementById("btn2").addEventListener("click", loadAllCustomersData);

//load one customer
function loadCustomerData(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const output = `<ul>
      <li>ID: ${customer.id}</li>
      <li>Name: ${customer.name}</li>
      <li>Company: ${customer.company}</li>
      <li>Phone: ${customer.phone}</li>
      </ul>`;
      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

//load all customers
function loadAllCustomersData(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output = "";
      customers.map(customer => {
        output += `<ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>`;
      });
      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
