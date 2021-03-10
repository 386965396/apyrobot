// 类型, 池子， 锁仓/交易额, 日化
const coins = [
  {
    pid: 0,
    lpAddresses: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
    tokenAddresses: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
    symbol: 'WHT',
    islp: false
  },
  {
    pid: 1,
    lpAddresses: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    tokenAddresses: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    symbol: 'HBTC',
    islp: false
  },
  {
    pid: 2,
    lpAddresses: '0x0298c2b32eae4da002a15f36fdf7615bea3da047',
    tokenAddresses: '0x0298c2b32eae4da002a15f36fdf7615bea3da047',
    symbol: 'HUSD',
    islp: false
  },
  {
    pid: 3,
    lpAddresses: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
    tokenAddresses: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
    symbol: 'ETH',
    decimal: 18,
    islp: false
  },
  {
    pid: 4,
    lpAddresses: '0xa71edc38d189767582c38a3145b5873052c3e47a',
    tokenAddresses: '0xa71edc38d189767582c38a3145b5873052c3e47a',
    symbol: 'USDT',
    islp: false
  },
  {
    pid: 5,
    lpAddresses: '0xef3cebd77e0c52cb6f60875d9306397b5caca375',
    tokenAddresses: '0xef3cebd77e0c52cb6f60875d9306397b5caca375',
    symbol: 'HBCH',
    islp: false
  },
  {
    pid: 6,
    lpAddresses: '0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3',
    tokenAddresses: '0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3',
    symbol: 'HDOT',
    islp: false
  },
  {
    pid: 7,
    lpAddresses: '0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4',
    tokenAddresses: '0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4',
    symbol: 'HLTC',
    islp: false
  },
  {
    pid: 8,
    lpAddresses: '0xFBe7b74623e4be82279027a286fa3A5b5280F77c',
    tokenAddresses: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    symbol: 'HBTC/USDT',
    islp: true
  },
  {
    pid: 9,
    lpAddresses: '0x78C90d3f8A64474982417cDB490E840c01E516D4',
    tokenAddresses: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
    symbol: 'ETH/USDT',
    islp: true
  },
  {
    pid: 10,
    lpAddresses: '0xdff86B408284dff30A7CAD7688fEdB465734501C',
    tokenAddresses: '0x0298c2b32eae4da002a15f36fdf7615bea3da047',
    symbol: 'HUSD/USDT',
    islp: true
  },
  {
    pid: 11,
    lpAddresses: '0x060B4bfcE16D15A943ec83C56C87940613e162eB',
    tokenAddresses: '0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4',
    symbol: 'HLTC/USDT',
    islp: true
  },
  {
    pid: 12,
    lpAddresses: '0x1f0eC8e0096e145f2bf2Cb4950Ed7b52d1cbd35f',
    tokenAddresses: '0xef3cebd77e0c52cb6f60875d9306397b5caca375',
    symbol: 'HBCH/USDT',
    islp: true
  },
  {
    pid: 13,
    lpAddresses: '0x5484ab0DF3E51187f83F7f6b1a13f7a7Ee98C368',
    tokenAddresses: '0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3',
    symbol: 'HDOT/USDT',
    islp: true
  },
  {
    pid: 14,
    lpAddresses: '0x600072aF0470d9Ed1D83885D03d17368943fF22A',
    tokenAddresses: '0xae3a768f9ab104c69a7cd6041fe16ffa235d1810',
    symbol: 'HFIL/USDT',
    islp: true
  },
  {
    pid: 15,
    lpAddresses: '0x3375afF2CAcF683b8FC34807B9443EB32e7Afff6',
    tokenAddresses: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
    symbol: 'WHT/HUSD',
    islp: true
  },
  {
    pid: 16,
    lpAddresses: '0x615E6285c5944540fd8bd921c9c8c56739Fd1E13',
    tokenAddresses: '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
    symbol: 'MDX/USDT',
    islp: true
  },
  {
    pid: 17,
    lpAddresses: '0x499B6E03749B4bAF95F9E70EeD5355b138EA6C31',
    tokenAddresses: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
    symbol: 'WHT/USDT',
    islp: true
  },
  {
    pid: 18,
    lpAddresses: '0xdE5b574925EE475c41b99a7591EC43E92dCD2fc1',
    tokenAddresses: '0xe499ef4616993730ced0f31fa2703b92b50bb536',
    symbol: 'HPT/USDT',
    islp: true
  },
  {
    pid: 19,
    lpAddresses: '0x6Dd2993B50b365c707718b0807fC4e344c072eC2',
    tokenAddresses: '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
    symbol: 'MDX/WHT',
    islp: true
  },
  {
    pid: 21,
    lpAddresses: '0x7964e55bbdaecde48c2c8ef86e433ed47fecb519',
    tokenAddresses: '0xe36ffd17b2661eb57144ceaef942d95295e637f0',
    symbol: 'FILDA/HUSD',
    islp: true
  },
  {
    pid: 22,
    lpAddresses: '0x023f375a51af8645d7446ba5942baedc53b0582d',
    tokenAddresses: '0x8f67854497218043e1f72908ffe38d0ed7f24721',
    symbol: 'LHB/USDT',
    islp: true
  },
  {
    pid: 23,
    lpAddresses: '0xfAfeAafeFc5F92F22415506e78D9AB1E33C03257',
    tokenAddresses: '0x202b4936fe1a82a4965220860ae46d7d3939bb25',
    symbol: 'AAVE/USDT',
    islp: true
  },
  {
    pid: 24,
    lpAddresses: '0xc7A4C808a29fc8Cd3A8a6848f7F18bED9924C692',
    tokenAddresses: '0x777850281719d5a96c29812ab72f822e0e09f3da',
    symbol: 'SNX/USDT',
    islp: true
  },
  {
    pid: 25,
    lpAddresses: '0x84455d880af684eb29997B82832dd71EF29c1354',
    tokenAddresses: '0x22c54ce8321a4015740ee1109d9cbc25815c46e6',
    symbol: 'UNI/USDT',
    islp: true
  },
  {
    pid: 26,
    lpAddresses: '0x52a342015BAa2496A90A9bB6069D7692564132e6',
    tokenAddresses: '0x9e004545c59d359f6b7bfb06a26390b087717b42',
    symbol: 'LINK/USDT',
    islp: true
  },
  {
    pid: 27,
    lpAddresses: '0xB6A77CDD31771A4F439622aA36b20cb53C19868C',
    tokenAddresses: '0x045de15ca76e76426e8fc7cba8392a3138078d0f',
    symbol: 'BAL/USDT',
    islp: true
  },
  {
    pid: 28,
    lpAddresses: '0x64Af3564C6D6BEc5883358c560211EcD0f8d1AC7',
    tokenAddresses: '0xb4f019beac758abbee2f906033aaa2f0f6dacb35',
    symbol: 'YFI/USDT',
    islp: true
  },
  {
    pid: 29,
    lpAddresses: '0xBFff969A85e355eE0851b019Dba1e87C7780F40d',
    tokenAddresses: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    symbol: 'HBTC/WHT',
    islp: true
  },
  {
    pid: 30,
    lpAddresses: '0x53E458aD1CFEB9582736db6BdE9aF89948e3bc3d',
    tokenAddresses: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
    symbol: 'ETH/WHT',
    islp: true
  },
  {
    pid: 31,
    lpAddresses: '0x793c2a814e23EE38aB46412Be65E94Fe47D4B397',
    tokenAddresses: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    symbol: 'HBTC/ETH',
    islp: true
  },
  {
    pid: 32,
    lpAddresses: '0x2Fb4bE0F2785bD6009A383f3290CC97A4e3bD46B',
    tokenAddresses: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    symbol: 'HBTC/MDX',
    islp: true
  },
  {
    pid: 33,
    lpAddresses: '0xb55569893b397324c0d048c9709F40c23445540E',
    tokenAddresses: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
    symbol: 'ETH/MDX',
    islp: true
  },
  {
    pid: 34,
    lpAddresses: '0x18B83288237fCe1c44f332Ed6Ca851584f66E2a4',
    tokenAddresses: '0x34d75515090902a513f009f4505a750efaad63b0',
    symbol: 'MKR/USDT',
    islp: true
  },
  {
    pid: 35,
    lpAddresses: '0x78B3c20c56D4B3Ef133FD4f00a0293c10b380E40',
    tokenAddresses: '0xce0a5ca134fb59402b723412994b30e02f083842',
    symbol: 'COMP/USDT',
    islp: true
  },
  {
    pid: 36,
    lpAddresses: '0xCf9Bb6F88c5B6dDb5c067a0C6d6Ae872f895B033',
    tokenAddresses: '0x4e252342cf35ff02c4cca9bc655129f5b4a2f901',
    symbol: 'SLNV2/USDT',
    islp: true
  },
  {
    pid: 37,
    lpAddresses: '0xb8314524e92B3228cA09fF2AD3e0ab08F4622673',
    tokenAddresses: '0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c',
    symbol: 'BEE/MDX',
    islp: true
  },
  {
    pid: 38,
    lpAddresses: '0xA4493e679Aec8Ec0F140D86900d982036F9e9Aa5',
    tokenAddresses: '0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c',
    symbol: 'CAN/MDX',
    islp: true
  }
]

