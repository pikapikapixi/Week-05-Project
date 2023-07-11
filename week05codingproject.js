class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  describe() {
    return `${this.name} is a ${this.breed} cat.`;
  }
}

class CatBreedsMenu {
  constructor() {
    this.catBreeds = [];
    this.selectedBreed = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection !== '0') {
      switch (selection) {
        case '1':
          this.createCatBreed();
          break;
        case '2':
          this.viewCatBreed();
          break;
        case '3':
          this.deleteCatBreed();
          break;
        case '4':
          this.displayCatBreeds();
          break;
        default:
          selection = '0';
      }
      selection = this.showMainMenuOptions();
    }
    alert('Do you want to hear a bad cat joke? -Just kitten.');
  }

  showMainMenuOptions() {
    return prompt(`
    0) Vacate the cat litter box (exit menu)
    1) Induct a new cat breed into this realm
    2) Herd a cat breed from the trees (view cat breed)
    3) Take a cat breed to the Isengard (delete)
    4) Go to the galleria of all cat breeds
    `);
  }

  showBreedMenuOptions(breedInfo) {
    return prompt(`
      0) Back
      1) Add a new cat
      2) Delete a cat
      -----------------
      ${breedInfo}
    `);
  }

  displayCatBreeds() {
    let breedString = '';
    this.catBreeds.forEach((catBreed, index) => {
      breedString += `${index}) ${catBreed.breed}\n`;
    });
    alert(breedString);
  }

  createCatBreed() {
    const breed = prompt('Type the name of the new breed of cat: ');
    this.catBreeds.push({ breed, cats: [] });
  }

  viewCatBreed() {
    const index = prompt('Type index number of the cat breed that you wish to summon: ');
    if (index > -1 && index < this.catBreeds.length) {
      this.selectedBreed = this.catBreeds[index];
      let description = `Cat Breed: ${this.selectedBreed.breed}\n`;
      description += `Number of cats: ${this.selectedBreed.cats.length}\n`;
      this.selectedBreed.cats.forEach((cat, index) => {
        description += `${index}) ${cat.describe()}\n`;
      });
      const selection = this.showBreedMenuOptions(description);
      switch (selection) {
        case '1':
          this.createCat();
          break;
        case '2':
          this.deleteCat();
          break;
      }
    }
  }

  deleteCatBreed() {
    const index = prompt('Type index number of the cat breed that you wish to send away (sad meows): ');
    if (index > -1 && index < this.catBreeds.length) {
      this.catBreeds.splice(index, 1);
    }
  }

  createCat() {
    const name = prompt('Type a name for this new cat: ');
    this.selectedBreed.cats.push(new Cat(name, this.selectedBreed.breed));
  }

  deleteCat() {
    const index = prompt('Type the index number of the cat that you wish to give to the crazy cat lady: ');
    if (index > -1 && index < this.selectedBreed.cats.length) {
      this.selectedBreed.cats.splice(index, 1);
    }
  }
}

const catBreedsMenu = new CatBreedsMenu();
catBreedsMenu.start();