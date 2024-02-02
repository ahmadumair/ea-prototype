# ea-prototype
This repository will showcase one of my UX interactive prototypes using HTML/CSS/SASS/JQuery/JSON/XML.

In this UX assignment, I have been given a task to create a Promotion Management system from scratch. 

First Version URL: https://ahmadumair.github.io/ea-prototype/pricing/add-promotion.html

I designed the first version of the "Add Promotion" page, but it has the following issues. 
- The pricing system was tightly coupled in the Database, and only one product item could be selected at a given time. For example
  - First, click the "Add Product" button, and a popup window will appear
  - Then Select an option from the "Product" dropdown e.g. "EA membership"
  - Then another dropdown will appear, "Product Services". Select an option e,g. "Renew EA Membership"
  - Then finally a "Price Component" will be shown, and need to select an option

  Suppose, if you have to select all values from the main product "EA Membership", then you have to repeat this whole process about 281 times, which wasn't very intuitive.

  So, in the next step, I normalized the database, categorized the "Products" based on "Product Services" and "Price Components" and introduced filters.

  Final version URL: https://ahmadumair.github.io/ea-prototype/pricing/add-promotion-check.html

  
  

