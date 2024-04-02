import yahooFinance from 'yahoo-finance2'
export interface StockNameAndPriceProps {
    [ticker: string]: {
      price: number;
      name: string;
    };
  }
  
export interface PortfolioProps {
    [ticker: string]: {
      portfolioPercentage: number;
      averagePrice: number;
      units: number;
    };
  }

export const STOCK_TICKERS : string[] = ['AAP', 'CPS', 'PYPL', 'GNRC', 'CRK', 'JD', 'SWK', 'VFC','MMM', 'BABA', 'CCI', 'GOOS', 'XPEV']

export async function getStockNameAndPrice(tickers: string[]): Promise<StockNameAndPriceProps> {
    const stockData: StockNameAndPriceProps = {};
    const result = await yahooFinance.quote(tickers);

    result.forEach(stock => {
        if (stock.regularMarketPrice !== undefined && stock.longName !== undefined) {
            stockData[stock.symbol] = {
                price: stock.regularMarketPrice,
                name: stock.longName
            };
        }
    });
    return stockData;
}


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
    // 'CASH': {portfolioPercentage: 2.2, averagePrice: 0}  
   }

    // Return portfolio data for the provided tickers
    return portfolioData
}



export function calculateNetLiquidationValue(portfolioData : PortfolioProps, stockPriceData : StockNameAndPriceProps) {
    let netLiquidationValue = 0;
  
    for (const ticker in portfolioData) {
      const { units } = portfolioData[ticker];
      const { price } = stockPriceData[ticker] || { price: 0 }; // Handle missing stock price data
  
      const currentValue = units * price;
  
      netLiquidationValue += currentValue;
    }
    return netLiquidationValue
}




