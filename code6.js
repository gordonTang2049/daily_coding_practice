class TaxesPokerDealer{
	
	static suits = ["spades", "diamonds", "clubs", "hearts"]
	
	static values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

	

	constructor(){
		this.playerCards = []
	}

	static getDeck(){ 	
		var deck = new Array();

		for(var i = 0; i < this.suits.length; i++){
			for(var x = 0; x < this.values.length; x++){

				var card = {Value: this.values[x], Suit: this.suits[i]};

				deck.push(card);
			}
		}

		return deck;
	}

	static shuffle(deck){
	// for 1000 turns
	// switch the values of two random cards
		for (var i = 0; i < 500; i++){

			var location1 = Math.floor((Math.random() * deck.length));
			var location2 = Math.floor((Math.random() * deck.length));
			var tmp = deck[location1];
			
			deck[location1] = deck[location2];
			deck[location2] = tmp;
		}
		
	}

	static dealFiveCommunityCards(deck){

		for(let n = 0; n < 5; n++){
			let [card, ...rest] = deck
			deck.shift()
			return card
		}
	}

	static getDeckStatus(deck){
		return deck
	}

	static getNumOfCardInDeck(deck){
		return deck.length
	}

	getPlayersCard(){
		return this.playerCards

	}

	dealCard(deck){

		let [card, ...rest] = deck
		deck.shift()
		return card
	}	

	dealNumofCard(deck, times){

		for(let n =0; n < times; n++){
			let dealtCard = this.dealCard(deck)
			this.playerCards.push(dealtCard)
		}

	}

	static burnCard(deck){
		deck.shift()
		
	}

	static flop(deck){
		this.burnCard(deck)
		let cardsFlopped = [] 
		for(let i = 0; i < 3 ; i++){
			cardsFlopped.push(this.dealCard(deck)) 
		}
		return cardsFlopped
	}

	static turn(deck){
		burnCard(deck)
		return dealCard(deck)

	}

	static river(deck){
		burnCard(deck)
		return dealCard(deck)
	}


}




let deck = TaxesPokerDealer.getDeck()
TaxesPokerDealer.shuffle(deck)

function playTaxesPoker(NumOfPlayer){
	
	let players = []
	
	
	if(NumOfPlayer <= 8 ){
		

		for(let n = 0; n < NumOfPlayer; n++){

			let player = new TaxesPokerDealer
			player.dealNumofCard(deck, 2)
			players.push(player)

		}
			
	}else{
		for(let n = 0; n < 8; n++){

			let player = new TaxesPokerDealer
			player.dealNumofCard(deck, 2)
			players.push(player)
		}
	}
	return players 
}

function displayPlayersCard(player){
	console.log(`player card 1 : ${player.playerCards[0].Value} of ${player.playerCards[0].Suit}`)
	console.log(`player card 2 : ${player.playerCards[1].Value} of ${player.playerCards[1].Suit}`)
}

console.log('How many players (2-8) ?')
let player = playTaxesPoker(8) 
// let numOfPlayer = process.argv[3]
console.log(`${player.length} players on the table`)

console.log(`Your Hand: ${displayPlayersCard(player[0])}`)
console.log(`CPU1: ${displayPlayersCard(player[1])}`)
console.log(`CPU2: ${displayPlayersCard(player[2])}`)

console.log(`Flop ${TaxesPokerDealer.flop(deck)}`)
console.log(`Turn ${TaxesPokerDealer.turn(deck)}`)
console.log(`Rive ${TaxesPokerDealer.river(deck)}`)

console.log(TaxesPokerDealer.getNumOfCardInDeck(deck))