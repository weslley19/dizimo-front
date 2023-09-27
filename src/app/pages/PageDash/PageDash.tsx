/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from 'react-bootstrap'
import PageTitle from '../../components/shared/PageTitle/PageTitle'
import { AiOutlinePlus } from 'react-icons/ai'

import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'

import './styles.css'
import { formatValueReal } from '../../../utils/utils'

import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement)

const PageDash = () => {
  const entrada = 2585
  const withdraw = 800
  const total = entrada - withdraw

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <>
      <div className='row'>
        <div className='col-md-4'>
          <div className='container-panel panel-in'>
            <h6><BsFillArrowUpCircleFill className='icon' />Entradas</h6>
            <p>{formatValueReal(entrada)}</p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='container-panel panel-withdraw'>
            <h6><BsFillArrowDownCircleFill className='icon' />Saídas</h6>
            <p>{formatValueReal(withdraw)}</p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='container-panel panel-total'>
            <h6><MdAttachMoney className='icon' />Total</h6>
            <p>{formatValueReal(total)}</p>
          </div>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-md-6'>
          <div className='container-graph'>
            <Bar
              data={{
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [
                  {
                    label: 'Dízimos',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                  }
                ]
              }}
              options={chartOptions}
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='container-graph'>
            <Line
              data={{
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [
                  {
                    label: 'Ofertas',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                  }
                ]
              }}
              options={chartOptions}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PageDash
