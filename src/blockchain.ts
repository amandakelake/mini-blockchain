import Block from "./block";

export default class Blockchain {
	chain: Block[];
	difficulty: number;
	height: number;

	constructor() {
		this.chain = [this.createGenesisBlock()];
		this.difficulty = 2;
		this.height = 1;
	}

	createGenesisBlock(): Block {
		return new Block(0, '2024-04-23', "Genesis block", "0");
	}

	getLatestBlock(): Block {
		return this.chain[this.chain.length - 1];
	}

	addBlock(newBlock: Block): void {
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.mineBlock(this.difficulty);
		this.chain.push(newBlock);
		this.height++;
	}

	isChainValid(): boolean {
		for (let i = 1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i - 1];

			if (currentBlock.hash !== currentBlock.calculateHash()) {
				return false;
			}

			if (currentBlock.previousHash !== previousBlock.hash) {
				return false;
			}
		}
		return true;
	}
}
