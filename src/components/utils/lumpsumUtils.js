// src/utils/lumpsumUtils.js
export function calculateLumpsum(investment, annualRate, years) {
  const totalValue = investment * Math.pow(1 + annualRate / 100, years);
  const estimatedReturns = totalValue - investment;

  return {
    investedAmount: investment.toFixed(0),
    estimatedReturns: estimatedReturns.toFixed(0),
    totalValue: totalValue.toFixed(0),
  };
}
