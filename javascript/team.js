class TeamMemberButton {
  constructor(button){
    // assign this.tabElement to the tabElement DOM reference
    this.button = button;
    // debugger;
    // console.log("this.button");
    // console.log(this.button);

    // console.log(this.button.dataset);
    this.buttonData = this.button.dataset.lastname;
    // console.log("this.buttonData");
    // console.log(this.buttonData)

    this.lastnameBio = document.querySelector(`.team-member-bio[data-lastname="${this.buttonData}"]`)
    // console.log("this.lastnameBio");
    // console.log(this.lastnameBio);

    this.button.addEventListener('click', this.selectButton.bind(this));
  }

  selectButton() {


    const buttons = document.querySelectorAll('.team-member-button');

    buttons.forEach( button => { button.classList.remove('active-button')});
    buttons.forEach( button => { button.classList.add('inactive-button')});

    this.button.classList.remove('inactive-button');
    this.button.classList.add('active-button');


    const bios = document.querySelectorAll('.team-member-bio');
    bios.forEach( bio => { bio.classList.remove('active-bio')});
    bios.forEach( bio => { bio.classList.add('inactive-bio')});

    this.lastnameBio.classList.remove('inactive-bio');
    this.lastnameBio.classList.add('active-bio');

    
  }
}


let teamMemberButtons = document.querySelectorAll('.team-member-button');

// console.log("start at bottom of page");
// console.log(teamMemberButtons);

teamMemberButtons.forEach(function(button){
  return new TeamMemberButton(button);
});

