
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
  industry: string;
  currentPrice: number;
  website: string;
  country:string;
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
  'AAP': { portfolioPercentage: 10.38, averagePrice: 70.37, units: 47 },
  'BABA': { portfolioPercentage: 9.61, averagePrice: 73.28, units: 41 },
  'CCI': { portfolioPercentage: 6.47, averagePrice: 100.77, units: 23 },
  'CPS': { portfolioPercentage: 8.64, averagePrice: 14.89, units: 185 },
  'CRK': { portfolioPercentage: 6.20, averagePrice: 8.76, units: 215 },
  'GNRC': { portfolioPercentage: 8.14, averagePrice: 115.69, units: 21 },
  'GOOS': { portfolioPercentage: 7.12, averagePrice: 12.34, units: 217 },
  'JD': { portfolioPercentage: 1.9, averagePrice: 21.70, units: 20 },
  'MMM': { portfolioPercentage: 2.25, averagePrice: 90.97, units: 8 },
  'PYPL': { portfolioPercentage: 11.00, averagePrice: 62.65, units: 58 },
  'SWK': { portfolioPercentage: 4.16, averagePrice: 93.03, units: 16.7 },
  'VFC': { portfolioPercentage: 13.32, averagePrice: 14.10, units: 365 },
  'XPEV': { portfolioPercentage: 6.15, averagePrice: 8.58, units: 236 },
  "TLT 15NOV24 89/100 Bull Call" : { portfolioPercentage: 1.10, averagePrice: 314, units: 1 },
 }
  return portfolioData
}

export async function getStockStaticData(): Promise<StockStaticData> {
const stockDataJson: StockStaticData = {
  "AAP": {
  "symbol": "AAP",
  "longName": "Advance Auto Parts, Inc.",
  "industry": "Specialty Retail",
  "currentPrice": 76.31,
  "website": "https://shop.advanceautoparts.com",
  "country": "United States"
  },
  "CPS": {
  "symbol": "CPS",
  "longName": "Cooper-Standard Holdings Inc.",
  "industry": "Auto Parts",
  "currentPrice": 16.15,
  "website": "https://www.cooperstandard.com",
  "country": "United States"
  },
  "PYPL": {
  "symbol": "PYPL",
  "longName": "PayPal Holdings, Inc.",
  "industry": "Credit Services",
  "currentPrice": 65.68,
  "website": "https://www.paypal.com",
  "country": "United States"
  },
  "GNRC": {
  "symbol": "GNRC",
  "longName": "Generac Holdings Inc.",
  "industry": "Specialty Industrial Machinery",
  "currentPrice": 133.38,
  "website": "https://www.generac.com",
  "country": "United States"
  },
  "CRK": {
  "symbol": "CRK",
  "longName": "Comstock Resources, Inc.",
  "industry": "Oil & Gas E&P",
  "currentPrice": 9.98,
  "website": "https://www.comstockresources.com",
  "country": "United States"
  },
  "JD": {
  "symbol": "JD",
  "longName": "JD.com, Inc.",
  "industry": "Internet Retail",
  "currentPrice": 32.87,
  "website": "https://www.jd.com",
  "country": "China"
  },
  "SWK": {
  "symbol": "SWK",
  "longName": "Stanley Black & Decker, Inc.",
  "industry": "Tools & Accessories",
  "currentPrice": 85.8,
  "website": "https://www.stanleyblackanddecker.com",
  "country": "United States"
  },
  "VFC": {
  "symbol": "VFC",
  "longName": "V.F. Corporation",
  "industry": "Apparel Manufacturing",
  "currentPrice": 12.61,
  "website": "https://www.vfc.com",
  "country": "United States"
  },
  "MMM": {
  "symbol": "MMM",
  "longName": "3M Company",
  "industry": "Conglomerates",
  "currentPrice": 97.15,
  "website": "https://www.3m.com",
  "country": "United States"
  },
  "BABA": {
  "symbol": "BABA",
  "longName": "Alibaba Group Holding Limited",
  "industry": "Internet Retail",
  "currentPrice": 81.33,
  "website": "https://www.alibabagroup.com",
  "country": "China"
  },
  "CCI": {
  "symbol": "CCI",
  "longName": "Crown Castle Inc.",
  "industry": "REIT - Specialty",
  "currentPrice": 97.39,
  "website": "https://www.crowncastle.com",
  "country": "United States"
  },
  "GOOS": {
  "symbol": "GOOS",
  "longName": "Canada Goose Holdings Inc.",
  "industry": "Apparel Manufacturing",
  "currentPrice": 11.36,
  "website": "https://www.canadagoose.com",
  "country": "Canada"
  },
  "XPEV": {
  "symbol": "XPEV",
  "longName": "XPeng Inc.",
  "industry": "Auto Manufacturers",
  "currentPrice": 9.06,
  "website": "https://heyxpeng.com",
  "country": "China"
  },
  "TLT 15NOV24 89/100 Bull Call": {
    "symbol": "TLT",
    "longName": "iShares 20+ Year Treasury Bond ETF",
    "industry": "ETF",
    "currentPrice": 382, // As of May 5, 2024 market close
    "website": "https://www.ishares.com/us/products/239454/ishares-20-year-treasury-bond-etf",
    "country": "USA"
    }
  ,
  }
  
return stockDataJson;
}

