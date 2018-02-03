# Pizza Menu Project

## Objective
In this project, a pretend client is asking me to create an online pizza menu system. I completed the project using HTML, CSS, and JavaScript, with some help from Bootstrap 4. Below are the site requirements as submitted by the 'client:'
  
THE MENU WILL NEED TO PROVIDE THE FOLLOWING:
* Radio buttons for a size selection:
* Personal, Medium, Large, and Extra Large
Checkboxes for multiple selection of meats:
* Pepperoni, Sausage, Canadian Bacon, Ground Beef, Anchovy, and Chicken
Radio buttons for a cheese selection:
* Regular, No cheese, Extra Cheese
Radio buttons for a crust selection:
* Plain Crust, Garlic Butter Crust, Cheese Stuffed Crust, Spicy Crust, and House Special Crust
Radio buttons for a sauce selection:
* Marinara sauce, White sauce, Barbecue sauce, and No Sauce
Checkboxes for multiple selection of veggies:
* Tomatoes, Onions, Olives, Green Peppers, Mushrooms, Pineapple, Spinach, and Jalapeno
  
BASE PIZZA PRICE BEFORE INGREDIENT MODIFICATIONS:
* Personal pizza = $6.00
* Medium pizza = $10.00
* Large pizza = $14.00
* XLarge pizza = $16.00
  
INGREDIENT MODIFIER PRICING:
*The following ingredients if selected will be added to the base pizza price:*
* Additional Meat items *(first one is complementary, +$1.00 each additional meat items beyond the first complementary meat item)*
* Additional Veggie items *(first one is complementary, +$1.00 each additional veggie items beyond the first complementary veggie item)*
* Extra Cheese *+$3.00 for any size pizza*
* Crust *+$3.00 for Cheese Stuffed Crust. All other crusts are complementary.*
  
EXPECTATIONS:
Your HTML/CSS/JavaScript will need to present the menu and retrive the patron's selection and return an invoiced receipt to the user's screen with their total purchase price once they press an "Order" button.

## Steps Taken
I started with a blank HTML file and built my project folder. Using Bootstrap 4, I was quickly able to pull together the HTML and CSS framework for how I wanted my site to look. I next dove into the JavaScript to meet the ‘client’ requirements. First, I built a function that would print content to the bottom portion of my website. I included variables for the running total and for the list of options chosen (in an array.) Next I added a function for the “clear” button, to reset the text in the invoice section as well as the selections made above. From there I built functions, one at a time, to take the input for the different user choices and add them to these two running variables. These were mapped sequentially so that when a user clicks the “order” button, they all run and generate the list of choices and the total in the invoice section at the bottom of the page. 

## Results
This was a fun project to construct. At first I was daunted by how many complex details were required, but after I started building the HTML and CSS I realized it didn’t have to be as scary as I imagined. With that win under my belt, I took a walk to think about how I would architect the JavaScript to efficiently gather and display the information I needed. The JavaScript file was definitely the hardest part of the writing the page, but I am now much more confident I can use these tools to build more interactive features in future pages! 
  
*Check out a live version of the page [here](https://filedn.com/lWYjvlpRciYBP9xzzyqgShB/pizza_menu/index.html).*