import React from 'react';
import PortfolioSummary from './PortfolioSummary';
import PortfolioListFilters from './PortfolioListFilters';
import PortfolioList from './PortfolioList';

const PortfolioDashboard = () => (
  <div>
  <PortfolioSummary />
  <PortfolioListFilters />
  <PortfolioList />
</div>
);

export default PortfolioDashboard;