const ming_pairs = [
  "0x3375afF2CAcF683b8FC34807B9443EB32e7Afff6",   // WHT/HUSD
  "0x78C90d3f8A64474982417cDB490E840c01E516D4",   // ETH/USDT
  "0xFBe7b74623e4be82279027a286fa3A5b5280F77c",   // HBTC/USDT
  "0xdff86B408284dff30A7CAD7688fEdB465734501C",   // HUSD/USDT
  "0x615E6285c5944540fd8bd921c9c8c56739Fd1E13",   // MDX/USDT
  "0xdDE0D948B0597F08878620f1Afd3070dC7243386",   // BAG/HUSD
  "0xe468981d6Fb3E8E4343350558A4AE2D4702be9e5",   // BAG/HBTC
  "0x5484ab0DF3E51187f83F7f6b1a13f7a7Ee98C368",   // HDOT/USDT
  "0x060B4bfcE16D15A943ec83C56C87940613e162eB",   // HLTC/USDT
  "0x1f0eC8e0096e145f2bf2Cb4950Ed7b52d1cbd35f",   // HBCH/USDT
  "0xde5b574925ee475c41b99a7591ec43e92dcd2fc1",   // HPT/USDT
  "0x499B6E03749B4bAF95F9E70EeD5355b138EA6C31",   // WHT/USDT
  "0x600072aF0470d9Ed1D83885D03d17368943fF22A",   // HFIL/USDT
  "0xfAfeAafeFc5F92F22415506e78D9AB1E33C03257",   // AAVE/USDT
  "0xc7A4C808a29fc8Cd3A8a6848f7F18bED9924C692",   // SNX/USDT
  "0x84455d880af684eb29997B82832dd71EF29c1354",   // UNI/USDT
  "0x6Dd2993B50b365c707718b0807fC4e344c072eC2"    // MDX/WHT
]

