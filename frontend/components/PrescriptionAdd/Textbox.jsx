export default function PrescriptionForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500 w-full max-w-2xl transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prescription</h2>

        {/* Date & Weight Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Weight</label>
            <div className="flex items-center border rounded-md p-2 bg-gray-100">
              <input
                type="number"
                className="w-full bg-transparent focus:outline-none"
                placeholder="Enter weight"
                min="0"
              />
              <span className="ml-2 text-gray-600">KG</span>
            </div>
          </div>
        </div>

        {/* Issue Field */}
        <div className="mt-4">
          <label className="block text-gray-700 mb-1">Issue</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter issue"
          />
        </div>

        {/* Medicines Field */}
        <div className="mt-4">
          <label className="block text-gray-700 mb-1">Medicines</label>
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="List medicines..."
          ></textarea>
        </div>

        {/* Description Field */}
        <div className="mt-4">
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={2}
            placeholder="Additional details..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-800 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}