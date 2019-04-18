class TeamMemberButton {
  // button constructor
  constructor(button) {
    this.button = button;
    this.buttonData = this.button.dataset.lastname;
    // data selector in HTML is lower case last names
    this.lastnameBio = document.querySelector(`.team-member-bio[data-lastname="${this.buttonData}"]`)
    this.button.addEventListener('click', this.selectButton.bind(this));
  }

  selectButton() {

    const buttons = document.querySelectorAll('.team-member-button');

    // remove any active-button classes and toggle the selected button
    buttons.forEach(button => { button.classList.remove('active-button') });
    this.button.classList.toggle('active-button');

    const bios = document.querySelectorAll('.team-member-bio');

    // remove any active bios and toggle the selected bio
    bios.forEach(bio => { bio.classList.remove('active-bio') });
    this.lastnameBio.classList.toggle('active-bio');

  }
}



// grab teamMemberButtons from document

let teamMemberButtons = document.querySelectorAll('.team-member-button');

// convert to array

teamMemberButtons = Array.from(teamMemberButtons);

// use map() array method from stretch goals to return new components

teamMemberButtons = teamMemberButtons.map(button => new TeamMemberButton(button));


