//going to menu from nav
 export function menuPage() {
  const theDiv = document.getElementById("content");
    const menuBackground = document.createElement("div");
    menuBackground.classList.add("menuPaper");
    //choko moko
    const itemOne = document.createElement("h2");
    itemOne.textContent = "CHOKO MOCO "
    itemOne.classList.add("bowlName");
    const itemOneSub = document.createElement("h3");
    itemOneSub.textContent = "Acai, banana, strawberries, peanut butter, almond milk / topped with granola, strawberries, banana, cacao nibs"
    itemOneSub.classList.add("subName");
    itemOneSub.style.fontFamily="'Merienda', cursive"
    //sweet cheeks
    const itemTwo = document.createElement("h2");
    itemTwo.textContent = "SWEET CHEEKS"
    itemTwo.classList.add("bowlName");
    const itemTwoSub = document.createElement("h3");
    itemTwoSub.textContent = "Acai, banana, blueberries, dates, coconut milk / topped with granola, cashews, blueberries"
    itemTwoSub.classList.add("subName");
    itemTwoSub.style.fontFamily="'Merienda', cursive"
    //gold magic
    const itemThree = document.createElement("h2");
    itemThree.textContent = "GOLD MAGIC"
    itemThree.classList.add("bowlName");
    const itemThreeSub = document.createElement("h3");
    itemThreeSub.textContent = "Banana, mango, turmeric, coconut oil, coconut milk/ topped with granola, banana, blueberries, chia seeds, coconut flakes"
    itemThreeSub.classList.add("subName");
    itemThreeSub.style.fontFamily="'Merienda', cursive"
    //cinnamonRoll
    const itemFour = document.createElement("h2");
    itemFour.textContent = "CINNAMON ROLL"
    itemFour.classList.add("bowlName");
    const itemFourSub = document.createElement("h3");
    itemFourSub.textContent = "Vanilla almond milk, gluten free oats, mayan honey, cinnamon, banana"
    itemFourSub.classList.add("subName");
    itemFourSub.style.fontFamily="'Merienda', cursive"

    // add the new elements to the DOM
    menuBackground.appendChild(itemOne);
    menuBackground.appendChild(itemOneSub);

    menuBackground.appendChild(itemTwo);
    menuBackground.appendChild(itemTwoSub);

    menuBackground.appendChild(itemThree);
    menuBackground.appendChild(itemThreeSub);

    menuBackground.appendChild(itemFour);
    menuBackground.appendChild(itemFourSub);
    theDiv.appendChild(menuBackground);


  };
 