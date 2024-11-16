import { useEffect, useState } from 'react';

import { getLLPayToken } from "@/apis/llpay"

interface ModalProps {
  onLoading: (value: boolean) => void;
  onPaymentSubmit: (cardToken: string, token: string, cardName: string) => void;
}

const PaymentForm: React.FC<ModalProps> = ({ onPaymentSubmit, onLoading }) => {
  const [llpayLoaded, setLlpayLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  const [cardToken, setCardToken] = useState('');
  const [cardName, setCardName] = useState('');
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    const style = {
      base: {
        backgroundColor: "#f8f8f8",
        bolderColor: "#f1f1f1",
        color: "#bcbcbc",
        fontWeight: "400",
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "14px",
        fontSmoothing: "antialiased",
        floatLabelSize: "12px",
        floatLabelColor: "#333333",
        floatLabelWeight: "100",
      },
    };
    if (!token) {
      getLLPayTokenIframe()
    }

    // 确保 LLP 在脚本加载后可用
    console.error("1. token: ", token, llpayLoaded, window.LLP)
    if (token && window.LLP) {
      setTimeout(() => {
        console.error("4. loading: token: ", token)
        const elements = window.LLP.elements();
        const card = elements.create('card', {
          token: token,
          style: style,
          apiType: "",
          merchantUrl: window.location.href,
        });
        card.mount('#llpay-card-element');
        setLlpayLoaded(true);
      }, 800);
    }

  }, [token]);

  const getLLPayTokenIframe = async () => {
    try {
      const res = await getLLPayToken()
      setToken(res.data.order)
    } catch (error) {
      console.error(error)
    }
  }

  const handleScriptLoad = () => {
    setLlpayLoaded(true);
  };
  const handleScriptError = () => {
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1);
      getLLPayTokenIframe()
      setTimeout(() => {
      }, 1000);
    } else {
      console.error('Script loading failed after multiple retries.');
    }
  };

  const handlePaymentSubmit = (ev: { preventDefault: () => void; }) => {
    ev.preventDefault();
    onLoading(true)
    window.LLP.getValidateResult().then((res: { validateResult: any; }) => {
      if (res && !res.validateResult) {
        onLoading(false)
      } else {
        window.LLP.confirmPay().then((result: { data: any; }) => {
          if (result && result.data) {
            setCardToken(result.data);
            onPaymentSubmit(result.data, token, cardName);
          }
        })
      }
    })
  }



  return (
    <>
      <div className="md:p-4" >
        <div id="llpay-card-element" className="mb-0"></div>
        {!llpayLoaded ? skeleton() : <div className="mb-4 px-4">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block h-14 py-3 pt-8 px-4 w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer hover:border-blue-300 transition-colors duration-200"
              placeholder=" "
              required
            />
            <label
              className="absolute left-4 top-5 transition-all duration-300 transform scale-75 origin-[0] text-gray-500 peer-focus:left-4 peer-focus:top-4 peer-focus:text-gray-400 peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400"
            >
              Name on Card
            </label>
          </div>
        </div>
        }
        {loading ?
          <button disabled type="button" className="merchant-button w-full h-10 bg-blue-400 text-white rounded">
            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
            </svg>
            Processing payment...
          </button>
          :
          <button onClick={handlePaymentSubmit} className="merchant-button w-full h-10 bg-blue-600 text-white rounded">
            Pay Now
          </button>
        }
      </div>
    </>
  );
};

const skeleton = () => {

  return (
    <div role="status" className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 mb-2 md:mb-8">
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
      <div className="flex items-center justify-between">
        <div className="w-1/2 h-2 mb-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="w-1/2 h-2 mb-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
  )
}

export default PaymentForm;
