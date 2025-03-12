import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmount } from './month-canceled-orders-amout'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthReveneuCard } from './month-reveneu-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1>Dashboard</h1>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MonthReveneuCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmount />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </>
  )
}
