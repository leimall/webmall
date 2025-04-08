import { SafetyOutlined, ShoppingCartOutlined, DollarOutlined, CustomerServiceOutlined } from "@ant-design/icons";


export default function IndexInfor() {
  return (
    <section className="flex flex-col md:flex-row justify-between py-16">
      <div className="text-center md:w-1/4 p-2 xl:p-4">
        <SafetyOutlined style={{ fontSize: '4rem', color: '#603813' }} />
        <div className="text-lg font-bold pt-2">
          Secure payments
        </div>
        <p>Your payment are 100% safe and protected</p>
      </div>
      <div className="text-center md:w-1/4  p-2 xl:p-4">
        <ShoppingCartOutlined style={{ fontSize: '4rem', color: '#603813' }} />
        <div className="text-lg font-bold pt-2">
          Fast Shipping
        </div>
        <p>On your doorstep in just 7-15 days.</p>
      </div>
      <div className="text-center md:w-1/4 p-2 xl:p-4">
        <DollarOutlined style={{ fontSize: '4rem', color: '#603813' }} />
        <div className="text-lg font-bold pt-2">
          Duty Free
        </div>
        <p>No extra taxes or tips.</p>
      </div>
      <div className="text-center md:w-1/4 p-2 xl:p-4">
        <CustomerServiceOutlined style={{ fontSize: '4rem', color: '#603813' }} />
        <div className="text-lg font-bold pt-2">
          Customer Servic
        </div>
        <p>24/7 customer support</p>
      </div>
    </section>
  );
}