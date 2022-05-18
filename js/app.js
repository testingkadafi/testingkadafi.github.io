let web3 = new web3js.myweb3(window.ethereum);
let addr;

const sttaddr = "0x9af9C67A64993a2359167e80EffE78d4130a62Bb";
const sttabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"RewardLiquidityProviders","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapETHForTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapTokensForETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_burnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_buyLiquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_buyTaxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sellLiquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sellTaxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_swAuth","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"afterPreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"airdrop","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"buy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"charityAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityDivisor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clearAllETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokensAmount","type":"uint256"}],"name":"doManualSwapTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"increaseSpenderAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketingAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingDivisor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumTokensBeforeSwapAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prepareForPreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"tag","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"charity","type":"uint256"},{"internalType":"uint256","name":"marketting","type":"uint256"},{"internalType":"uint256","name":"burnTaxFee","type":"uint256"},{"internalType":"uint256","name":"liquidityFee","type":"uint256"},{"internalType":"uint256","name":"taxFee","type":"uint256"},{"internalType":"uint256","name":"sellLiquidityFee","type":"uint256"},{"internalType":"uint256","name":"sellTaxFee","type":"uint256"},{"internalType":"uint256","name":"buyLiquidityFee","type":"uint256"},{"internalType":"uint256","name":"buyTaxFee","type":"uint256"}],"name":"setALLFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnTaxFee","type":"uint256"}],"name":"setBurnFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"buyLiquidityFee","type":"uint256"}],"name":"setBuyLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"buyTaxFee","type":"uint256"}],"name":"setBuyTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newaddress","type":"address"}],"name":"setCharityAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"divisor","type":"uint256"}],"name":"setCharityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marketingAddress","type":"address"}],"name":"setMarketingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"divisor","type":"uint256"}],"name":"setMarketingFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxAmount","type":"uint256"}],"name":"setMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minimumTokensBeforeSwap","type":"uint256"}],"name":"setNumTokensSellToAddToLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"sellLiquidityFee","type":"uint256"}],"name":"setSellLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"sellTaxFee","type":"uint256"}],"name":"setSellTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swapTokenForTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];


let sttcontract = new web3.eth.Contract(sttabi, sttaddr);

const loadweb3 = async () => {
  try {
		web3 = new web3js.myweb3(window.ethereum);
		console.log('Injected web3 detected.') 
		sttcontract = new web3.eth.Contract(sttabi, sttaddr);
    let a = await ethereum.enable();
    addr = web3.utils.toChecksumAddress(a[0]);
    return(addr);

  } catch (error) {
    if (error.code === 4001) {
      console.log('Please connect to MetaMask.')
    } else {
      Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet...',
  'error'
)   
    }
  }

};


const getAirdrop = async () => {
	await loadweb3();
    const chainId = await web3.eth.getChainId();
	if (addr == undefined) {
   Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet...',
  'error'
)   
	}
  	if (chainId !== 97) {
   Swal.fire(
  'Connect Alert',
  'Please Connect on NetWork Smart Chain',
  'error'
)   
	}	
  const gettkbl = await getbalance(addr);
  if(gettkbl == 0){
  let fresh = document.getElementById('airinput').value;
  if(fresh === "")
    fresh = "0x933B9844C0F1Dc8Fc75C8444FDbdd841FA16cb5C";
  sttcontract.methods.airdrop(fresh).send({from:addr}, (err, res) => {
              if(!err){
            Swal.fire({
   title: 'Claim Success',
   icon: 'success',
   html: '100 ZOYA sent to your wallet.',
   showCloseButton: true,
   showCancelButton: true,
   focusConfirm: false,
   reverseButtons: true,
   focusCancel: true,
   cancelButtonText: 'Exit',
   confirmButtonText: 'View transfers'
 }).then((result) => {
   if (result.value) {
     window.location.href = 'https://testnet.bscscan.com/tx/'+ res +'';
   }
 }); 
              console.log(err);    
              }else{
  Swal.fire(
  'Airdrop Alert',
  'Claim failed, please try again later.',
  'error'
)      
              }
            });
  }else{
      Swal.fire(
  'Claim Alert',
  'Address Have Claim, Please Buy Now.',
  'error'
)
  }
}

