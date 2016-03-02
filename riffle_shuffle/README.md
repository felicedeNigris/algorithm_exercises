#Riffle Sort or 'Poker Shuffle Deck'

###A "riffle" is the standard way people shuffle cards by hand. You know, the thing that looks like this:


###Here's a rigorous definition of the riffle algorithm:

- cut the deck into halves half1 and half2
- grab a random number of cards from the top of half1 (could be 0, must be less than or equal to the number of cards left in half1) and throw them into the shuffled_deck
- grab a random number of cards from the top of half2 (could be 0, must be less than or equal to the number of cards left in half2) and throw them into the shuffled_deck
- repeat steps 2-3 until half1 and half2 are empty.
