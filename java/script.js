document.addEventListener('DOMContentLoaded', function() {
    const studentInfo = document.getElementById('studentInfo');
    const pizzaForm = document.getElementById('pizzaForm');

    
    const studentId = '200552575';
    const studentName = 'Namandeep Singh';
    studentInfo.textContent = `Student ID: ${studentId}, Name: ${studentName}`;

    function handleOrder() {
        const size = document.getElementById('size').value;
        const crust = document.getElementById('crust').value;
        const cheese = document.getElementById('cheese').checked;
        const sauce = document.querySelector('input[name="sauce"]:checked').value;
        const delivery = document.getElementById('delivery').value;

        
        const pizza = new Pizza(size, crust, cheese, toppings, sauce, delivery);

        
        const pizzaDescription = document.createElement('p');
        pizzaDescription.textContent = pizza.getDescription();
        pizzaForm.insertAdjacentElement('beforeend', pizzaDescription);
    }

    const orderButton = document.getElementById('orderButton');
    orderButton.addEventListener('click', handleOrder);

  
    class Pizza {
        constructor(size, crust, cheese, toppings, sauce, delivery) {
            this.size = size;
            this.crust = crust;
            this.cheese = cheese;
            this.toppings = toppings;
            this.sauce = sauce;
            this.delivery = delivery;
        }

        
    }
});
