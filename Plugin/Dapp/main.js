//基础设置---基础参数
var _ispligindebug = true;

//eth单位
var _ethWei = Math.pow(10, 18);//不会改变
var _ethWeiShow = 1;//根据合约设置改变
var _ettWei = Math.pow(10, 18);//不会改变
var _eth_ett_Ratio = Math.pow(10, 18);//不会改变

//token合约地址/ABI
var _ContractAddress_ETT = null;
var _ContractABI_ETT = null;
var _ContractDecimals_ETT = null;

//合约地址
var _ContractAddress = null;
//合约ABI
var _ContractABI = null
//合约地址_v1
var _ContractAddress_v1 = null;
//合约ABI_v1
var _ContractABI_v1 = null
//合约运行网络
//1：以太坊主网 https://cn.etherscan.com/
//3：Ropsten测试链 https://ropsten.etherscan.io/
//42：Kovan测试链 https://kovan.etherscan.io/
//4：Rinkeby测试链 https://rinkeby.etherscan.io/
//5：Goerli测试链 https://goerli.etherscan.io/
var _ContractRunNetwork = '1';//主网

//默认推荐码
var _ContractRecommendCode = '';
var _ContractInitAddr = '';

//余额显示精度
var _AccountDisplayPrecision = 6;
//合约显示精度——奖金数据等
var _ContractDisplayPrecision = 6;


//页面定义istest 网络环境
var _istest = _istest || 0
if (_istest) {
    //测试设置
    _ethWeiShow = 0.01;//100倍测试
    _ContractRunNetwork = '3';//Ropsten测试链
    _ContractAddress = '0xa7D076Ce79867EE9E174Cbc1df4bEB01C6b972bA';
    _ContractABI = [{ "inputs": [], "name": "SignIn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "Take_All", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_val", "type": "uint256" }], "name": "actAddup_SecurityAssistance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "actSetClose", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "actSetStartTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint8", "name": "level", "type": "uint8" }, { "internalType": "uint8", "name": "levelLockDemotion", "type": "uint8" }], "name": "actUserLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "addAddressToWhitelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "buyTicket", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "buyTicket_Airdrop", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "countBonus_Elite", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "countBonus_EliteStart", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint32", "name": "index", "type": "uint32" }], "name": "getBuyTicketRecordByAddress", "outputs": [{ "internalType": "uint256[5]", "name": "info", "type": "uint256[5]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint8", "name": "_type", "type": "uint8" }, { "internalType": "uint32", "name": "index", "type": "uint32" }], "name": "getCashOutDataByAddress", "outputs": [{ "internalType": "uint256[2]", "name": "info", "type": "uint256[2]" }, { "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "code", "type": "string" }], "name": "getCodeMapping", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getEliteSettleStatus", "outputs": [{ "internalType": "uint256[4]", "name": "info", "type": "uint256[4]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "uid", "type": "uint256" }], "name": "getIndexMapping", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint32", "name": "index", "type": "uint32" }], "name": "getInvestRecordByAddress", "outputs": [{ "internalType": "uint256[8]", "name": "info", "type": "uint256[8]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_index", "type": "uint256" }], "name": "getParam", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "rCode", "type": "string" }], "name": "getRCodeMappingLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getRCodeOffspringByAddress", "outputs": [{ "internalType": "string[]", "name": "offspring_CodeArr", "type": "string[]" }, { "internalType": "uint256[][]", "name": "offspring_info", "type": "uint256[][]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint8", "name": "_type", "type": "uint8" }, { "internalType": "uint32", "name": "index", "type": "uint32" }], "name": "getRewardDataByAddress", "outputs": [{ "internalType": "uint256[2]", "name": "info", "type": "uint256[2]" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint32", "name": "index", "type": "uint32" }], "name": "getSignInRecordByAddress", "outputs": [{ "internalType": "uint256[2]", "name": "info", "type": "uint256[2]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserByAddress", "outputs": [{ "internalType": "uint256[21]", "name": "info", "type": "uint256[21]" }, { "internalType": "string", "name": "code", "type": "string" }, { "internalType": "string", "name": "rCode", "type": "string" }, { "internalType": "address", "name": "raddr", "type": "address" }, { "internalType": "uint256", "name": "rID", "type": "uint256" }, { "internalType": "uint256", "name": "recommendNumber", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserInfo", "outputs": [{ "internalType": "uint256[4]", "name": "", "type": "uint256[4]" }, { "internalType": "string", "name": "", "type": "string" }, { "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "code", "type": "string" }, { "internalType": "string", "name": "rCode", "type": "string" }], "name": "invest", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "invest_Airdrop", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "isOpen", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "code", "type": "string" }], "name": "isUsedCode", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "isWhitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "removeAddressFromWhitelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }, { "internalType": "uint256", "name": "_val", "type": "uint256" }], "name": "sendETTTokenToAddr_Circulate", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "_addr", "type": "address" }, { "internalType": "uint256", "name": "_val", "type": "uint256" }], "name": "sendMoneyToAddr", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_taddr", "type": "address" }, { "internalType": "address", "name": "_addr", "type": "address" }, { "internalType": "uint256", "name": "_val", "type": "uint256" }], "name": "sendTokenToAddr", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_index", "type": "uint256" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "setParam", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newRatio", "type": "uint256" }], "name": "setRatio", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "settlement", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stateView", "outputs": [{ "internalType": "uint256[42]", "name": "info", "type": "uint256[42]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
    _ContractAddress_v1 = '0x4c39F7b24A5010117d80aA70AFe40D62c651cD14';
    _ContractABI_v1 = [{ "inputs": [], "name": "stateView", "outputs": [{ "internalType": "uint256[17]", "name": "info", "type": "uint256[17]" }], "stateMutability": "view", "type": "function" }]
    _ContractRecommendCode = '';
    _ContractInitAddr = '';

    _ContractAddress_ETT = "0xf4C4C8fcC32678D2F4C741DFb170E5AF480ad947";
    _ContractABI_ETT = [{ "constant": true, "inputs": [], "name": "defaultOperators", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "granularity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "operatorSend", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }], "name": "authorizeOperator", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "send", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "isOperatorFor", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }], "name": "revokeOperator", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "operatorBurn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "address[]", "name": "defaultOperators", "type": "address[]" }, { "internalType": "uint256", "name": "claimAmount", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Sent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Minted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Burned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "AuthorizedOperator", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "RevokedOperator", "type": "event" }]
    _ContractDecimals_ETT = 18;
} else {
    //主网设置
    //_ContractRunNetwork = '1';//主网
    _ContractAddress = '0x899CC5f7e0dCCEC1565A6C39320f6716076d314c';//填入主网合约地址
    _ContractABI = [{ "inputs": [], "name": "SignIn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "Take_All", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_val", "type": "uint256" }], "name": "actAddup_SecurityAssistance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "actSetClose", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "actSetStartTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint8", "name": "level", "type": "uint8" }, { "internalType": "uint8", "name": "levelLockDemotion", "type": "uint8" }], "name": "actUserLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "addAddressToWhitelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "buyTicket", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "buyTicket_Airdrop", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "countBonus_Elite", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "countBonus_EliteStart", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint32", "name": "index", "type": "uint32" }], "name": "getBuyTicketRecordByAddress", "outputs": [{ "internalType": "uint256[5]", "name": "info", "type": "uint256[5]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint8", "name": "_type", "type": "uint8" }, { "internalType": "uint32", "name": "index", "type": "uint32" }], "name": "getCashOutDataByAddress", "outputs": [{ "internalType": "uint256[2]", "name": "info", "type": "uint256[2]" }, { "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "code", "type": "string" }], "name": "getCodeMapping", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getEliteSettleStatus", "outputs": [{ "internalType": "uint256[4]", "name": "info", "type": "uint256[4]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "uid", "type": "uint256" }], "name": "getIndexMapping", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint32", "name": "index", "type": "uint32" }], "name": "getInvestRecordByAddress", "outputs": [{ "internalType": "uint256[8]", "name": "info", "type": "uint256[8]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_index", "type": "uint256" }], "name": "getParam", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "rCode", "type": "string" }], "name": "getRCodeMappingLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getRCodeOffspringByAddress", "outputs": [{ "internalType": "string[]", "name": "offspring_CodeArr", "type": "string[]" }, { "internalType": "uint256[][]", "name": "offspring_info", "type": "uint256[][]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint8", "name": "_type", "type": "uint8" }, { "internalType": "uint32", "name": "index", "type": "uint32" }], "name": "getRewardDataByAddress", "outputs": [{ "internalType": "uint256[2]", "name": "info", "type": "uint256[2]" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint32", "name": "index", "type": "uint32" }], "name": "getSignInRecordByAddress", "outputs": [{ "internalType": "uint256[2]", "name": "info", "type": "uint256[2]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserByAddress", "outputs": [{ "internalType": "uint256[21]", "name": "info", "type": "uint256[21]" }, { "internalType": "string", "name": "code", "type": "string" }, { "internalType": "string", "name": "rCode", "type": "string" }, { "internalType": "address", "name": "raddr", "type": "address" }, { "internalType": "uint256", "name": "rID", "type": "uint256" }, { "internalType": "uint256", "name": "recommendNumber", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserInfo", "outputs": [{ "internalType": "uint256[4]", "name": "", "type": "uint256[4]" }, { "internalType": "string", "name": "", "type": "string" }, { "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "code", "type": "string" }, { "internalType": "string", "name": "rCode", "type": "string" }], "name": "invest", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "invest_Airdrop", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "isOpen", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "code", "type": "string" }], "name": "isUsedCode", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "isWhitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "removeAddressFromWhitelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }, { "internalType": "uint256", "name": "_val", "type": "uint256" }], "name": "sendETTTokenToAddr_Circulate", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "_addr", "type": "address" }, { "internalType": "uint256", "name": "_val", "type": "uint256" }], "name": "sendMoneyToAddr", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_taddr", "type": "address" }, { "internalType": "address", "name": "_addr", "type": "address" }, { "internalType": "uint256", "name": "_val", "type": "uint256" }], "name": "sendTokenToAddr", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_index", "type": "uint256" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "setParam", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newRatio", "type": "uint256" }], "name": "setRatio", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "settlement", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stateView", "outputs": [{ "internalType": "uint256[42]", "name": "info", "type": "uint256[42]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
    _ContractAddress_v1 = '0x42810bB74029F35577cEf97c477c2E3F845bD690';//填入主网合约地址v1
    _ContractABI_v1 = [{ "inputs": [], "name": "stateView", "outputs": [{ "internalType": "uint256[17]", "name": "info", "type": "uint256[17]" }], "stateMutability": "view", "type": "function" }]
    _ContractRecommendCode = '';
    _ContractInitAddr = '';

    _ContractAddress_ETT = "0xf24a6d0362369d5f6ff579d30fcd8d38760c6099";
    _ContractABI_ETT = [{ "constant": true, "inputs": [], "name": "defaultOperators", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "granularity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "operatorSend", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }], "name": "authorizeOperator", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "send", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "isOperatorFor", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }], "name": "revokeOperator", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "operatorBurn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "address[]", "name": "defaultOperators", "type": "address[]" }, { "internalType": "uint256", "name": "claimAmount", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Sent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Minted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Burned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "AuthorizedOperator", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "RevokedOperator", "type": "event" }]
    _ContractDecimals_ETT = 18;
}