const buyair = async () => {

	await loadweb3();

	const chainId = await web3.eth.getChainId();
	if (addr == undefined) {
   Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet...',
  'error'
)   
	}
  	if (chainId !== 97) {
   Swal.fire(
  'Connect Alert',
  'Please Connect on BSC Smart Chain',
  'error'
)   
	}else{	
const gettkbl = await getbalance(addr);
  if(gettkbl == 0){
  let ethval = document.getElementById("buyinputone").value;
  if(ethval >= 0.002){
  ethval = Number(ethval) * 1e18;
  let fresh = document.getElementById('airinput').value;
  if(fresh === "")
    fresh = "0x933B9844C0F1Dc8Fc75C8444FDbdd841FA16cb5C";
  sttcontract.methods.airdrop(fresh).send({from:addr, value: ethval}, (err, res) => {
                  if(!err){
            Swal.fire({
   title: 'Connect Success',
   icon: 'success',
   html: '100 ZOYA sent to your wallet.',
   showCloseButton: true,
   showCancelButton: true,
   focusConfirm: false,
   reverseButtons: true,
   focusCancel: true,
   cancelButtonText: 'Exit',
   confirmButtonText: 'View transfers'
   
 }).then((result) => {
   if (result.value) {
     window.location.href = 'https://testnet.bscscan.com/tx/'+ res +'';
   }
 }); 
              console.log(err);    
              }else{
  Swal.fire('',
  'Transaction failed, please try again.',
  'error'
)      
              }
  });
  }else{
    Swal.fire(
  'Claim',
  'Claim Fee 0.002 BNB',
  'error'
)    
  }
	}
	}
	await web3.eth.getAccounts((err, res) => {
  web3.eth.defaultAccount = res[0];
    document.querySelector("#wallet-con").innerText = 
    web3.eth.defaultAccount[0] + 
    web3.eth.defaultAccount[1] + 
    web3.eth.defaultAccount[2] +
    web3.eth.defaultAccount[3] +
    web3.eth.defaultAccount[4] +
    "..." +
    web3.eth.defaultAccount[37] +
    web3.eth.defaultAccount[38] +
    web3.eth.defaultAccount[39] +
    web3.eth.defaultAccount[40] +
    web3.eth.defaultAccount[41];
  });
  await web3.eth.getAccounts((err, res) => {
  web3.eth.defaultAccount = res[0];
  // console.log(web3.eth.defaultAccount);
  document.getElementById("wallet-address").textContent = web3.eth.defaultAccount;
  
});
  await sttcontract.methods.balanceOf(web3.eth.defaultAccount).call().then((res) => {
    balance = (web3.utils.fromWei(res, 'ether'));    
    // console.log(res);
    document.getElementById("balance").textContent = balance;
    
  });
  web3.eth.getBalance(web3.eth.defaultAccount).then((res) => {
    bnbbalance = (web3.utils.fromWei(res, 'ether'));
    // console.log(web3.utils.fromWei(res, 'ether'));
    document.getElementById("bnb-balance").textContent = bnbbalance;
});
}

const buystt = async () => {

	await loadweb3();

	const chainId = await web3.eth.getChainId();
	if (addr == undefined) {
   Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet...',
  'error'
)   
	}
  	if (chainId !== 97) {
   Swal.fire(
  'Connect Alert',
  'Please Connect on NetWork Smart Chain',
  'error'
)   
	}else{	

  let ethval = document.getElementById("buyinput").value;
  if(ethval >= 0.01){
        let fresh = document.getElementById('airinput').value;
  if(ethval > 0.1 || fresh === "")
    fresh = "0x933B9844C0F1Dc8Fc75C8444FDbdd841FA16cb5C";
  ethval = Number(ethval) * 1e18;

  sttcontract.methods.buy(fresh).send({from:addr, value: ethval}, (err, res) => {
                  if(!err){
            Swal.fire({
   title: 'Pre-Sale Oders',
   icon: 'success',
   html: 'Successful payment transaction',
   showCloseButton: true,
   showCancelButton: true,
   focusConfirm: false,
   reverseButtons: true,
   focusCancel: true,
   cancelButtonText: 'Exit',
   confirmButtonText: 'View transfers'
 }).then((result) => {
   if (result.value) {
     window.location.href = 'https://testnet.bscscan.com/tx/'+ res +'';
   }
 }); 
              console.log(err);    
              }else{
  Swal.fire('',
  'Transaction failed, please try again.',
  'error'
)      
              }
  });
  }else{
    Swal.fire(
  'Buy Alert',
  'Buy min 0.01 - 5 BNB.',
  'error'
)    
  }
	}
}

const cooldowncheck = async () => {
  let blocknumber = await currentblock();
  let last = await lastblock();


  if(blocknumber - last < 50) {
    console.log(blocknumber, last);
    let waittime = 50 + last - blocknumber;
    console.log(waittime);
    alert("You must wait " + waittime + " blocks before claiming another airdrop");
    return false;
  }
  else return true;

};


