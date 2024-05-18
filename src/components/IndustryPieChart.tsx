import { Chart } from "react-google-charts";
import { portfolioData, type PortfolioProps } from "../utils/utils";


export const options = {
  title: "My Daily Activities",
  backgroundColor: '#000000', // Black background
  fillOpacity: 0.5,
  legend: {
    textStyle: { color: 'white' }
},
  chartArea: {
    width: '90%',
    height: '80%',
  },
};

function calculateUniqueIndustry(portfolioData : Array<PortfolioProps>): [string, number][] {
  const sectorMap = new Map<string, number>();
  portfolioData.forEach(item => {
      if (sectorMap.has(item.sector)) {
        sectorMap.set(item.sector, sectorMap.get(item.sector)! + item.portfolioPercentage)
      } else {
        sectorMap.set(item.sector, item.portfolioPercentage)
      }
    }
  )
  const industryPP: [string, number][] = Array.from(sectorMap.entries());
  return industryPP
}

const uniqueIndustry: [string, any][] = calculateUniqueIndustry(portfolioData);
uniqueIndustry.unshift(["Industry", "Portfolio Percentage"]);



    
export const IndustryPieCharts= () => {
  console.log(uniqueIndustry)
    return (
      <Chart
        chartType="PieChart"
        data={uniqueIndustry}
        options={options}
        height="80vh"
      />
    );

}                         
  

