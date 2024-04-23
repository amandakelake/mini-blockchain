import  Block from "../src/block";
import  Blockchain from "../src/blockchain";

const myBlockchain = new Blockchain();
console.debug("Mining block 1...");
myBlockchain.addBlock(
	new Block(
		1,
		"2024-04-23",
		JSON.stringify({ sender: 'lgc', receive: 'lgc', value: 5 })
	)
);

console.debug("Mining block 2...");
myBlockchain.addBlock(
	new Block(
		2,
		"2024-02-18",
		JSON.stringify({ sender: 'lgc2', receive: 'lgc2', value: 3 })
	)
);

console.debug("Blockchain is valid: ", myBlockchain.isChainValid());

myBlockchain.chain[1].data = JSON.stringify({
	amount: 100,
});

console.debug("Blockchain is valid: ", myBlockchain.isChainValid());
