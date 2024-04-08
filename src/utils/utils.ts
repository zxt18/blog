
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
        "industry": "Specialty Retail",
        "currentPrice": 78.13,
        "website": "https://shop.advanceautoparts.com",
        "country": "United States"
      },
      "CPS": {
        "symbol": "CPS",
        "longName": "Cooper-Standard Holdings Inc.",
        "industry": "Auto Parts",
        "currentPrice": 18.04,
        "website": "https://www.cooperstandard.com",
        "country": "United States"
      },
      "PYPL": {
        "symbol": "PYPL",
        "longName": "PayPal Holdings, Inc.",
        "industry": "Credit Services",
        "currentPrice": 66.34,
        "website": "https://www.paypal.com",
        "country": "United States"
      },
      "GNRC": {
        "symbol": "GNRC",
        "longName": "Generac Holdings Inc.",
        "industry": "Specialty Industrial Machinery",
        "currentPrice": 135.51,
        "website": "https://www.generac.com",
        "country": "United States"
      },
      "CRK": {
        "symbol": "CRK",
        "longName": "Comstock Resources, Inc.",
        "industry": "Oil & Gas E&P",
        "currentPrice": 9.32,
        "website": "https://www.comstockresources.com",
        "country": "United States"
      },
      "JD": {
        "symbol": "JD",
        "longName": "JD.com, Inc.",
        "industry": "Internet Retail",
        "currentPrice": 25.94,
        "website": "https://www.jd.com",
        "country": "China"
      },
      "SWK": {
        "symbol": "SWK",
        "longName": "Stanley Black & Decker, Inc.",
        "industry": "Tools & Accessories",
        "currentPrice": 95.25,
        "website": "https://www.stanleyblackanddecker.com",
        "country": "United States"
      },
      "VFC": {
        "symbol": "VFC",
        "longName": "V.F. Corporation",
        "industry": "Apparel Manufacturing",
        "currentPrice": 13.52,
        "website": "https://www.vfc.com",
        "country": "United States"
      },
      "MMM": {
        "symbol": "MMM",
        "longName": "3M Company",
        "industry": "Conglomerates",
        "currentPrice": 91.93,
        "website": "https://www.3m.com",
        "country": "United States"
      },
      "BABA": {
        "symbol": "BABA",
        "longName": "Alibaba Group Holding Limited",
        "industry": "Internet Retail",
        "currentPrice": 71.71,
        "website": "https://www.alibabagroup.com",
        "country": "China"
      },
      "CCI": {
        "symbol": "CCI",
        "longName": "Crown Castle Inc.",
        "industry": "REIT - Specialty",
        "currentPrice": 100.19,
        "website": "https://www.crowncastle.com",
        "country": "United States"
      },
      "GOOS": {
        "symbol": "GOOS",
        "longName": "Canada Goose Holdings Inc.",
        "industry": "Apparel Manufacturing",
        "currentPrice": 11.14,
        "website": "https://www.canadagoose.com",
        "country": "Canada"
      },
      "XPEV": {
        "symbol": "XPEV",
        "longName": "XPeng Inc.",
        "industry": "Auto Manufacturers",
        "currentPrice": 7.38,
        "website": "https://heyxpeng.com",
        "country": "China"
      }
    }
  return stockDataJson;
}

