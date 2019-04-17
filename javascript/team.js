class TeamMemberButton {
  constructor(button){
    // assign this.tabElement to the tabElement DOM reference
    this.button = button;
    console.log("this.button");
    console.log(this.button);

    // Get the `data-tab` value from this.tabElement and store it here
    // this.tabData = this.tabElement.dataset.tab; 
    this.buttonData = this.button.dataset.lastName;
    console.log("this.buttonData");
    console.log(this.buttonData)

    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    // if(this.tabData === "all"){
      // If `all` is true, select all cards regardless of their data attribute values
      // this.cards = document.querySelectorAll('.card');
    // } else {
      // else if `all` is false, only select the cards with matching this.tabData values
    //   this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    // }

    this.lastNameBio = document.querySelector(`.team-member-bio[data-tab="${this.buttonData}"]`)
    console.log("this.lastNameBio");
    console.log(this.lastNameBio);

    
     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    // this.cards = Array.from(this.cards).map(card => new TabCard(card));

    // this.bioSection = new BioSection(this.lastNameBio);

    // Add a click event that invokes this.selectTab
    // this.tabElement.addEventListener('click', this.selectTab.bind(this));

    this.button.addEventListener('click', this.selectButton.bind(this));
  }

  selectButton() {
    // Select all elements with the .tab class on them
    // const tabs = document.querySelectorAll('.tab');

    const buttons = document.querySelectorAll('.team-member-button');


    // Iterate through the NodeList removing the .active-tab class from each element
    // tabs.forEach( tab => { tab.classList.remove('active-tab')})

    buttons.forEach( button => { button.classList.remove('active-button')});
    buttons.forEach( button => { button.classList.add('inactive-button')});

    const bios = document.querySelectorAll('.team-member-bio');
    bios.forEach( bio => { bio.style.display = 'none'});

    this.lastNameBio.style.display = 'flex';
    // const cards = document.querySelectorAll('.card');
    // Iterate through the NodeList setting the display style each one to 'none'
    // cards.forEach(function(card){
      // card.style.display = 'None';
    // });
    
    // Add a class of ".active-tab" to this.tabElement

    // this.tabElement.classList.add('active-tab');
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    // this.cards.forEach(card => card.selectCard());


  }
}

// class BioSection {

  // constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    // this.cardElement = cardElement;
  // }

  // constructor(lastNameBio) {
    // this.lastNameBio = lastNameBio;
  // }
  // selectBio(){
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement.style.display = "flex";
  // }

// }


/* START HERE:

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

// */

// let tabs = document.querySelectorAll('.tab');

// tabs.forEach(function(tab){
//   return new TabLink(tab);
// });

let teamMemberButtons = document.querySelectorAll('.team-member-button');

teamMemberButtons.forEach(function(button){
  return new TeamMemberButton(button);
});