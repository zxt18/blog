import { type PortfolioProps, portfolioData} from "../utils/utils"
import './PortfolioTable.css'; // Import CSS file for styling

export const PortfolioTable = ({ portfolioData }: { portfolioData: PortfolioProps[] }) => {

  const StockHtmlTable = () => {
    return (
      <tbody>
        {portfolioData.map((instrData, index) => {
          const returnsClassName = instrData.unrealizedPnL >= 0 ? 'text-green-500' : 'text-red-500';
          const returns = instrData.unrealizedPnL/ instrData.costBasis * 100
          return (
            <tr className="hover:-translate-y-0.5 hover:shadow-2xl " key={index}>
              <td>{index + 1}</td>
              <td className="text-blue-600 hover:underline">{instrData.description}</td>
              <td>{instrData.symbol}</td>
              <td>{instrData.quantity}</td>
              <td>{instrData.portfolioPercentage.toFixed(1)}%</td>
              <td>${instrData.averagePrice.toFixed(2)}</td>
              <td>${instrData.closePrice.toFixed(2)}</td>
              <td>${instrData.costBasis.toFixed(2)}</td>
              <td className={returnsClassName}> ${instrData.unrealizedPnL.toFixed(0)}</td>
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
              <th>Cost Basis</th>
              <th>P&L</th>
              <th>Returns</th>
            </tr>
          </thead>
          <StockHtmlTable />
        </table>
      </div>
    </div>
  );
};
