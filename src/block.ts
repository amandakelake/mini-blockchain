// @ts-ignore
import sha256 from 'crypto-js/sha256';

export default class Block {
	index: number;
	timestamp: string;
	data: string; // block data
	previousHash: string;
	hash: string;
	nonce: number;

	constructor(
		index: number,
		timestamp: string,
		data: string,
		previousHash: string = "",
	) {
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
		this.nonce = 0;
	}

	calculateHash(): string {
		return sha256(
			this.index + this.previousHash + this.timestamp + this.data + this.nonce,
		).toString();
	}

	mineBlock(difficulty: number): void {
		while (
			this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
			) {
			this.nonce++;
			this.hash = this.calculateHash();
		}
		console.log("Block mined: " + this.hash);
	}
}
