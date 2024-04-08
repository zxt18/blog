import { Chart } from "react-google-charts";
import { getPortfolioData, getStockStaticData } from "../utils/utils";

// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

export const options = {
  title: "My Daily Activities",
  backgroundColor: '#000000', // Black background
  fillOpacity: 0.5,
  legend: {
    textStyle: { color: 'white' }
}
};

export function App() {

}



const stockStaticData = await getStockStaticData();



// const 


const portfolioData = await getPortfolioData()

const industries : [string, number][] = Object.entries(portfolioData).map(([ticker, { portfolioPercentage }]) => {
  const { industry } = stockStaticData[ticker];
  return [industry, portfolioPercentage];
});

function calculateUniqueIndustry(industries: [string, number][]): [string, number][] {
  return industries.reduce<[string, number][]>((accumulator, [industry, portfolioPercentage]) => {
    const existingIndustryIndex = accumulator.findIndex(([existingIndustry]) => existingIndustry === industry);

    if (existingIndustryIndex !== -1) {
      accumulator[existingIndustryIndex][1] += portfolioPercentage;
    } else {
      accumulator.push([industry, portfolioPercentage]);
    }
    
    return accumulator;
  }, []);
}

const uniqueIndustry: [string, any][] = calculateUniqueIndustry(industries);
uniqueIndustry.unshift(["Industry", "Portfolio Percentage"]);



    
export const IndustryPieCharts= () => {
  console.log(uniqueIndustry)
    return (
      <Chart
        chartType="PieChart"
        data={uniqueIndustry}
        options={options}
        width={"100%"}
        height={"600px"}
      />
    );

}                         
  

