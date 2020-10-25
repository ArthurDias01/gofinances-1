import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Line, Doughnut } from 'react-chartjs-2';

import { useTheme } from '../../../hooks/theme';
import formatValue from '../../../utils/formatValue';
import getChartOptions from '../../../utils/getChartOptions';

import {
  Container,
  Widget,
  OverviewGridContainer,
  GraphGridContainer,
} from './styles';

const DashboardGraphView: React.FC = () => {
  const { theme } = useTheme();
  const chartOptions = getChartOptions(theme);

  const donutData = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        borderColor: theme.colors.default,
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderJoinStyle: 'miter',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'My First dataset',
        fill: false,
        backgroundColor: '#E83F4D',
        borderColor: '#E83F4D',
        borderJoinStyle: 'miter',
        data: [20, 39, 40, 41, 26, 25, 20],
      },
    ],
  };

  return (
    <Container>
      <OverviewGridContainer>
        <Widget borderLeftColor={theme.colors.success}>
          <header>
            <p>Maior entrada</p>
          </header>
          <h2>{formatValue(50.0)}</h2>
        </Widget>
        <Widget borderLeftColor={theme.colors.danger}>
          <header>
            <p>Maior saida</p>
          </header>
          <h2>{formatValue(50.0)}</h2>
        </Widget>
        <Widget borderLeftColor={theme.colors.secondary}>
          <header>
            <p>Categ. mais frequente</p>
          </header>
          <h2>
            <FiShoppingCart
              color={theme.title === 'dark' ? '#F38EDC' : '#9C107B'}
            />{' '}
            <span>Comida</span>
          </h2>
        </Widget>
      </OverviewGridContainer>
      <GraphGridContainer>
        <Widget>
          <header>
            <p>Entrada / Saída</p>
          </header>

          <div>
            <Line data={lineData} options={chartOptions} />
          </div>
        </Widget>
        <Widget>
          <header>
            <p>Transações por categoria</p>
          </header>
          <div>
            <Doughnut data={donutData} options={chartOptions} />
          </div>
        </Widget>
      </GraphGridContainer>
    </Container>
  );
};

export default DashboardGraphView;
