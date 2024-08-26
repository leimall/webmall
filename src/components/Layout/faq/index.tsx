
export default function FaqPage () {

  return (
    <div>
      <h2 className="text-2xl font-extrabold  py-8">Frequently Asked Questions</h2>
    <div className="font-[sans-serif]">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-300">
            <p className="text-gray-600 text-sm">Explore our comprehensive FAQ to find answers to common queries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">How can I create an account?</h3>
              <p className="text-gray-600 text-sm">Creating an account is easy! Click on the "Sign Up" button and follow the simple steps to get started.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">Is there a mobile app available?</h3>
              <p className="text-gray-600 text-sm">Yes, we offer a mobile app for both iOS and Android. Visit the App Store or Google Play to download it.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">How can I reset my password?</h3>
              <p className="text-gray-600 text-sm">To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your email.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}