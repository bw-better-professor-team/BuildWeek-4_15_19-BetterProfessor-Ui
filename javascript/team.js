class TeamMemberButton {
  constructor(button){
    // assign this.tabElement to the tabElement DOM reference
    this.button = button;
    console.log("this.button");
    console.log(this.button);

    // Get the `data-tab` value from this.tabElement and store it here
    // this.tabData = this.tabElement.dataset.tab; 
    console.log(this.button.dataset);
    this.buttonData = this.button.dataset.lastname;
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

    this.lastnameBio = document.querySelector(`.team-member-bio[data-lastname="${this.buttonData}"]`)
    console.log("this.lastnameBio");
    console.log(this.lastnameBio);

    
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

    this.lastnameBio.style.display = 'flex';
    this.button.classList.remove('inactive-button');
    this.button.classList.add('active-button');

  }
}


let teamMemberButtons = document.querySelectorAll('.team-member-button');

console.log("start at bottom of page");
console.log(teamMemberButtons);

teamMemberButtons.forEach(function(button){
  return new TeamMemberButton(button);
});