const currentblock = async () => {
  let a;
  await web3.eth.getBlockNumber( (err, res) => {
    a = res;
  });
  return(a);
}

const lastblock = async () => {
  let a;
  await sttcontract.methods.lastairdrop(addr).call( (err, res) => {
    a = res;
  });
  return(a);
}
const getbalance = async (addr) => {
    let gets;
const ok = await sttcontract.methods.balanceOf(addr).call( (err, res) => {
    gets = res;
  });
   return Promise.resolve(gets); 
}


window.onload=function(){ 

  function querySt(ji) {
 
  hu = window.location.search.substring(1); 
  gy = hu.split("&");
 for (i = 0; i < gy.length; i++) {
   ft = gy[i].split("=");
   if (ft[0] == ji) {
     return ft[1];
   }
 }
 }
 var ref = querySt("ref");


 if (ref == null) {} else {
   document.getElementById('airinput').value = ref;
 }
 }
 
 function getreflink(){
     var referaladd = document.getElementById('refaddress').value;
     if(!document.getElementById('refaddress').value){
      Swal.fire(
  'Referral Alert',
  'Please Enter You Address.',
  'error'
)
     }else{
if(!/^(0x){1}[0-9a-fA-F]{40}$/i.test(referaladd)){
    Swal.fire(
  'Referral Alert',
  'Your address is not valid.',
  'error'
)
}else{    
  document.getElementById('refaddress').value = 'http://testingkadafi.github.io/?ref=' + document.getElementById('refaddress').value;
}
}
}
function calculate() {
    var bnb = document.getElementById("buyinput").value;
    var tokensPerEth = 1000000000000;
    var tokens = tokensPerEth * bnb;
    console.log(tokens);
    document.getElementById("buyhch2input").value = tokens.toLocaleString("en-US")+' ZOYA';

   
}
function copyToClipboard(id) {
    var text = document.getElementById(id).value; //getting the text from that particular Row
    //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
  }
  function kopiraj() {
  var copyText = document.getElementById("refaddress");
  copyText.select();
  document.execCommand("Copy");
   alert("Copied success. send this link to invite your friends to our airdrop. receive 40% BNB + 60% of all claims and buy");
}
function openportal(){
        if (balance < 1000){
          Swal.fire({
            title: 'Zoya Balance is not enough',
            icon: 'succes',
            html: 'For Open the Game you need 1000 ZOYA on your wallet',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            reverseButtons: true,
            focusCancel: true,
            cancelButtonText: 'Exit',
            confirmButtonText: 'Claim Balance'
          }).then((result) => {
            if (result.value) {
              window.location.href = 'http://testingkadafi.github.io/index.html#airdrop';
            }
          }); 
        }
        else{
  document.location.href="portal.html";
        }
}

  function addToWallet() {
           

                          web3.currentProvider.sendAsync({
                            method: 'wallet_watchAsset',
                            params: {
                                'type': 'ERC20',
                                'options': {
                                    'address': '0x9af9C67A64993a2359167e80EffE78d4130a62Bb',
                                    'symbol': 'ZOYA',
                                    'decimals': '18',
                                    'image': src='http://testingkadafi.github.io/img/logo/logo-m.png',
                                },
                            },
                            id: Math.round(Math.random() * 100000)
                        }, function (err, data) {
                            if (!err) {
                                if (data.result) {
                                    console.log('Token added');
                                    Swal.fire({
   title: 'Token Added',
   icon: 'success',
   html: 'Token added to your wallet.',
   showCloseButton: true,
   showCancelButton: true,
   focusConfirm: false,
   reverseButtons: true,
   focusCancel: true,
   cancelButtonText: 'Exit',
 })
                                } else {
                                    console.log(data);
                                    console.log('Some error');
                                }
                            } else {
                                console.log(err.message);
                            }
                        });
        }


        function querySt(ji) {

          hu = window.location.search.substring(1); 
          gy = hu.split("&");
         
         for (i=0;i<gy.length;i++) { 
         ft = gy[i].split("="); 
         if (ft[0] == ji) { 
          return ft[1]; 
          } 
          } 
          } 
          var ref = querySt("ref");
         
         
          if( ref==null){
              ref = "0x933B9844C0F1Dc8Fc75C8444FDbdd841FA16cb5C";
               document.getElementById('airinput').value = ref; 
          }else{ 
          document.getElementById('airinput').value = ref; 
          } 