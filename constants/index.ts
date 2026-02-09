
import type { IconName } from "@/utils/icons";
type SalesSummaryItem = {
    count: number;
    description: string;
    iconName?: IconName;
}
type TopOrders = {
    id: number;
    customer: string;
    date: string;
    amount: number;
    status: string;
}
type TopSoldItem = {
    id: number;
    name: string;
    quantitySold: number;
    totalRevenue: number;
}
type DUMMY_DATA_TYPE = {
    salesSummary: SalesSummaryItem[];
    topOrders: TopOrders[];
    topSoldItems: TopSoldItem[];
}
export const DUMMY_DATA: DUMMY_DATA_TYPE = {
    salesSummary: [
        {
            count: 2000,
            description: "Total Customers",
            iconName: "group"
        },
        {
            count: 140,
            description: "Total Products",
            iconName: "box3dpoint"
        },
        {
            count: 1600,
            description: "Total Orders",
            iconName: "cartplus"
        },

        {
            count: 12000,
            description: "Total Sales",
            iconName: "graphup"
        }
    ],
    topOrders: [
        {
            id: 1,
            customer: "John Doe",
            date: "2024-06-01",
            amount: 250.00,
            status: "Delivered"
        },
        {
            id: 2,
            customer: "Jane Smith",
            date: "2024-06-02",
            amount: 150.00,
            status: "Pending"
        }
    ],
    topSoldItems: [
        {
            id: 1,
            name: "Nike Air Max",
            quantitySold: 500,
            totalRevenue: 75000.00
        },
        {
            id: 2,
            name: "Nike Revolution",
            quantitySold: 300,
            totalRevenue: 45000.00
        }
    ]

}

export const DUMMY_TABLE_COLUMNS = ['Product ID', 'Product Name', 'Category', 'Price', 'Stock', 'Sold'];
export const CUSTOMER_HEADERS = [
    'Customer Name',
    'Address',
    'Status',
    'Action'
]
export const ORDER_HEADERS = [
    'Customer',
    'Product',
    'Quantity',
    'Date Ordered',
    'Status'
]
export const LATEST_ORDER_HEADERS = [
    'Order ID',
    'Date',
    'Status'
]

export const NAV_LINKS = [
    {
        link: '/',
        name: 'Dashboard',
        icon: ''
    },
    {
        link: '/customers',
        name: 'Customers',
        icon: ''
    },
    {
        link: '/products',
        name: 'Products',
        icon: ''
    },
    {
        link: '/orders',
        name: 'Orders',
        icon: ''
    },
]

