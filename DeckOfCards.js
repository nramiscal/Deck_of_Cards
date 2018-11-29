// Assignment: Deck of Cards


// Create a Card class. A card should have the following functionality:
//
// Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// Each Card should have a numerical value (1-13)
// Each Card should have a show method (log the card's information to the console)

function Card(suit, number){
    // the attributes of the Card class are: this.suit, this.number, this.string and this.name
    this.suit = suit;
    this.number = number;

    switch(this.number) {
    case 1:
        this.string = "Ace";
        break;
    case 11:
        this.string = "Jack";
        break;
    case 12:
        this.string = "Queen";
        break;
    case 13:
        this.string = "King";
        break;
    default:
        this.string = number.toString();
    }

    this.name = this.string + " of " + this.suit

    this.show = function(){
        console.log(this.name);
    }
}

// Create a Deck class. A deck should have the following functionality:
//
// The Deck should contain the 52 standard Cards
// The Deck should be able to shuffle - DONE
// The Deck should be able to reset - DONE
// The Deck should be able to deal a random Card - DONE
// Deal should return the Card that was dealt and remove it from the Deck

function Deck(){
    this.deck = []

    this.createDeck = function(){
        suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
        for (var suit of suits){
            for (var num = 1; num <= 13; num++){
                card = new Card(suit, num);
                this.deck.push(card);
            }
        }
    }

    this.displayDeck = function(){
        for (var card of this.deck){
            card.show();
        }
    }

    this.shuffle = function(){
        var min = 0;
        var max = this.deck.length-1;
        for (var i=0; i < this.deck.length; i++){
            var idx = Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive

            var temp = this.deck[i];
            this.deck[i] = this.deck[idx];
            this.deck[idx] = temp;
        }
        console.log("=========== DECK SHUFFLED! =============:");
        this.displayDeck();
    }

    this.reset = function(){
        this.deck = [];
        this.createDeck();
        console.log("=========== DECK RESET =============:");
        this.displayDeck();
    }

    this.deal = function(){
        var min = 0;
        var max = this.deck.length-1;
        var idx = Math.floor(Math.random() * (max - min + 1)) + min;

        var cardToBeDealt = this.deck[idx];
        this.deck.splice(idx, 1);
        return cardToBeDealt;
    }
}

// Now create a Player class. A Player should have the following functionality:
//
// The Player should have a name
// The Player should have a hand (an array of cards taken from a Deck)
// The Player should be able to take a Card (use the deck.deal method)
// The Player should be able to discard a Card

function Player(name){
    this.name = name;
    this.hand = []

    this.takeCard = function(){
        this.hand.push(deck.deal())
    }

    this.showHand = function(){
        console.log(`SHOWING ${this.name}'s HAND:`)
        for (var card of this.hand){
            card.show();
        }
    }

    this.discard = function(num){
        // splice returns the removed object inside a list!
        var discardedCard = this.hand.splice(num-1,1)[0];
        this.showHand();
        console.log(`${this.name} HAS DISCARDED: ${discardedCard.name}`);

    }
}

deck = new Deck();
deck.createDeck();
// deck.shuffle();
// deck.reset();
bob = new Player("Bob");
ann = new Player("Ann")
for (var i =1; i <= 5; i++){
    bob.takeCard();
    ann.takeCard();
}
ann.showHand();
bob.showHand();
// console.log(deck.deck.length);
bob.discard(5); // Bob is discarding the 5th card in his hand
