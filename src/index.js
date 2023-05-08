$ = require('jquery');
global.$ = $;

const solana = new Connection("http://api.devnet.solana.com");
const txn = Buffer.from('abcd')

//import {sendAndConfirmWithRetry} from "@helium/spl-utils";
//sendAndConfirmWithRetry(solana, txn, {skipPreflight: true}, 'confirmed');
