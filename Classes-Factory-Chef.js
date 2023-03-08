/** 
Chef Make Dinners

Chef should be a factory of Dinner
Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
Have the Chef create 3 dinners, log the dinners*/

class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  class Chef {
    constructor(name) {
      this.name = name;
      this.menue = [];
    }
      createDinner(appetizer, entree, dessert) {
        const chefMenue = new Dinner(appetizer, entree, dessert);
        this.menue.push(chefMenue);
        }
    
  }
  
  const chef1 = new Chef('Paul Bocuse');
  chef1.createDinner('Pâté en croûte', 'Truffle soup V.G.E.', 'Tarte aux pommes à la mode de chez nous');
  chef1.createDinner('Escargots de Bourgogne', 'Lobster Thermidor', 'Crème brûlée');
  chef1.createDinner('Soupe à l\'oignon', 'Coq au Vin', 'Mousse au Chocolat');
  
  console.log(chef1.menue);