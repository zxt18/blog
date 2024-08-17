
export function calculateNetLiquidationValue(portfolioData : Array<PortfolioProps> ) {
  const netLiquidationValue = portfolioData.reduce((acc, currVal) => {
    if (currVal.symbol.endsWith('0')) {
      return acc + currVal.closePrice * Math.abs(currVal.quantity* 100) // for Options each unit is 100 shares.
    }
    return acc + currVal.closePrice * Math.abs(currVal.quantity)
  },0);
  
  return netLiquidationValue
}

export interface PortfolioProps {
    symbol : string;
    description : string;
    sector : string;
    quantity : number; 
    averagePrice : number;
    closePrice : number;
    costBasis: number;
    unrealizedPnL: number;
    portfolioPercentage: number;
}

// HARDCODED BITS CAUSE JAVASCRIPT SUCKS GENERATED FROM IBKR_PARSER_SCRIPT
export const portfolioData : Array<PortfolioProps> = [
  {
    "symbol": "VFC",
    "description": "VF CORP",
    "sector": "Consumer Cyclicals",
    "quantity": 398.0,
    "averagePrice": 13.9825376884,
    "closePrice": 13.04,
    "costBasis": 5565.05,
    "unrealizedPnL": -375.13,
    "portfolioPercentage": 13.0366949685
  },
  {
    "symbol": "PYPL",
    "description": "PAYPAL HOLDINGS INC",
    "sector": "Industrials",
    "quantity": 62.0,
    "averagePrice": 62.8567741935,
    "closePrice": 64.1,
    "costBasis": 3897.12,
    "unrealizedPnL": 77.08,
    "portfolioPercentage": 9.9828962959
  },
  {
    "symbol": "BABA",
    "description": "ALIBABA GROUP HOLDING-SP ADR",
    "sector": "Technology",
    "quantity": 44.0,
    "averagePrice": 74.0828409091,
    "closePrice": 86.7,
    "costBasis": 3259.645,
    "unrealizedPnL": 555.155,
    "portfolioPercentage": 9.582495292
  },
  {
    "symbol": "CPS",
    "description": "COOPER-STANDARD HOLDING",
    "sector": "Consumer Cyclicals",
    "quantity": 243.0,
    "averagePrice": 14.7574897119,
    "closePrice": 14.55,
    "costBasis": 3586.07,
    "unrealizedPnL": -50.42,
    "portfolioPercentage": 8.8812911501
  },
  {
    "symbol": "AAP",
    "description": "ADVANCE AUTO PARTS INC",
    "sector": "Consumer Cyclicals",
    "quantity": 47.0,
    "averagePrice": 70.370212766,
    "closePrice": 73.95,
    "costBasis": 3307.4,
    "unrealizedPnL": 168.25,
    "portfolioPercentage": 8.7305755903
  },
  {
    "symbol": "GNRC",
    "description": "GENERAC HOLDINGS INC",
    "sector": "Industrials",
    "quantity": 24.0,
    "averagePrice": 118.5822916667,
    "closePrice": 143.0,
    "costBasis": 2845.975,
    "unrealizedPnL": 586.025,
    "portfolioPercentage": 8.6209300205
  },
  {
    "symbol": "GOOS",
    "description": "CANADA GOOSE HOLDINGS INC",
    "sector": "Consumer Cyclicals",
    "quantity": 257.0,
    "averagePrice": 12.1624902724,
    "closePrice": 13.19,
    "costBasis": 3125.76,
    "unrealizedPnL": 264.07,
    "portfolioPercentage": 8.5150021012
  },
  {
    "symbol": "CCI",
    "description": "CROWN CASTLE INC",
    "sector": "Real Estate",
    "quantity": 23.0,
    "averagePrice": 100.7717391304,
    "closePrice": 104.02,
    "costBasis": 2317.75,
    "unrealizedPnL": 74.71,
    "portfolioPercentage": 6.0096824699
  },
  {
    "symbol": "SWK",
    "description": "STANLEY BLACK & DECKER INC",
    "sector": "Industrials",
    "quantity": 25.7,
    "averagePrice": 91.3536770428,
    "closePrice": 89.79,
    "costBasis": 2347.7895,
    "unrealizedPnL": -40.1895,
    "portfolioPercentage": 5.7965204299
  },
  {
    "symbol": "CRK",
    "description": "COMSTOCK RESOURCES INC",
    "sector": "Energy",
    "quantity": 215.0,
    "averagePrice": 8.7602325581,
    "closePrice": 10.65,
    "costBasis": 1883.45,
    "unrealizedPnL": 406.3,
    "portfolioPercentage": 5.7516825508
  },
  {
    "symbol": "XPEV",
    "description": "XPENG INC - ADR",
    "sector": "Consumer Cyclicals",
    "quantity": 276.0,
    "averagePrice": 8.5014492754,
    "closePrice": 8.27,
    "costBasis": 2346.4,
    "unrealizedPnL": -63.88,
    "portfolioPercentage": 5.7335213259
  },
  {
    "symbol": "MMM",
    "description": "3M CO",
    "sector": "Consumer Non-Cyc",
    "quantity": 13.0,
    "averagePrice": 93.4076923077,
    "closePrice": 104.86,
    "costBasis": 1214.3,
    "unrealizedPnL": 148.88,
    "portfolioPercentage": 3.4242072801
  },
  {
    "symbol": "PYPL  250117C00065000",
    "description": "PYPL 17JAN25 65 C",
    "sector": "Industrials",
    "quantity": 1.0,
    "averagePrice": 823.69685,
    "closePrice": 8.0676,
    "costBasis": 823.69685,
    "unrealizedPnL": -16.93685,
    "portfolioPercentage": 2.0265214171
  },
  {
    "symbol": "JD",
    "description": "JD.COM INC-ADR",
    "sector": "Consumer Cyclicals",
    "quantity": 20.0,
    "averagePrice": 21.7,
    "closePrice": 34.27,
    "costBasis": 434.0,
    "unrealizedPnL": 251.4,
    "portfolioPercentage": 1.7216740781
  },
  {
    "symbol": "TLT   241115C00089000",
    "description": "TLT 15NOV24 89 C",
    "sector": "Government",
    "quantity": 1.0,
    "averagePrice": 405.69685,
    "closePrice": 5.9461,
    "costBasis": 405.69685,
    "unrealizedPnL": 188.91315,
    "portfolioPercentage": 1.4936163169
  },
  {
    "symbol": "DIS",
    "description": "WALT DISNEY CO/THE",
    "sector": "Telecomm",
    "quantity": 5.0,
    "averagePrice": 104.984,
    "closePrice": 103.37,
    "costBasis": 524.92,
    "unrealizedPnL": -8.07,
    "portfolioPercentage": 1.2982889514
  },
  {
    "symbol": "VFC   250117C00012500",
    "description": "VFC 17JAN25 12.5 C",
    "sector": "Consumer Cyclicals",
    "quantity": 1.0,
    "averagePrice": 249.69685,
    "closePrice": 2.66,
    "costBasis": 249.69685,
    "unrealizedPnL": 16.30315,
    "portfolioPercentage": 0.6681723151
  },
  {
    "symbol": "USD",
    "description": "United States Dollar",
    "sector": "Cash",
    "quantity": 4.704716,
    "averagePrice": 0.0,
    "closePrice": 1.0,
    "costBasis": 0.0,
    "unrealizedPnL": 0.0,
    "portfolioPercentage": 0.0
  },
  {
    "symbol": "VFC   250117C00020000",
    "description": "VFC 17JAN25 20 C",
    "sector": "Consumer Cyclicals",
    "quantity": -1.0,
    "averagePrice": 56.299904,
    "closePrice": 0.6359,
    "costBasis": -56.299904,
    "unrealizedPnL": -7.290096,
    "portfolioPercentage": -0.1597333741
  },
  {
    "symbol": "TLT   241115C00100000",
    "description": "TLT 15NOV24 100 C",
    "sector": "Government",
    "quantity": -1.0,
    "averagePrice": 91.299624,
    "closePrice": 1.335,
    "costBasis": -91.299624,
    "unrealizedPnL": -42.200376,
    "portfolioPercentage": -0.3353421206
  },
  {
    "symbol": "PYPL  250117C00080000",
    "description": "PYPL 17JAN25 80 C",
    "sector": "Industrials",
    "quantity": -1.0,
    "averagePrice": 323.297768,
    "closePrice": 3.1,
    "costBasis": -323.297768,
    "unrealizedPnL": 13.297768,
    "portfolioPercentage": -0.778697059
  }
];
