import { getStockStaticData, type PortfolioProps, type StockStaticData} from "../utils/utils"
import './PortfolioTable.css'; // Import CSS file for styling

const stockJson= await getStockStaticData()
const stockTickers = Object.keys(stockJson)


export const PortfolioTable = ({ stockStaticData, portfolioData }: { stockStaticData: StockStaticData, portfolioData: PortfolioProps }) => {
  const sortedTickers = [...stockTickers].sort((a, b) => {
    const aPercentage = portfolioData[a]?.portfolioPercentage || 0;
    const bPercentage = portfolioData[b]?.portfolioPercentage || 0;
    return bPercentage - aPercentage; // Descending order
  });

  const StockHtmlTable = () => {
    return (
      <tbody>
        {sortedTickers.map((ticker, index) => {
          const stockData = stockStaticData[ticker];
          const portfolioInfo = portfolioData[ticker];
          const returns = ((stockData.currentPrice / portfolioInfo.averagePrice) - 1) * 100
          const returnsClassName = returns >= 0 ? 'text-green-500' : 'text-red-500';
          return (
            <tr className="hover:-translate-y-0.5 hover:shadow-2xl " key={index}>
              <td>{index + 1}</td>
              <td className="text-blue-600 hover:underline"><a href={stockData.website} target="_blank">{stockData.longName}</a></td>
              <td>{ticker}</td>
              <td>{portfolioInfo.units}</td>
              <td>{portfolioInfo.portfolioPercentage}%</td>
              <td>${portfolioInfo.averagePrice.toFixed(2)}</td>
              <td>${stockData.currentPrice.toFixed(2)}</td>
              <td className={returnsClassName}>{returns.toFixed(2)} %</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  return (
    <div className="portfolio-table-container">
      <div className="table-scroll">
        <table className="portfolio-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Stock</th>
              <th>Ticker</th>
              <th>Units</th>
              <th>% of Portfolio</th>
              <th>Average Price</th>
              <th>Close Price</th>
              <th>Returns</th>
            </tr>
          </thead>
          <StockHtmlTable />
        </table>
      </div>
    </div>
  );
};