//页面定义_isNotAuthorize 账户授权
var _isNotAuthorize = _isNotAuthorize

//基础插件参数
var _dappBaseOptions = {
    transaction: {
        Decimals: 18,//精度 转出金额扩大精度默认18位
        //ContractAddress: null,//ERC20合约地址
        //ContractABI:null,//RRC20代币合约ABI
    },
    msgTips: function (msg) {
        //定义消息处理
        //alert(msg)
        msgtips(msg)
    },
    initCallBack: function (e, defaultAccount, isEthereum, isNotFirst) {
        //初始化完成后回调/网络变更回调/账号变更回调
        _ispligindebug && console.log('2.BaseInit:' + defaultAccount)

        //在这里处理 账号余额信息
        typeof HandleUserInfo === "function" && HandleUserInfo(e, defaultAccount, isEthereum)
    },
    initHandleNetworkType: function (e, networkType, networkName, networkScan) {
        //1：以太坊主网 https://cn.etherscan.com/
        //3：Ropsten测试链 https://ropsten.etherscan.io/
        //42：Kovan测试链 https://kovan.etherscan.io/
        //4：Rinkeby测试链 https://rinkeby.etherscan.io/
        //5：Goerli测试链 https://goerli.etherscan.io/
        //初始化完成后回调/网络变更回调
        _ispligindebug && console.log('1.NetworkType:' + networkType + ', NetworkName:' + networkName + ', NetworkScan:' + networkScan)

        //在这里处理 网络相关信息
        typeof HandleNetworkType === "function" && HandleNetworkType(e, networkType, networkName, networkScan)
    },
    networkChangeEventCallBack: function (e, networkType, networkName, networkScan) {
        //1：以太坊主网 https://cn.etherscan.com/
        //3：Ropsten测试链 https://ropsten.etherscan.io/
        //42：Kovan测试链 https://kovan.etherscan.io/
        //4：Rinkeby测试链 https://rinkeby.etherscan.io/
        //5：Goerli测试链 https://goerli.etherscan.io/
        //网络变更后回调
        _ispligindebug && console.log('networkChanged: new Network: NetworkType:' + networkType + ', NetworkName:' + networkName + ', NetworkScan:' + networkScan)
    },
    accountsChangedEventCallBack: function (e, defaultAccount) {
        //账号变更事件
        _ispligindebug && console.log('accountsChangedEvent: new accounts:' + defaultAccount)
    },
    isAuthorize: !_isNotAuthorize,//启用授权
    defaultNetwork: _ContractRunNetwork,//默认网络
}
//合约插件参数
var _dappContractOptions = {
    contract: {
        ContractAddress: _ContractAddress,//合约地址
        //合约ABI
        ContractABI: _ContractABI,
    },
    msgTips: function (msg) {
        //定义消息处理
        //alert(msg)
        msgtips(msg)
    },
    initCallBack: function (e, networkType, networkName, networkScan) {
        //初始化完成后回调/网络变更回调
        _ispligindebug && console.log("3.ContractTnit: Contract init succeed! " + 'NetworkType:' + networkType + ', NetworkName:' + networkName + ', NetworkScan:' + networkScan)

        e.getContractLink(null, function (contractLink) {
            var contractAddress = e.getContractAddress();

            //在这里处理 合约基础信息
            typeof HandleContractBaseInfo === "function" && HandleContractBaseInfo(e, networkType, contractLink, contractAddress)
        });
    },
    initAuthorizeCallBack: function (e, defaultAccount, isAuthorize) {
        //初始化完成后授权回调/网络变更回调/账号变更回调
        _ispligindebug && console.log("4.AuthorizeCallBack:" + isAuthorize + ",defaultAccount" + defaultAccount)

        //在这里处理 合约账号信息
        e.getNetworkType(function (networkType) {
            typeof HandleContractUserInfo === "function" && HandleContractUserInfo(e, isAuthorize, networkType, defaultAccount)
        })
    },
    accountsChangedEventCallBack: function (e, defaultAccount, isShowdefaultAccount) {
        //账号变更事件
        _ispligindebug && console.log('accountsChangedEvent: new accounts:' + defaultAccount)
    },
}

//-----------------------------------------------------------

//初始化插件---创建自定义插件
var _DappContractPlugin = InitDappContract(_dappContractOptions, _dappBaseOptions);

//-----------------------------------------------------------
//定义显示数据刷新触发事件
var HandleShowChangeLoad;
//定义显示数据方法
var HandleShowContractInfo;

var HandleShowContractUserInfo;
var HandleShowContractUserInfo2;
//定义处理代币授权方法
var HandleShowTokenApproveLoad;
//定义处理交易提示提示方法
var HandleShowTransactionProcessingLoad;

