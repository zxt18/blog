
export interface PortfolioProps {
    [ticker: string]: {
      portfolioPercentage: number;
      averagePrice: number;
      units: number;
    };
  }

export interface StockStaticData {
  [key: string]: {
    symbol: string;
    longName: string;
    sector: string;
    currentPrice: number;
    website: string;
  };
}


export function calculateNetLiquidationValue(portfolioData : PortfolioProps, stockStaticData : StockStaticData) {
  let netLiquidationValue = 0;
  for (const ticker in portfolioData) {
    const { units } = portfolioData[ticker];
    const { currentPrice } = stockStaticData[ticker] || { price: 0 }; // Handle missing stock price data
    
    const currentValue = units * currentPrice;

    netLiquidationValue += currentValue;
  }
  return netLiquidationValue
}



// HARDCODED BITS CAUSE JAVASCRIPT SUCKS

export async function getPortfolioData(): Promise<PortfolioProps> {
   // Hardcoded portfolio data
   const portfolioData: PortfolioProps = {
    'AAP': { portfolioPercentage: 11.2, averagePrice: 66.00, units: 29 },
    'BABA': { portfolioPercentage: 10.3, averagePrice: 73.03, units: 31 },
    'CCI': { portfolioPercentage: 2.8, averagePrice: 104.46, units: 6 },
    'CPS': { portfolioPercentage: 9.7, averagePrice: 14.19, units: 135 },
    'CRK': { portfolioPercentage: 5.5, averagePrice: 8.16, units: 130 },
    'GNRC': { portfolioPercentage: 10.4, averagePrice: 113.8, units: 18 },
    'GOOS': { portfolioPercentage: 7.5, averagePrice: 12.96, units: 135 },
    'JD': { portfolioPercentage: 2.5, averagePrice: 21.70, units: 20 },
    'MMM': { portfolioPercentage: 3.4, averagePrice: 90.97, units: 8 },
    'PYPL': { portfolioPercentage: 10.9, averagePrice: 60.34, units: 37 },
    'SWK': { portfolioPercentage: 3.9, averagePrice: 94.98, units:9 },
    'VFC': { portfolioPercentage: 12, averagePrice: 15.40, units: 180 },
    'XPEV': { portfolioPercentage: 7.3, averagePrice: 8.79, units: 206 },
   }
    return portfolioData
}

export async function getStockStaticData(): Promise<StockStaticData> {
  const stockDataJson: StockStaticData = {
    "AAP": {
        "symbol": "AAP",
        "longName": "Advance Auto Parts, Inc.",
        "sector": "Consumer Cyclical",
        "currentPrice": 84.27,
        "website": "https://shop.advanceautoparts.com"
    },
    "CPS": {
        "symbol": "CPS",
        "longName": "Cooper-Standard Holdings Inc.",
        "sector": "Consumer Cyclical",
        "currentPrice": 15.97,
        "website": "https://www.cooperstandard.com"
    },
    "PYPL": {
        "symbol": "PYPL",
        "longName": "PayPal Holdings, Inc.",
        "sector": "Financial Services",
        "currentPrice": 65.095,
        "website": "https://www.paypal.com"
    },
    "GNRC": {
        "symbol": "GNRC",
        "longName": "Generac Holdings Inc.",
        "sector": "Industrials",
        "currentPrice": 128.52,
        "website": "https://www.generac.com"
    },
    "CRK": {
        "symbol": "CRK",
        "longName": "Comstock Resources, Inc.",
        "sector": "Energy",
        "currentPrice": 9.205,
        "website": "https://www.comstockresources.com"
    },
    "JD": {
        "symbol": "JD",
        "longName": "JD.com, Inc.",
        "sector": "Consumer Cyclical",
        "currentPrice": 27.215,
        "website": "https://www.jd.com"
    },
    "SWK": {
        "symbol": "SWK",
        "longName": "Stanley Black & Decker, Inc.",
        "sector": "Industrials",
        "currentPrice": 95.69,
        "website": "https://www.stanleyblackanddecker.com"
    },
    "VFC": {
        "symbol": "VFC",
        "longName": "V.F. Corporation",
        "sector": "Consumer Cyclical",
        "currentPrice": 14.065,
        "website": "https://www.vfc.com"
    },
    "MMM": {
        "symbol": "MMM",
        "longName": "3M Company",
        "sector": "Industrials",
        "currentPrice": 93.0201,
        "website": "https://www.3m.com"
    },
    "BABA": {
        "symbol": "BABA",
        "longName": "Alibaba Group Holding Limited",
        "sector": "Consumer Cyclical",
        "currentPrice": 72.43,
        "website": "https://www.alibabagroup.com"
    },
    "CCI": {
        "symbol": "CCI",
        "longName": "Crown Castle Inc.",
        "sector": "Real Estate",
        "currentPrice": 102.18,
        "website": "https://www.crowncastle.com"
    },
    "GOOS": {
        "symbol": "GOOS",
        "longName": "Canada Goose Holdings Inc.",
        "sector": "Consumer Cyclical",
        "currentPrice": 11.555,
        "website": "https://www.canadagoose.com"
    },
    "XPEV": {
        "symbol": "XPEV",
        "longName": "XPeng Inc.",
        "sector": "Consumer Cyclical",
        "currentPrice": 7.415,
        "website": "https://heyxpeng.com"
    }
  };

  return stockDataJson;
}