const hecoAddress = 'http://47.242.216.245:8545/'

const web3 = require('web3')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./apy.json')
const db = low(adapter)

//address
const oracleAddress = '0x7b4B0d9Cd226017eA3875D49196Ea63A6ea8C278'
const usdtAddress = '0xa71edc38d189767582c38a3145b5873052c3e47a'
const chefAddress = '0xFB03e11D93632D97a8981158A632Dd5986F5E909'
const mdxAddress = '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c'
const swapAddress = '0x7373c42502874C88954bDd6D50b53061F018422e'

//abi
const erc20Abi = require('./abi/erc20.json')
const oracleAbi = require('./abi/oracle.json')
const chefAbi = require('./abi/masterchef.json')
const swapAbi = require('./abi/swap_abi.json')

// contract
const provider = new web3(hecoAddress)
const orcalContract = new provider.eth.Contract(oracleAbi, oracleAddress)
const chefContract = new provider.eth.Contract(chefAbi, chefAddress)
const swapContract = new provider.eth.Contract(swapAbi, swapAddress)

//
const BLOCKS_PER_YEAR = 10512000
const BLOCKS_LP_24HR = 28800
const BLOCKS_SWAP_24HR = 28800
const MDX_SWAP_BLOCK = 53.5
const MDX_LP_BLOCK = 26.5
let chefAllocPoint = 0

const initChefWeight = async () => {
    const totalAllocPoint = await chefContract.methods.totalAllocPoint().call();
    chefAllocPoint  =   totalAllocPoint
}

const getPoolWeight = async (pid) => {
  const { allocPoint } = await chefContract.methods.poolInfo(pid).call();

  return allocPoint/chefAllocPoint;
};