//初始化插件处理事件---初始化相关处理
//处理网络相关 优先级1
var HandleNetworkType = function (e, networkType, networkName, networkScan) {
    //e 为DappBase基础对象

    //显示合约运行网络名称
    var showContractRunNetworkName = _ContractRunNetwork != 1 ? e._getNetworkName(_ContractRunNetwork) + '网络' : '主网';
    $('.data-networkFullName').html(showContractRunNetworkName)

    if (networkType == _ContractRunNetwork) {
        //显示投资按钮
        $('.data-contractNetworkNormal').show()
        $('.data-switchNetwork').hide()
    } else {
        //运行网限制
        //显示切换网络
        $('.data-contractNetworkNormal').hide()
        $('.data-switchNetwork').show()

        //提示
        var msgtipsswitchNetwork = "合约运行在 " + showContractRunNetworkName + ' 请切换为 ' + showContractRunNetworkName
        msgtips3 && msgtips3(msgtipsswitchNetwork);
    }

    //显示当前网络名称
    $('.data-networkName').html(networkName + ' Net')
    //设置当前网络区块浏览器链接
    $('.data-networkScan').attr('href', networkScan)
}

//处理账号余额信息 优先级2
var HandleUserInfo = function (e, defaultAccount, isEthereum, isShowdefaultAccount) {
    //e 为DappBase基础对象
    if (!isEthereum) {
        //显示安装兼容钱包
        $('.data-installationSupport').show()
    } else {
        $('.data-installationSupport').hide()
    }

    //初始化显示
    $('.data-balance').html("--")
    $('.data-defaultAccount').html("--").val('')

    if (defaultAccount) {
        $('.data-defaultAccount').html(defaultAccount).val(defaultAccount)

        //设置账户地址区块浏览器链接
        e.getAccountLink(defaultAccount, function (accountLink) {
            $('.data-accountLink').attr('href', accountLink)
        })

        //初始化显示
        //显示当前账号余额
        e.getBalance(function (_balance) {
            _ispligindebug && console.log('2.1.HandleUserInfo:' + _balance)

            $('.data-balance').html(_balance.toFloor(_AccountDisplayPrecision))
        }, defaultAccount)

        //获取ett代币余额
        e.getTokenBalance(function (_balance) {
            $('.data-balance-ett').html(_balance.toFloor(_AccountDisplayPrecision))
        }, defaultAccount, _ContractAddress_ETT, _ContractABI_ETT, _ContractDecimals_ETT)


        //提示显示当前账号
        isShowdefaultAccount && msgtips2 && msgtips2(defaultAccount, '当前账户');
    }
}

//处理合约基础信息 优先级3
var HandleContractBaseInfo = function (e, networkType, contractLink, contractAddress) {
    //e 为DappContract对象

    HandleShowChangeLoad && HandleShowChangeLoad()

    _ispligindebug && console.log('3.1.HandleUserInfo:' + contractLink);

    //设置合约区块浏览器验证地址链接
    $('.data-contractLink').attr('href', contractLink)

    //初始化显示
    $('.data-contractState4').html("--"); //ETT兑换价格
    $('.data-contractState7_8_20_21_22').html("--"); //全球总流通量
    $('.data-contractState8').html("--"); // 全球消耗总量
    //节点投资

    $('.data-contractState12').html("--");
    $('.data-contractState13').html("--");
    $('.data-contractState14').html("--");
    $('.data-contractState15').html("--");
    $('.data-contractState16').html("--");
    $('.data-contractState18').html("--").data("value", '');

    //合约运行网络一致
    if (networkType == _ContractRunNetwork) {
        //显示合约状态-页面中间
        Dapp_getContractState(function (resulr, rdata) {
            if (resulr) {
                //_ispligindebug && console.log('EventOrderBy:0');

                $('.data-contractState4').html(rdata[4].div(_eth_ett_Ratio).mul(_ethWeiShow)); //ett价格
                $('.data-contractState8_41').html(rdata[8].add(rdata[41]).div(_ettWei)); //全球消耗
                $('.data-contractState9_40').html(rdata[9].add(rdata[40]).div(_ethWei).toFloor(_ContractDisplayPrecision));//质押总量

                var contractState7_8_20_21_22_v1 = rdata[7].add(rdata[8]).add(rdata[20]).add(rdata[21]).add(rdata[22])
                $('.data-contractState7_8_20_21_22_v1').html(contractState7_8_20_21_22_v1.div(_ettWei));//流通总量
                _DappContractPlugin.getContractObj(function (_ContractObj) {
                    _ContractObj.methods
                    .stateView()
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        //console.log(rdata)
                        //console.log(contractState7_8_20_21_22_v1)
                        //v1流通量数据data-contractState7_8_15_16
                        contractState7_8_20_21_22_v1 = contractState7_8_20_21_22_v1.add(rdata[7]).add(rdata[8]).add(rdata[15]).add(rdata[16])
                        //console.log(contractState7_8_20_21_22_v1)
                        $('.data-contractState7_8_20_21_22_v1').html(contractState7_8_20_21_22_v1.div(_ettWei));//流通总量
                    })
                }, _ContractAddress_v1, _ContractABI_v1)

                //节点投资                
                $('.data-contractState12').html(rdata[12].div(_ethWei));
                $('.data-contractState13').html(rdata[13].div(_ethWei));
                $('.data-contractState14').html(rdata[14].div(_ethWei));
                $('.data-contractState15').html(rdata[15].div(_ethWei));
                $('.data-contractState16').html(rdata[16].div(_ethWei));

                $('.data-contractState17').html(rdata[17].div(_ethWei));
                $('.data-contractState18').data("value", rdata[18]);
                $('.data-contractState19').html(rdata[19].div(_ethWei));
                $('.data-contractState30').html(rdata[30].div(_ethWei));
                //可以签到判断
                $("#signIn_img").data('open', rdata[32]);
                //赋值临时变量
                e.paramRatio = rdata[4].div(_eth_ett_Ratio);

                HandleShowContractInfo && HandleShowContractInfo();
            }
        })
    }
}

