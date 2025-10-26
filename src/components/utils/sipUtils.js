// src/utils/sipUtils.js
export function calculateSIP(monthlyInvestment, annualRate, years) {
  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;

  const totalValue =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);

  const investedAmount = monthlyInvestment * months;
  const estimatedReturns = totalValue - investedAmount;

  return {
    investedAmount: investedAmount.toFixed(0),
    estimatedReturns: estimatedReturns.toFixed(0),
    totalValue: totalValue.toFixed(0),
  };
}