// 计算单币种
const calculateCoin = async(lpAddresses, tokenSymbol, pid) => {
  const tokenContract   =   new provider.eth.Contract(erc20Abi, lpAddresses)
  const totalValue      =   await tokenContract.methods.balanceOf(chefAddress).call() 
  const decimal         =   await tokenContract.methods.decimals().call()
  const poolWeight      =   await getPoolWeight(pid)
  const dailyMdx        =   Math.round(BLOCKS_LP_24HR * MDX_LP_BLOCK * poolWeight)

  if(tokenSymbol == 'USDT') {
    const totalUsdtValue  =   totalValue/Math.pow(10, decimal)
    const mdexPrice       =   Number(totalUsdtValue / dailyMdx).toFixed(4);

    return {
      totalUsdtValue,
      tokenPriceInWeth: 1,
      poolWeight,
      dailyMdx,
      mdexPrice
    }
  } else {
    let price = 0
    try {
      price = await orcalContract.methods.consult(lpAddresses, String(Math.pow(10, decimal)), usdtAddress).call()
    } catch (error) {
      console.log(tokenSymbol, 'get price', error)
    }

    const totalUsdtValue  =   totalValue/Math.pow(10, decimal)*price/Math.pow(10, 18)
    const mdexPrice       =   Number(totalUsdtValue / dailyMdx).toFixed(4)

    return {
      totalUsdtValue,
      tokenPriceInUsdt: price/Math.pow(10, 18),
      poolWeight,
      dailyMdx,
      mdexPrice
    }
  }
}

// 计算LP
const calculateLp = async(lpAddresses, tokenAddresses, tokenSymbol, pid) => {
  const currentTokenContract    =   new provider.eth.Contract(erc20Abi, lpAddresses)
  const currentLpContract       =   new provider.eth.Contract(erc20Abi, tokenAddresses)

  const totalSupply     =   await currentTokenContract.methods.totalSupply().call()
  const tokenAmount     =   await currentLpContract.methods.balanceOf(currentTokenContract.options.address).call()
  const poolWeight      =   await getPoolWeight(pid)
  const dailyMdx        =   Math.round(BLOCKS_LP_24HR * MDX_LP_BLOCK * poolWeight);

  // chef的总量
  const balance =   await currentTokenContract.methods.balanceOf(chefAddress).call()
  const decimal =   await currentLpContract.methods.decimals().call()

  console.log(tokenSymbol, lpAddresses, totalSupply, tokenAmount, poolWeight, dailyMdx, balance, decimal)

  let price = 0
  try {
      price = await orcalContract.methods.consult(tokenAddresses, String(Math.pow(10, decimal)), usdtAddress).call()
  } catch (error) {
      console.log(tokenSymbol, 'get price', error)
  }

  //份额
  const portionLp       =   balance/totalSupply
  const totalAmount     =   tokenAmount*portionLp/Math.pow(10, decimal)
  const totalUsdtValue  =   totalAmount*price/Math.pow(10, 18)*2
  const mdexPrice       =   Number(totalUsdtValue / dailyMdx).toFixed(4)

  return {
      totalUsdtValue,
      tokenPriceInUsdt: price/Math.pow(10, 18),
      poolWeight,
      dailyMdx,
      mdexPrice
    }
}

// 获取流动性挖矿数据
const getCoinsInfo = async() => {
  const mdxPrice = await orcalContract.methods.consult(mdxAddress, String(Math.pow(10, 18)), usdtAddress).call()

  db.set('single', []).write()
  db.set('lps', []).write()

  for(const coin of coins) {
    let res = null

    if(coin.islp) {
      res = await calculateLp(coin.lpAddresses, coin.tokenAddresses, coin.symbol, coin.pid)
    } else {
      res = await calculateCoin(coin.lpAddresses, coin.symbol, coin.pid)
    }

    const apy = mdxPrice/1e+18*MDX_LP_BLOCK*BLOCKS_PER_YEAR*res.poolWeight/res.totalUsdtValue*100
    if(coin.islp) {
      db.get('lps').push({...res, symbol: coin.symbol, apy}).write()
    } else {
      db.get('single').push({...res, symbol: coin.symbol, apy}).write()
    }
  }
}

const axios = require('axios')
const API_URL = 'http://api.mdex.com'
const moment = require('moment')
const { graph_client, block_client } = require('./utils/graphql')
const { gql } = require('graphql-request')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')

const tokens = {
  '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f': 'WHT',
  '0x0298c2b32eae4da002a15f36fdf7615bea3da047': 'HUSD',
  '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd': 'ETH',
  '0xa71edc38d189767582c38a3145b5873052c3e47a': 'USDT',
  '0x66a79d23e58475d2738179ca52cd0b41d73f0bea': 'HBTC',
  '0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c': 'MDX',
  '0xa042fb0e60125a4022670014ac121931e7501af4': 'BAG',
  '0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3': 'HDOT',
  '0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4': 'HLTC',
  '0xef3cebd77e0c52cb6f60875d9306397b5caca375': 'HBCH',
  "0xe499ef4616993730ced0f31fa2703b92b50bb536": "HPT",
  "0xae3a768f9ab104c69a7cd6041fe16ffa235d1810": "HFIL",
  "0x202b4936fe1a82a4965220860ae46d7d3939bb25": "AAVE",
  "0x777850281719d5a96c29812ab72f822e0e09f3da": "SNX",
  "0x22c54ce8321a4015740ee1109d9cbc25815c46e6": "UNI"
}