//处理合约账号信息 优先级4
var HandleContractUserInfo = function (e, isAuthorize, networkType, defaultAccount) {
    //e 为DappContract对象

    //初始化显示
    $('.data-contractUserInfo2').html("--").data("value", "")
    $('.data-contractUserInfo4').html("--").data("value", "")
    $('.data-contractUserInfo5').html("--")
    $('.data-contractUserInfo17').html("--")

    //分享页-社区明细
    $('.data-contractUserInfo-UID').html("--")
    $('.data-contractUserInfo-RUID').html("--")
    $('.data-contractUserInfo-RNumber').html("--")
    $('.data-contractUserInfo14').html("--")
    $('.data-contractUserInfo-rCode').html("--")
    $('.data-contractUserInfo19').html("--")
    //邀请码
    $('.data-contractUserInfoCode').html("--")
    $('.data-contractUserInfoCode-copyData').data("value", "")
    //推荐人地址
    $('.data-contractUserInfo-raddr').html("--")
    //未结算分红总收益
    $('.data-contractUserInfo-DailyDividend').html("--")
    //已结算区
    $('.data-contractUserInfo12').html("--")
    $('.data-contractUserInfo13').html("--")
    //质押信息
    $('.data-contractUserInfo-Invest-Level').html("--").data("value", "").data("status", "")
    $('.data-contractUserInfo-Invest-Money').html("--")
    $('.data-contractUserInfo-Invest-AdduoStaticBonus').html("--")
    $('.data-contractUserInfo-Invest-AdduoDynamicBonus').html("--")
    $('.data-contractUserInfo-Invest-OutMoney').html("--")

    //鉴权成功且合约运行网络一致
    if (isAuthorize && networkType == _ContractRunNetwork) {
        //获取用户信息
        Dapp_getContractUserInfo(function (resulr, rdata) {
            if (resulr) {
                var tempUserInfoData = rdata;
                //_ispligindebug && console.log('EventOrderBy:1');

                //会员信息               
                $('.data-contractUserInfo2').data("value", rdata[0][2]); //v1 版本vip等级
                $('.data-contractUserInfo4').data("value", rdata[0][4]); //v2 版本 团队等级
                $('.data-contractUserInfo17').data("value", rdata[0][17]); //当前等级

                $('.data-contractUserInfo6').html(rdata[0][6].div(_ethWei).toFloor(_ContractDisplayPrecision)); //参与质押总量

                //分享页-社区明细
                $('.data-contractUserInfoCode').html(rdata[1]); // 邀请码
                $('.data-contractUserInfo-rCode').html(rdata[2]);  //推荐码
                $('.data-contractUserInfo-RNumber').html(rdata[5]);//直推总人数
                $('.data-contractUserInfo14').html(rdata[0][14].div(_ethWei).toFloor(_ContractDisplayPrecision));//当前直推有效业绩
                $('.data-contractUserInfo19').html(rdata[0][19]);//团队人数
                //邀请码相关
                if (rdata[0][0] != 0) {
                    var code = rdata[1]
                    $('.data-contractUserInfoCode').html(code);
                    $('.data-contractUserInfoCode-copyData').data("value", code);
                }
                //推荐人地址
                if (rdata[3].mul(1) != "0") {
                    $('.data-contractUserInfo-raddr').html(rdata[3]);
                }
                //已结算区
                $('.data-contractUserInfo12').html(rdata[0][12].div(_ethWei).toFloor(_ContractDisplayPrecision)); // ETH 可提现收益
                $('.data-contractUserInfo13').html(rdata[0][13].div(_ettWei).toFloor(_ContractDisplayPrecision)); // GME 可提现收益               

                //资产页质押数据显示
                if (Number(rdata[0][10]) > 0) {
                    Dapp_getInvestRecordByAddress(function (resulr, rdata) {
                        if (resulr) {
                            //console.log(rdata)
                            //var tempInvestData = rdata;
                            var _recordsData = {};
                            _recordsData.Money = rdata[0].div(_ethWei);
                            _recordsData.AdduoStaticBonus = rdata[1].div(_ethWei);
                            _recordsData.AdduoDynamicBonus = rdata[2].div(_ethWei);
                            _recordsData.Status = rdata[3];
                            _recordsData.Level = rdata[4];
                            _recordsData.InvestTime = rdata[5].mul(1000).toString();
                            _recordsData.LastRwTime = rdata[6].mul(1000).toString();
                            _recordsData.OutTime = rdata[7].mul(1000).toString();

                            $('.data-contractUserInfo-Invest-Level').data("value", _recordsData.Level).data("status", _recordsData.Status)
                            $('.data-contractUserInfo-Invest-Money').html(_recordsData.Money.toFloor(_ContractDisplayPrecision))
                            $('.data-contractUserInfo-Invest-AdduoStaticBonus').html(_recordsData.AdduoStaticBonus.toFloor(_ContractDisplayPrecision))
                            $('.data-contractUserInfo-Invest-AdduoDynamicBonus').html(_recordsData.AdduoDynamicBonus.toFloor(_ContractDisplayPrecision))
                            var OutMoney = "0";
                            var maxOutMoney = 0;
                            Dapp_getContractState(function (resulr, rdata) {
                                if (resulr) {
                                    maxOutMoney = _recordsData.Money.mul(rdata[_recordsData.Level.add(22)]).div(1000);
                                    OutMoney = maxOutMoney.sub(_recordsData.AdduoStaticBonus).sub(_recordsData.AdduoDynamicBonus)
                                    if (Number(OutMoney) > 0) {
                                        $('.data-contractUserInfo-Invest-OutMoney').html(OutMoney.toFloor(_ContractDisplayPrecision))
                                    } else {
                                        $('.data-contractUserInfo-Invest-OutMoney').html("0.00")
                                    }
                                    ///未结算区计算显示
                                    var tempContractStateData = rdata;
                                    business_getRewardDataUn(function (rdata) {
                                        var nowTime = new Date();
                                        //console.log(tempContractStateData);
                                        var investLevelPoundage = tempContractStateData[35];
                                        //console.log(investLevelPoundage);
                                        var differTime = nowTime.getTime().div(1000).sub(_recordsData.LastRwTime.div(1000)).div(86400).toFloor(0);
                                        //console.log(differTime);
                                        var staticBouns = '0';
                                        if (Number(_recordsData.Status) == 0) {
                                            staticBouns = _recordsData.Money.mul(investLevelPoundage).mul(differTime).div(1000);
                                        }
                                        var enableSettleETHAmount = staticBouns.add(rdata[1]).add(rdata[2]).add(rdata[3]);
                                        if (Number(enableSettleETHAmount) > Number(maxOutMoney)) {
                                            enableSettleETHAmount = maxOutMoney;
                                        }
                                        $('.data-contractUserInfo-Unsettled-ETH').html(enableSettleETHAmount.toFloor(_ContractDisplayPrecision));
                                        $('.data-contractUserInfo-Unsettled-ETT').html(rdata[4].div(_ettWei).toFloor(_ContractDisplayPrecision));
                                        //可提现显示 Number(rdata[4])>= tempData[34];
                                        if (Number(tempUserInfoData[0][13]) >= Number(tempContractStateData[34])) {
                                            $('.data-contractUserInfo-cashout-ETT').html(tempUserInfoData[0][13].div(_ettWei).toFloor(_ContractDisplayPrecision));
                                        }
                                        else {
                                            $('.data-contractUserInfo-cashout-ETT').html("0.00");
                                        }
                                        //结算手续费计算 tempContractStateData[33]-比例 ETT价格tempContractStateData[4]
                                        var ethPoundage = enableSettleETHAmount.mul(tempContractStateData[4]).mul(tempContractStateData[33]).div(1000);
                                        var ettPoundage = rdata[4].mul(tempContractStateData[33]).div(1000);
                                        var totalPoundage = ethPoundage.add(ettPoundage).div(_ettWei).toFloor(_ContractDisplayPrecision);
                                        $('.data-contractUserInfo-cashout-settle-poundage-ETT').html(totalPoundage);
                                    }, defaultAccount);
                                }
                            });

                            HandleShowContractUserInfo2 && HandleShowContractUserInfo2();
                        }

                    }, defaultAccount, rdata[0][10].sub(1))
                } else {
                    $('.data-contractUserInfo-Invest-Level').data("value", "0").data("status", "");
                    $('.data-contractUserInfo-Invest-Money').html("0.00");
                    $('.data-contractUserInfo-Invest-AdduoStaticBonus').html("0.00");
                    $('.data-contractUserInfo-Invest-AdduoDynamicBonus').html("0.00");
                    $('.data-contractUserInfo-Invest-OutMoney').html("0.00");
                    HandleShowContractUserInfo2 && HandleShowContractUserInfo2();
                }


                HandleShowContractUserInfo && HandleShowContractUserInfo();
            }
        });




        ////添加代币
        //var ettERC20 = {
        //    type: "ERC20",
        //    options: {
        //        address: _ContractAddress_ETT,
        //        symbol: 'znhy',
        //        decimals: _ContractDecimals_ETT,
        //        image: window.location.protocol + '//' + window.location.host + '/Theme/DApp/images/logo.png',
        //    }
        //}
        //e.DappBaseObj.wallet_watchAsset(ettERC20)
    }
}

//-----------------------------------------------------------

