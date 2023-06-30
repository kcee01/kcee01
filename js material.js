//object

let episode = {
    Title : "Your Perception, Your Reality",
    Duration : 50,
    hasBeenWatched : true
    };

  console.log(episode);
//dot notation
  console.log(episode.Title);

  console.log(episode.Duration);

  console.log(episode.hasBeenWatched);

  // class & Arrays
  class Episode  {
    constructor(title,duration,hasBeenWatched){
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
    };
    
    let firstEpisode = new Episode("Your Perception, Your Reality", 60, true);
    let secondEpisode = new Episode("Need vs. Greed", 40, true);
    let thirdEpisode = new Episode("Human Capital", 53, true);
    
    
    
    let episodes = [];
    
    episodes.push(firstEpisode,thirdEpisode,secondEpisode,thirdEpisode);
    
    episodes.unshift(thirdEpisode);
    
    episodes.pop(thirdEpisode);
    
    let numberOfEpisodes = episodes.length;
    
    console.log(episodes, numberOfEpisodes);

    // switch statement
    let firstUser = {
      name: 'Will Alexander',
      age: 33,
      accountLevel: 'normal'
  };
  
  let secondUser = {
      name: 'Sarah Kate',
      age: 21,
      accountLevel: 'premium'
  };
  
  let thirdUser = {
      name: 'Audrey Simon',
      age: 27,
      accountLevel: 'mega-premium'
  };
    switch (firstUser.accountLevel) {
      case 'normal':
          console.log('You have a normal account!');
          break;
      case 'premium':
          console.log('You have a premium account!');
          break;
      case 'mega-premium':
          console.log('You have a mega premium account!');
          break;
      default:
          console.log('Unknown account type!');
  }

  //instances
  class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    showBalance() {
        console.log('Balance: ' + this.balance + ' EUR');
    }
    
    deposit(amount) {
        console.log('Depositing ' + amount + ' EUR');
        this.balance += amount;
        this.showBalance();
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Withdrawal denied!');
        } else {
            console.log('Withdrawing ' + amount + ' EUR');
            this.balance -= amount;
            this.showBalance();
        }
    }
}

// static
class BePolite {
  static sayHello() {
      console.log('Hello!');
  }
  static sayHelloTo(name) {
      console.log('Hello ' + name + '!');
  }
  static add(firstNumber, secondNumber) {
      return firstNumber + secondNumber;
  }
}

BePolite.sayHello(); // prints 'Hello!'
BePolite.sayHelloTo('Will'); // prints 'Hello Will!'
const sum = BePolite.add(2, 3); // sum = 5