const pair_data = (pairAddress, block) => {
  const PairFields = `
    fragment PairFields on Pair {
      id
      txCount
      token0 {
        id
        symbol
        name
        totalLiquidity
        derivedETH
      }
      token1 {
        id
        symbol
        name
        totalLiquidity
        derivedETH
      }
      reserve0
      reserve1
      reserveUSD
      totalSupply
      trackedReserveETH
      reserveETH
      volumeUSD
      untrackedVolumeUSD
      token0Price
      token1Price
      createdAtTimestamp
    }
  `

  const queryString = `
    ${PairFields}
    query pairs {
      pairs(${block ? `block: {number: ${block}}` : ``} where: { id: "${pairAddress}"} ) {
        ...PairFields
      }
    }`
  return gql`${queryString}`
}

const getBlocks = (timestamps) => {
  let queryString = 'query blocks {'
  queryString += timestamps.map((timestamp) => {
    return `t${timestamp}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${timestamp}, timestamp_lt: ${
      timestamp + 600
    } }) {
      number
    }`
  })
  queryString += '}'
  return gql`${queryString}`
}

const getPairVolume = async(pair_address) => {
  pair_address  = pair_address.toLowerCase()

  dayjs.extend(utc)
  const utcEndTime    =   dayjs.utc();

  
  // 24 hours block number
  const blcok_24hr    =   utcEndTime.subtract(1, 'day').startOf('minute').unix();
  const BLOCK_GQL     =   getBlocks([blcok_24hr]);
  const block_data    =   await block_client.request(BLOCK_GQL);
  const block_number  =   block_data[`t${blcok_24hr}`][0]['number'];
  const tmp_number    =   block_number - 2400;
  const PAIR_24HR_DATA     =   pair_data(pair_address, tmp_number);
  const pair_24hr_info     =   await graph_client.request(PAIR_24HR_DATA);

  const PAIR_DATA     =   pair_data(pair_address);
  const pair_info     =   await graph_client.request(PAIR_DATA);

  const volume_24hr   =   Math.round(pair_info['pairs'][0]['volumeUSD'] - pair_24hr_info['pairs'][0]['volumeUSD']);
  return volume_24hr;
}

// 获取交易挖矿数据
const getApy = async() => {
  const list = await axios.get(`${API_URL}/pool/list`)
  const apys = await axios.get(`${API_URL}/pool/apys`)

  const rate_fee    = 0.003;
  const totalWeight = await swapContract.methods.totalAllocPoint().call();

  if(list.data.code == 0 && apys.data.code == 0) {
    db.set('minging', []).write()

    let total_fees  = 0;
    
    console.log("Start for list")
    for (const val of list.data.result) {
      //if (val.pool_id < 13) {
        const dailyMdx        =   BLOCKS_SWAP_24HR * MDX_SWAP_BLOCK * val.alloc_point / totalWeight;
        const pair_volume = await getPairVolume(ming_pairs[val.pool_id])
        const pair_fees   = pair_volume * rate_fee;
        const mdexPrice   = Number(pair_fees / dailyMdx).toFixed(4)
        const fmt_pair_volume    = formatNumber(pair_volume)
        const pair_rate   = pair_fees / dailyMdx;

        db.get('minging').push({
          ...val,
          apy: apys.data.result[val.pool_id],
          symbol0: tokens[val.token0.toLocaleLowerCase()],
          symbol1: tokens[val.token1.toLocaleLowerCase()],
          dailyMdx,
          pair_volume,
          pair_fees,
          pair_rate,
          fmt_pair_volume,
          mdexPrice
        }).write()

        total_fees  =  total_fees + pair_fees;
      //}
    }
    console.log("Total fees", total_fees)

    console.log("End for list");

    const time = new Date().getTime()
    db.set('time', moment(time).utcOffset(8).format('YYYY-MM-DD HH:mm')).write()
    db.set('total_fees', total_fees).write();
  }
}

function formatNumber (num) {
  return (num+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');

}

const startApp = async() => {
    try {
        await initChefWeight()
        await getApy()

        await getCoinsInfo()
    } catch (error) {
        console.log(`Generate apy data error：${error}`)
    }

    console.log("Generate apy data success！")
}

startApp()
