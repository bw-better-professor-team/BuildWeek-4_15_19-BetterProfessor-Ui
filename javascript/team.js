class TeamMemberButton {
  constructor(button) {
    this.button = button;
    this.buttonData = this.button.dataset.lastname;
    this.lastnameBio = document.querySelector(`.team-member-bio[data-lastname="${this.buttonData}"]`)
    this.button.addEventListener('click', this.selectButton.bind(this));
  }

  selectButton() {

    const buttons = document.querySelectorAll('.team-member-button');

    buttons.forEach(button => { button.classList.remove('active-button') });
    buttons.forEach(button => { button.classList.add('inactive-button') });

    this.button.classList.remove('inactive-button');
    this.button.classList.add('active-button');

    const bios = document.querySelectorAll('.team-member-bio');
    bios.forEach(bio => { bio.classList.remove('active-bio') });
    bios.forEach(bio => { bio.classList.add('inactive-bio') });

    this.lastnameBio.classList.remove('inactive-bio');
    this.lastnameBio.classList.add('active-bio');

  }
}

let teamMemberButtons = document.querySelectorAll('.team-member-button');

teamMemberButtons = Array.from(teamMemberButtons);
teamMemberButtons = teamMemberButtons.map(button => new TeamMemberButton(button));