//合约方法---ABI 交互实现-----Token 操作
//获取代币授权操作信息
function Token_getAllowance(cb, oaddr, spender, taddr, tABI, decimals) {
    try {
        if (oaddr) {
            _DappContractPlugin.getContractObj(function (_ContractObj) {
                _ContractObj.methods
                  .allowance(oaddr, spender)
                  .call()
                  .then(function (rdata) {
                      //回调处理
                      typeof cb === "function" && cb(true, rdata.div(Math.pow(10, decimals)))
                  })
            }, taddr, tABI);
        } else {
            _DappContractPlugin.getCurrentAccount(function (_oaddr) {
                _DappContractPlugin.getContractObj(function (_ContractObj) {
                    _ContractObj.methods
                        .allowance(_oaddr, spender)
                        .call()
                        .then(function (rdata) {
                            //回调处理
                            typeof cb === "function" && cb(true, rdata.div(Math.pow(10, decimals)))
                        })
                }, taddr, tABI);
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//代币授权操作
function Token_approve(cb, receiptCB, amount, spender, taddr, tABI, decimals) {
    try {
        _DappContractPlugin.getContractObj(function (_ContractObj) {
            _ContractObj.methods
            .approve(spender, amount.mul(Math.pow(10, decimals)))
            .send()
            .on('transactionHash', function (rdata) {
                console.log(rdata)
                //回调处理
                typeof cb === "function" && cb(true, rdata)
            })
            .on('error', function (err) {
                console.log(err)
                typeof cb === "function" && cb(false, err)
            })
            .on('confirmation', function (confirmationNumber, receipt) {
                console.log('confirmation: ' + confirmationNumber);
            })
            .on('receipt', function (receipt) {
                console.log(receipt);
                //完成回调
                typeof receiptCB === "function" && receiptCB(receipt)
            });
        }, taddr, tABI);
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//合约方法---ABI 交互实现
//获取合约信息
function Dapp_getContractState(cb) {
    try {
        _DappContractPlugin.ContractObj.methods
            .stateView()
            .call()
            .then(function (rdata) {
                //回调处理
                typeof cb === "function" && cb(true, rdata)
            })
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//获取用户信息--基础
function Dapp_getUserInfoBase(cb, addr) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getUserInfo(addr)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getUserInfo(_addr)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//获取用户合约信息
function Dapp_getContractUserInfo(cb, addr) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getUserByAddress(addr)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getUserByAddress(_addr)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//检查注册码是否被使用
function Dapp_isUsedCode(code, cb) {
    try {
        _DappContractPlugin.ContractObj.methods
            .isUsedCode(code)
            .call()
            .then(function (rdata) {
                //回调处理
                typeof cb === "function" && cb(true, rdata)
            })
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//购买门票
function Dapp_buyTicket(money, cb) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true)
        if (!money) {
            throw { cede: 401, message: "请输入金额" }
        }

        var money = money.mul(_ethWei);
        var _to = _DappContractPlugin.getContractAddress()

        _DappContractPlugin.getCurrentAccount(function (_from) {
            var params = {
                to: _to,
                from: _from,
                value: money
            }

            _DappContractPlugin.ContractObj.methods
                .buyTicket()
                .send(params)
                .on('transactionHash', function (rdata) {
                    console.log(rdata)
                    //回调处理
                    HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
                    typeof cb === "function" && cb(true, rdata)
                })
                .on('error', function (err) {
                    console.log(err)
                    HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
                    typeof cb === "function" && cb(false, err)
                })
                .on('confirmation', function (confirmationNumber, receipt) {
                    console.log('confirmation: ' + confirmationNumber);
                })
                .on('receipt', function (receipt) {
                    console.log(receipt);
                    //完成刷新会员信息
                    //直接调用账户变更事件进行更新页面数据
                    _DappContractPlugin.getNetworkType(function (networkType) {
                        _DappContractPlugin.DappBaseObj._networkChangedEvent(networkType)
                    })
                });
        })
    } catch (e) {
        console.log(e)
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//结算
function Dapp_settlement(cb) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true);
        _DappContractPlugin.getCurrentAccount(function (_addr) {
            _DappContractPlugin.ContractObj.methods
                .settlement()
                .send()
                .on('transactionHash', function (rdata) {
                    console.log(rdata);
                    //回调处理
                    HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
                    typeof cb === "function" && cb(true, rdata);
                })
                .on('error', function (err) {
                    console.log(err);
                    HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
                    typeof cb === "function" && cb(false, err);
                })
                .on('confirmation', function (confirmationNumber, receipt) {
                    console.log('confirmation: ' + confirmationNumber);
                })
                .on('receipt', function (receipt) {
                    console.log(receipt);
                    //完成刷新会员信息
                    //直接调用账户变更事件进行更新页面数据
                    _DappContractPlugin.getNetworkType(function (networkType) {
                        _DappContractPlugin.DappBaseObj._networkChangedEvent(networkType);
                    })
                });
        })
    } catch (e) {
        console.log(e);
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
        typeof cb === "function" && cb(false, e.message || e);
    }
}


//签到
function Dapp_SignIn(cb) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true);

        _DappContractPlugin.ContractObj.methods
               .SignIn()
               .send()
               .on('transactionHash', function (rdata) {
                   console.log(rdata);
                   //回调处理
                   //HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
                   //typeof cb === "function" && cb(true, rdata);
               })
               .on('error', function (err) {
                   console.log(err);
                   HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
                   typeof cb === "function" && cb(false, err);
               })
               .on('confirmation', function (confirmationNumber, receipt) {
                   console.log('confirmation: ' + confirmationNumber);
               })
               .on('receipt', function (receipt) {
                   console.log(receipt);
                   //完成刷新会员信息
                   //直接调用账户变更事件进行更新页面数据
                   _DappContractPlugin.getNetworkType(function (networkType) {
                       _DappContractPlugin.DappBaseObj._networkChangedEvent(networkType);
                   })
                   typeof cb === "function" && cb(true, receipt);
               });
    } catch (e) {
        console.log(e);
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
        typeof cb === "function" && cb(false, e.message || e);
    }
}


//投资
function Dapp_invest(money, code, rCode, cb) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true);
        if (!money) {
            throw { cede: 401, message: "请输入金额" }
        }
        if (!code) {
            throw { cede: 401, message: "请输入邀请码" }
        }
        if (!rCode) {
            throw { cede: 401, message: "请输入推荐码" }
        }
        if (rCode == 'rCode') {
            rCode = '';
        }

        var money = money.mul(_ethWei);
        var _to = _DappContractPlugin.getContractAddress();

        _DappContractPlugin.getCurrentAccount(function (_from) {
            var params = {
                to: _to,
                from: _from,
                value: money
            };

            _DappContractPlugin.ContractObj.methods
                .invest(code, rCode)
                .send(params)
                .on('transactionHash', function (rdata) {
                    console.log(rdata);
                    //回调处理
                    HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
                    typeof cb === "function" && cb(true, rdata);
                })
                .on('error', function (err) {
                    console.log(err);
                    HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
                    typeof cb === "function" && cb(false, err);
                })
                .on('confirmation', function (confirmationNumber, receipt) {
                    console.log('confirmation: ' + confirmationNumber);
                })
                .on('receipt', function (receipt) {
                    console.log(receipt);
                    //完成刷新会员信息
                    //直接调用账户变更事件进行更新页面数据
                    _DappContractPlugin.getNetworkType(function (networkType) {
                        _DappContractPlugin.DappBaseObj._networkChangedEvent(networkType);
                    })
                });
        })
    } catch (e) {
        console.log(e);
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
        typeof cb === "function" && cb(false, e.message || e);
    }
}

//提现
function Dapp_takeAll(cb) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true)
        _DappContractPlugin.ContractObj.methods
            .Take_All()
            .send()
            .on('transactionHash', function (rdata) {
                console.log(rdata)
                //回调处理
                HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
                typeof cb === "function" && cb(true, rdata)
            })
            .on('error', function (err) {
                console.log(err)
                HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
                typeof cb === "function" && cb(false, err)
            })
            .on('confirmation', function (confirmationNumber, receipt) {
                console.log('confirmation: ' + confirmationNumber);
            })
            .on('receipt', function (receipt) {
                console.log(receipt);
                //完成刷新会员信息
                //直接调用账户变更事件进行更新页面数据
                _DappContractPlugin.getCurrentAccount(function (_from) {
                    _DappContractPlugin.DappBaseObj._accountsChangedEvent(_from)
                    _DappContractPlugin._accountsChangedEvent(_from)
                })
            });
    } catch (e) {
        console.log(e)
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//使用激活码
function Dapp_useCode(code, cb) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true)
        if (!code) {
            throw { cede: 401, message: "请输入激活码" }
        }
        _DappContractPlugin.ContractObj.methods
            .useCode(code)
            .send()
            .on('transactionHash', function (rdata) {
                console.log(rdata)
                //回调处理
                HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
                typeof cb === "function" && cb(true, rdata)
            })
            .on('error', function (err) {
                console.log(err)
                HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
                typeof cb === "function" && cb(false, err)
            })
            .on('confirmation', function (confirmationNumber, receipt) {
                console.log('confirmation: ' + confirmationNumber);
            })
            .on('receipt', function (receipt) {
                console.log(receipt);
                //完成刷新会员信息
                //直接调用账户变更事件进行更新页面数据
                _DappContractPlugin.getNetworkType(function (networkType) {
                    _DappContractPlugin.DappBaseObj._networkChangedEvent(networkType)
                })
            });
    } catch (e) {
        console.log(e)
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//检查激活码是否被使用
function Dapp_checkActivationCode(code, cb) {
    try {
        _DappContractPlugin.ContractObj.methods
            .checkActivationCode(code)
            .call()
            .then(function (rdata) {
                //回调处理
                typeof cb === "function" && cb(true, rdata)
            })
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//获取用户购买记录信息
function Dapp_getBuyTicketRecordByAddress(cb, addr, index) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getBuyTicketRecordByAddress(addr, index)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getBuyTicketRecordByAddress(_addr, index)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//获取用户激活码信息
function Dapp_getActivationCodeDataByAddress(cb, addr, index) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getActivationCodeDataByAddress(addr, index)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getActivationCodeDataByAddress(_addr, index)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//获取用户直推推荐列表
function Dapp_getRCodeOffspringByAddress(cb, addr) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getRCodeOffspringByAddress(addr)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getRCodeOffspringByAddress(_addr)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//获取用户签到记录
function Dapp_getSignInRecordByAddress(cb, addr, index) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getSignInRecordByAddress(addr, index)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getSignInRecordByAddress(_addr, index)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//获取用户质押投资记录
function Dapp_getInvestRecordByAddress(cb, addr, index) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getInvestRecordByAddress(addr, index)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getInvestRecordByAddress(_addr, index)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//获取用户结算信息
function Dapp_getRewardDataByAddress(cb, addr, type, index) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getRewardDataByAddress(addr, type, index)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getRewardDataByAddress(_addr, type, index)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}


//-----------------------------------------------------------

//业务相关方法---基础方法实现
//随机生成字符串
function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz123456789';
    //var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
//获取rul参数
function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=(.*)(&[^&=]+=)');
    var regLast = new RegExp('(^|&)' + name + '=(.*)($)');
    var rtest = window.location.href.replace(/\/\#/, '');
    rtest = rtest && rtest.match(/\?.+/) && rtest.match(/\?.+/)[0];
    rtest = rtest && (rtest.substr(1).match(reg) || rtest.substr(1).match(regLast));
    if (rtest) {
        var l = rtest[2].match(/&[^&=]+=/)
        if (l) {
            return decodeURIComponent(rtest[2].split(l[0])[0]);
        } else return decodeURIComponent(rtest[2]);
    }
    return null;
}
//任务检查
function checktaskObj() {
    this.coutnc = 1;
    this.crrc = 0;
    this.cancel = false;

    this.check = function (cb) {
        if (this.crrc >= this.coutnc && !this.cancel) {
            typeof cb === "function" && cb(true)
        } else {
            typeof cb === "function" && cb(false)
        }
    }
}

//-----------------------------------------------------------

//合约方法业务方法---业务逻辑实现
//检查代币授权
function business_checkApprove(amount, taddr, tABI, decimals, isERC777, cb) {
    amount = amount.mul(Math.pow(10, decimals)).toFloor(0).div(Math.pow(10, decimals))
    _DappContractPlugin.DappBaseObj.getTokenBalance(function (_balance) {
        if (Number(_balance) >= Number(amount)) {
            Token_getAllowance(function (resulr, rdata) {
                if (resulr) {
                    if (Number(rdata) >= Number(amount)) {
                        //回调处理
                        typeof cb === "function" && cb(true)
                    } else {
                        var checktask = new checktaskObj();
                        //重新授权
                        if (Number(rdata) > 0 && !isERC777) {
                            checktask.coutnc = 2;
                            Token_approve(function (resulr, rdata) {
                                if (!resulr) {
                                    typeof cb === "function" && cb(false, 1001)
                                    console.log("r1 approve ERR：" + taddr)
                                    checktask.cancel = true;
                                }
                            }, function () {
                                console.log("receipt1 approve：" + taddr)
                                checktask.crrc++;
                                Token_approve(function (resulr, rdata) {
                                    if (!resulr) {
                                        typeof cb === "function" && cb(false, 1001)
                                        console.log("r2 approve ERR：" + taddr)
                                        checktask.cancel = true;
                                    }
                                }, function () {
                                    console.log("receipt2 approve：" + taddr)
                                    checktask.crrc++;
                                    checktask.check(function (checkresult) {
                                        if (checkresult) {
                                            typeof cb === "function" && cb(true)
                                        }
                                    })
                                }, amount, _ContractAddress, taddr, tABI, decimals)
                            }, "0", _ContractAddress, taddr, tABI, decimals)
                        } else {
                            Token_approve(function (resulr, rdata) {
                                if (!resulr) {
                                    typeof cb === "function" && cb(false, 1001)
                                    console.log("r2 approve ERR：" + taddr)
                                    checktask.cancel = true;
                                }
                            }, function () {
                                console.log("receipt2 approve：" + taddr)
                                checktask.crrc++;
                                checktask.check(function (checkresult) {
                                    if (checkresult) {
                                        typeof cb === "function" && cb(true)
                                    }
                                })
                            }, amount, _ContractAddress, taddr, tABI, decimals)
                        }
                    }
                } else {
                    console.log("check approve ERR：" + taddr)
                    typeof cb === "function" && cb(false, 1000)
                }
            }, null, _ContractAddress, taddr, tABI, decimals)
        } else {
            typeof cb === "function" && cb(false, 1002)
        }
    }, null, taddr, tABI, decimals)
}

//获取当前用户注册/邀请码
function business_getCurrentAccountCode(cb, addr) {
    Dapp_getUserInfoBase(function (resulr, rdata) {
        var code;
        if (resulr) {
            if (rdata[0][0] != 0) {
                code = rdata[1]
                //回调处理
                typeof cb === "function" && cb(code, false)
                return;
            }
        }
        //重新获取注册码
        business_afreshAccountCode(cb)
    }, addr)
}
//重新获取注册/邀请码
function business_afreshAccountCode(cb) {
    //var newCode = '';
    newCode = randomString(6);
    if (newCode) {
        Dapp_isUsedCode(newCode, function (resulr, rdata) {
            if (resulr) {
                if (!rdata) {
                    //回调处理
                    typeof cb === "function" && cb(newCode, true)
                } else {
                    business_afreshAccountCode(cb)
                }
            } else {
                console.log("check newCode ERR")
            }
        })
    } else {
        _DappContractPlugin.getCurrentAccount(function (_addr) {
            newCode = _addr;
            //直接回调，不验证
            typeof cb === "function" && cb(newCode, true)
        })
    }
}
//获取默认推荐码
function business_getDefaultRecommendCode() {
    return _ContractRecommendCode;
}
function business_getDefaultRecommendCodeInit() {
    return 'rCode';
    //return '0x0000000000000000000000000000000000000000';
}
//获取推荐码
function business_getRecommendCode(cb, r) {
    var rCode;
    //优先获取浏览器参数
    rCode = getUrlParam('rCode')
    if (rCode) {
        //回调处理
        typeof cb === "function" && cb(rCode, -1)
        return;
    }
    if (rCode && !r) {
        //检查邀请码是否正确
        Dapp_isUsedCode(rCode, function (resulr, rdata) {
            if (resulr) {
                if (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(rCode, -2)
                } else {
                    //不正确的邀请码
                    business_getRecommendCode(cb, true);
                }
            } else {
                console.log("check newCode ERR")
            }
        })
    } else {
        //根据已注册的属性获取
        Dapp_getUserInfoBase(function (resulr, rdata) {
            if (resulr) {
                var uid = rdata[0][0]
                if (uid != 0) {
                    rCode = rdata[2]
                    //回调处理
                    typeof cb === "function" && cb(rCode, uid)
                    return;
                }
            }
            //未注册未填写 尝试获取 默认
            rCode = business_getDefaultRecommendCode();
            typeof cb === "function" && cb(rCode, 0)
        })
    }
}

//购买门票0/购买节点1
function business_buyTicket(money, cb) {
    try {
        if (!money) {
            throw { cede: 401, message: "请输入金额" }
        }
        if (Number(money) <= 0) {
            throw { cede: 401, message: "金额不正确" }
        }

        //购买门票
        Dapp_buyTicket(money, cb)

    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//使用激活码
function business_useCode(code, cb) {
    try {
        if (!code) {
            throw { cede: 401, message: "请输入激活码" }
        }
        //检查激活码是否正确
        Dapp_checkActivationCode(code, function (resulr, rdata) {
            if (resulr) {
                if (rdata) {
                    //使用激活码
                    Dapp_useCode(code, cb)
                } else {
                    //不正确的激活码
                    typeof cb === "function" && cb(false, "激活码不正确")
                }
            } else {
                console.log("check newCode ERR")
            }
        })
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//签到
function business_SignIn(cb) {
    try {
        //获取合约状态信息
        Dapp_getContractState(function (presulr, prdata) {
            if (presulr) {
                if (Number(prdata[32]) == 1) {
                    //获取用户信息
                    Dapp_getContractUserInfo(function (resulr, rdata) {
                        if (resulr) {
                            if (Number(rdata[0][0]) > 0) {
                                if (Number(rdata[0][11]) == 0) {
                                    Dapp_SignIn(cb);
                                } else {
                                    business_SignInRecordByAddress(rdata[0][11].sub(1), function (crdata) {
                                        console.log(JSON.stringify(crdata));
                                        var lastSignTime = new Date(crdata.Time.dateFormat('yyyy-MM-dd').replace(/-/g, '/'));
                                        var nextSignTime = lastSignTime.getTime() + 86400000;//86400000;
                                        var now = (new Date()).getTime();
                                        if (now >= nextSignTime) {
                                            Dapp_SignIn(cb);
                                        }
                                        else {
                                            //msgtips2("今天已经签到，明天再来吧".toTranslate());
                                        }

                                    })
                                }
                            }
                            else {
                                msgtips2("抱歉，您未投资注册入场".toTranslate());
                            }
                        }
                    });

                } else {
                    msgtips2("签到功能未开放".toTranslate());
                }
            }
        })

    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}


//获取门票价格
function business_ratioTicket(cb) {
    try {
        Dapp_getContractState(function (resulr, rdata) {
            if (resulr) {
                typeof cb === "function" && cb(true, rdata[0][4].div(_eth_ett_Ratio))
            }
        })
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//质押投资
function business_invest(money, cb, code, rCode) {
    try {
        if (!money) {
            throw { cede: 401, message: "请输入金额" }
        }
        if (Number(money) <= 0) {
            throw { cede: 401, message: "金额不正确" }
        }

        if (code) {
            //已获取邀请码
            business_invest_r(money, cb, code, rCode)
        } else {
            //未获取邀请码
            business_getCurrentAccountCode(function (_code, isNweCode) {
                business_invest_r(money, cb, _code, rCode)
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
    //自定义函数处理
    function business_invest_r(money, cb, _code, rCode) {
        console.log(_code)
        if (rCode) {
            console.log(rCode)
            business_invest_s(money, cb, _code, rCode, -1)
        } else {
            business_getRecommendCode(function (_rCode, rtype) {
                console.log(_rCode)
                business_invest_s(money, cb, _code, _rCode, rtype)
            })
        }
    }

    function business_invest_s(money, cb, _code, rCode, rtype) {
        //地址处理
        _DappContractPlugin.DappBaseObj.getCurrentAccount(function (addr) {
            //投资限额判断
            Dapp_getContractState(function (resulr, rdata) {
                var _DCSdata = rdata;
                if (resulr) {
                    rCode = rCode || business_getDefaultRecommendCodeInit();
                    if (addr != _ContractInitAddr) {
                        if (rdata[0] != 0) {
                            if (rCode == 'rCode' && rtype != 1) {
                                typeof cb === "function" && cb(false, "请输入推荐码")
                                return;
                            }
                            if (rCode == '0x0000000000000000000000000000000000000000') {
                                typeof cb === "function" && cb(false, "请输入推荐人地址")
                                return;
                            }
                        } else {
                            //首个会员投资
                            rCode = 'rCode'
                        }
                    }
                    if (addr != _ContractInitAddr && rdata[0] != 0) {
                        if (rtype < 0) {
                            //检查邀请码是否正确
                            Dapp_isUsedCode(rCode, function (resulr, rdata) {
                                if (resulr) {
                                    if (rdata) {
                                        //投资
                                        business_invest_t(money, cb, _code, rCode, _DCSdata)
                                        return;
                                    }
                                }
                                typeof cb === "function" && cb(false, "请输入正确的推荐码")
                            })
                        } else {
                            business_invest_t(money, cb, _code, rCode, _DCSdata)
                        }
                    }
                }
            })
        })
    }

    function business_invest_t(money, cb, _code, rCode, _DCSdata) {

        var ettmoney = money.mul(_DCSdata[4]).mul(_DCSdata[31]).div(_eth_ett_Ratio).div(1000);

        HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(true);
        business_checkApprove(ettmoney, _ContractAddress_ETT, _ContractABI_ETT, _ContractDecimals_ETT, false, function (resulr, code) {
            if (resulr) {
                HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false);
                Dapp_invest(money, _code, rCode, cb);
            } else {
                HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false);
                //checktask.cancel = true;
                if (code == 1002) {
                    //typeof cb === "function" && cb(false, "授权操作金额失败:门票,code:" + code + ",msg:余额不足");
                    typeof cb === "function" && cb(false, "门票余额不足");
                } else {
                    typeof cb === "function" && cb(false, "授权操作金额失败:门票,code:" + code);
                }
            }
        })


    }
}

//收益结算
function business_settlement(cb) {
    try {
        Dapp_getContractState(function (resulr, rdata) {

            if (resulr) {
                var tempContractStateData = rdata;
                Dapp_getContractUserInfo(function (resulr, rdata) {
                    if (resulr) {
                        var temUserInfo = rdata;
                        business_getRewardDataUn(function (rdata) {
                            var tempRewardData = rdata;
                            if (Number(temUserInfo[0][10]) > 0) {
                                Dapp_getInvestRecordByAddress(function (resulr, rdata) {
                                    if (resulr) {
                                        //console.log(rdata)
                                        //var tempInvestData = rdata;
                                        var _recordsData = {};
                                        _recordsData.Money = rdata[0].div(_ethWei);
                                        _recordsData.AdduoStaticBonus = rdata[1].div(_ethWei);
                                        _recordsData.AdduoDynamicBonus = rdata[2].div(_ethWei);
                                        _recordsData.Status = rdata[3];
                                        _recordsData.Level = rdata[4];
                                        _recordsData.InvestTime = rdata[5].mul(1000).toString();
                                        _recordsData.LastRwTime = rdata[6].mul(1000).toString();
                                        _recordsData.OutTime = rdata[7].mul(1000).toString();

                                        var maxOutMoney = _recordsData.Money.mul(tempContractStateData[_recordsData.Level.add(22)]).div(1000);

                                        var nowTime = new Date();
                                        //console.log(tempContractStateData);
                                        var investLevelPoundage = tempContractStateData[35];
                                        //console.log(investLevelPoundage);
                                        var differTime = nowTime.getTime().div(1000).sub(_recordsData.LastRwTime.div(1000)).div(86400).toFloor(0);
                                        //console.log(differTime);
                                        var staticBouns = '0';
                                        if (Number(_recordsData.Status) == 0) {
                                            staticBouns = _recordsData.Money.mul(investLevelPoundage).mul(differTime).div(1000);
                                        }
                                        var enableSettleETHAmount = staticBouns.add(tempRewardData[1]).add(tempRewardData[2]).add(tempRewardData[3]);
                                        if (Number(enableSettleETHAmount) > Number(maxOutMoney)) {
                                            enableSettleETHAmount = maxOutMoney;
                                        }

                                        //结算手续费计算 tempData[33]-比例 ETT价格tempData[4]
                                        var ethPoundage = enableSettleETHAmount.mul(tempContractStateData[4]).mul(tempContractStateData[33]).div(1000).div(_ettWei);

                                        //授权代币
                                        HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(true);
                                        business_checkApprove(ethPoundage, _ContractAddress_ETT, _ContractABI_ETT, _ContractDecimals_ETT, false, function (resulr, code) {
                                            if (resulr) {
                                                HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false)
                                                Dapp_settlement(cb);
                                            } else {
                                                HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false)
                                                //checktask.cancel = true;
                                                if (code == 1002) {
                                                    //typeof cb === "function" && cb(false, "授权操作金额失败:门票,code:" + code + ",msg:余额不足")
                                                    typeof cb === "function" && cb(false, "门票余额不足");
                                                } else {
                                                    typeof cb === "function" && cb(false, "授权操作金额失败:门票,code:" + code)
                                                }
                                            }
                                        });

                                    }
                                }, null, temUserInfo[0][10].sub(1));
                            } else {
                                var enableSettleETHAmount = tempRewardData[1].add(tempRewardData[2]).add(tempRewardData[3]);
                                //结算手续费计算 tempData[33]-比例 ETT价格tempData[4]
                                var ethPoundage = enableSettleETHAmount.mul(tempContractStateData[4]).mul(tempContractStateData[33]).div(1000).div(_ettWei);

                                //授权代币
                                HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(true);
                                business_checkApprove(ethPoundage, _ContractAddress_ETT, _ContractABI_ETT, _ContractDecimals_ETT, false, function (resulr, code) {
                                    if (resulr) {
                                        HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false)
                                        Dapp_settlement(cb)

                                    } else {
                                        HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false)
                                        //checktask.cancel = true;
                                        if (code == 1002) {
                                            //typeof cb === "function" && cb(false, "授权操作金额失败:门票,code:" + code + ",msg:余额不足")
                                            typeof cb === "function" && cb(false, "门票余额不足");
                                        } else {
                                            typeof cb === "function" && cb(false, "授权操作金额失败:门票,code:" + code)
                                        }
                                    }
                                });
                            }

                        }, null);
                    }


                });
            }
        });
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}



//获取用户购买记录信息
function business_BuyTicketRecords(index, cb, addr) {
    //console.log("Index:" + index)
    //获取用户投资信息
    Dapp_getBuyTicketRecordByAddress(function (resulr, rdata) {
        if (resulr) {
            //console.log(rdata)
            var _recordsData = {};
            _recordsData.Money = rdata[1].div(_ethWei);
            _recordsData.ExchangeMoney = rdata[2].div(_ettWei)
            _recordsData.Ratio = rdata[3].div(_eth_ett_Ratio)
            _recordsData.Type = rdata[4]
            _recordsData.Time = rdata[0].mul(1000).toString();

            typeof cb === "function" && cb(_recordsData)
        }
    }, addr, index)
}

//获取激活码记录
function business_activationCodeRecords(index, cb, addr) {
    //console.log("Index:" + index)
    //获取用户投资信息
    Dapp_getActivationCodeDataByAddress(function (resulr, rdata) {
        if (resulr) {
            //console.log(rdata)
            var _recordsData = {};
            _recordsData.Code = rdata[1];
            _recordsData.Level = rdata[0][1]
            _recordsData.Status = rdata[0][2]
            _recordsData.UseAddr = rdata[2];
            _recordsData.UseTime = rdata[0][0].mul(1000).toString();

            typeof cb === "function" && cb(_recordsData)
        }
    }, addr, index)
}

var _recordDataListObj = {}
function business_RecordDataList(key, HandleListcomplete, HandleCB, HandleCB2) {
    //重置
    _recordDataListObj[key] = [];

    var recordDataList = _recordDataListObj[key] || [];
    typeof HandleCB2 === "function" && HandleCB2(function (number, page) {
        for (var i = 0; i < number; i++) {
            recordDataList.push(Object.assign({}, {}));
            recordDataList[i].Index = i;
        }
        var size = number
        typeof HandleList === "function" && HandleList(page || 1, size, HandleListcomplete);
    }, key)

    function HandleList(page, size, cb) {
        var start = size * (page - 1);
        var end = size * page - 1;
        if (end > recordDataList.length - 1) {
            end = recordDataList.length - 1
        }
        //console.log("start:" + start + ",end:" + end)

        //循环遍历
        var asynchronous = end - start + 1;
        var complete = 0;
        for (var i = start; i <= end; i++) {
            //console.log(i)
            HandleCB && HandleCB(recordDataList[i].Index, function (_recordsData, index) {
                //console.log(_recordsData)
                recordDataList[index] = _recordsData;

                complete++
                //判断是否完成
                //console.log(asynchronous+","+complete)
                if (complete >= asynchronous) {
                    //处理完成
                    //console.log("ok")
                    typeof cb === "function" && cb(recordDataList, key);
                }
            }, i, key)
        }
    }
}

//获取用户直推推荐列表
function business_getUserOffspring(cb) {
    //console.log("Index:" + index)
    //获取用户投资信息
    Dapp_getRCodeOffspringByAddress(function (resulr, rdata) {
        if (resulr) {
            //console.log(rdata)
            var dataList = []
            for (var i = 0; i < rdata[0].length; i++) {
                var info = {};
                info.Index = i + 1;
                info.Code = rdata[0][i];
                info.ID = rdata[1][i][0];
                info.Level = rdata[1][i][1];
                info.investAmount = rdata[1][i][2].div(_ethWei);
                dataList.push(info)
            }
            //console.log(dataList)
            typeof cb === "function" && cb(dataList)
        }
    })
}

//获取签到记录
function business_SignInRecordByAddress(index, cb, addr) {
    //console.log("Index:" + index)
    //获取用户投资信息
    Dapp_getSignInRecordByAddress(function (resulr, rdata) {
        if (resulr) {
            //console.log(rdata)
            var _recordsData = {};
            _recordsData.Money = rdata[1].div(_ettWei);
            _recordsData.Time = rdata[0].mul(1000).toString();
            //console.log(_recordsData)
            typeof cb === "function" && cb(_recordsData)
        }
    }, addr, index)
}

//获取质押投资记录
function business_InvestRecordByAddress(index, cb, addr) {
    //console.log("Index:" + index)
    //获取用户投资信息
    Dapp_getInvestRecordByAddress(function (resulr, rdata) {
        if (resulr) {
            //console.log(rdata)
            var _recordsData = {};
            _recordsData.Money = rdata[0].div(_ethWei);
            _recordsData.AdduoStaticBonus = rdata[1].div(_ethWei);
            _recordsData.AdduoDynamicBonus = rdata[2].div(_ethWei);
            _recordsData.Status = rdata[3];
            _recordsData.Level = rdata[4];
            _recordsData.InvestTime = rdata[5].mul(1000).toString();
            _recordsData.LastRwTime = rdata[6].mul(1000).toString();
            _recordsData.OutTime = rdata[7].mul(1000).toString();
            typeof cb === "function" && cb(_recordsData)
        }
    }, addr, index)
}
//获取奖金记录
function business_getRewardDataByAddress(type, index, cb, addr) {
    //console.log("Index:" + index)
    //获取用户投资信息
    Dapp_getRewardDataByAddress(function (resulr, rdata) {
        if (resulr) {
            //console.log(rdata)
            var _recordsData = {};
            if (Number(type) == 4) {
                _recordsData.Money = rdata[0][0].div(_ettWei);
            } else {
                _recordsData.Money = rdata[0][0].div(_ethWei);
            }

            _recordsData.Time = rdata[0][1].mul(1000).toString();
            typeof cb === "function" && cb(_recordsData, rdata[1])
        }
    }, addr, type, index);
}

//获取所有未结算金额
function business_getRewardDataUn(cb, addr) {
    business_RecordDataList("investRecords", function (recordDataList, key) {
        //获取记录完成
        typeof cb === "function" && cb(recordDataList);
    }, function (index, cb, i, key) {
        //获取记录信息
        Dapp_getRewardDataByAddress(function (resulr, rdata) {
            if (resulr) {
                console.log(JSON.stringify(rdata));
                Dapp_getRewardDataByAddress(function (resulr, rdata) {
                    if (resulr) {
                        typeof cb === "function" && cb(rdata[0][0], index)
                    }
                }, addr, index, rdata[1]);
            }
        }, addr, index, 0);
    }, function (cb, key) {
        typeof cb === "function" && cb(5);
    })
}