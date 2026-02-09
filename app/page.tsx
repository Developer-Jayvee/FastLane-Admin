import Card from "@/components/features/Card";
import Link from "next/link";
import {
  DUMMY_DATA,
  DUMMY_TABLE_COLUMNS
} from "@/constants/index"
import { Icon } from "@/hooks/useIcons";
import Table from "@/components/features/Table";
import style from "@/app/dashboard.module.css"
import CustomChart from "@/components/features/CustomChart";


type ChartDataTypes = {
  description : string;
  count : number;
}

export default function Home() {

  const { salesSummary , topOrders } = DUMMY_DATA;

  const chartData = salesSummary.map(item => ({
        name: item.description,
        value: item.count
    }));
  return (
    <div className={style.dashboardContainer}>
      <div className={style.overallSummary}>
        {
          salesSummary.map((initialData, index) =>
            <Card key={index} customClass={style.cardSummary} >
              <p className="icon">
                <Icon name={initialData.iconName} />
              </p>
              <div className="card-info">
                <p className="title">{initialData.description}</p>
                <p className="amount">{initialData.count}</p>

              </div>
            </Card>
          )
        }
      </div>
      <div className={style.salesSummary}>
        <div className="card sales-chart border-2 border-gray-300 rounded-lg p-4 col-span-3">
          <p className="font-bold">Sales Summary</p>
          <div className={style.chart}>
            <CustomChart initialData={chartData}/>
          </div>
        </div>
        <div className="card top-products border-2 border-gray-300 rounded-lg p-4">
          <h3>Top Products</h3>
          <ul>
            <li>Nike Air Max 270</li>
            <li>Nike Air Force 1</li>
            <li>Nike React Infinity Run</li>
          </ul>
        </div>
      </div>
      <div className={style.orderSummary}>
        <div className="card border-2 border-gray-300 rounded-lg p-4 col-span-3">
          <h3>Order Summary</h3>
          <Table headers={DUMMY_TABLE_COLUMNS}>

          </Table>
        </div>
        <div className="card border-2 border-gray-300 rounded-lg p-4">
          <h3>Top Sold Items </h3>
          <p>Progress bars goes here</p>
        </div>
      </div>
    </div>
  )
}