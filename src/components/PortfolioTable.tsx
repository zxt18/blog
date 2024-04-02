import React from 'react';
import { STOCK_TICKERS, type PortfolioProps, type StockNameAndPriceProps } from '@utils/utils.ts';
import './PortfolioTable.css'; // Import CSS file for styling

export const PortfolioTable = ({ stockNameAndPrice, portfolioData }: { stockNameAndPrice: StockNameAndPriceProps, portfolioData: PortfolioProps }) => {
  const sortedTickers = [...STOCK_TICKERS].sort((a, b) => {
    const aPercentage = portfolioData[a]?.portfolioPercentage || 0;
    const bPercentage = portfolioData[b]?.portfolioPercentage || 0;
    return bPercentage - aPercentage; // Descending order
  });

  const StockHtmlTable = () => {
    return (
      <tbody>
        {sortedTickers.map((ticker, index) => {
          const nameAndPrice = stockNameAndPrice[ticker];
          const portfolioInfo = portfolioData[ticker];
          const returns = ((nameAndPrice.price / portfolioInfo.averagePrice) - 1) * 100
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{nameAndPrice.name}</td>
              <td>{ticker}</td>
              <td>{portfolioInfo.units}</td>
              <td>{portfolioInfo.portfolioPercentage}%</td>
              <td>${portfolioInfo.averagePrice.toFixed(2)}</td>
              <td>${nameAndPrice.price.toFixed(2)}</td>
              <td>{returns.toFixed(2)} %</td>
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
