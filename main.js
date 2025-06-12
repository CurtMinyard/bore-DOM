//I HAD TO GO TO W3-SCHOOLS AND READ THE WHOLE CHAPTER ON JS HTML DOM AND ASKED MDN WED DOCS. TO COME UP WITH THIS///
// 1. Alter the text color of the paragraph to a shade of aqua.
const paragraph = document.querySelector("p");
paragraph.style.color = "aqua";
// 2. Adjust the font size of the heading to 42 pixels.
const heading = document.querySelector("#text");
heading.style.fontsize = "42px";
// 3. Replace the text in the paragraph with the new Lorem Ipsum content.
paragraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices." 
// 4. Reduce the opacity of the 13th item to 30% transparency.
const li13 = document.querySelector("#item-13");
li13.style.opacity = 0.3;
//5. Modify the text of the 3rd item to read Greetings!
const li3 = document.querySelector("#item-3");
li3.innerText = "Greetings!";
// 6. Update the image below the list to display the new image.
const img = document.querySelector("img");
img.src = "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc"
// 7. Resize the new image to a height of 250 pixels.
img1.style.height = "250px";                                                                                                                                                                                                                                   
// 8. Integrate an additional image using innerHTML below the existing image.

// 9. Adjust the height of the new image to 280 pixels programmatically.
img2.style.height ="280";
// 10. Append a 16th <li> element to the list using innerHTML.
const list = document.querySelector("ul");
list.innerHTML += 'li id="item-16">Append</li>';
// 11. Assign the same class as the other list items to the new <li> element using JavaScript.
const lastItem = document.querySelector("#item-16");
const exampleItem =  document.querySelector('.item'); 
const className = exampleItem.className;
lastItem.className = className;
// 12. Populate the new <li> with the text "Never gonna give you up."
lastItem.textContent = 'Never gonna give you up.';
