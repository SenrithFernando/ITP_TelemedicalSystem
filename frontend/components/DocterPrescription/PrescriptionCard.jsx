export default function PrescriptionCard({ date, doctor, issue, addButton }) {
  if (addButton) {
    return (
      <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-full p-4 text-gray-600 hover:bg-gray-100 cursor-pointer w-40 h-32">
  <span className="text-6xl text-black">+</span>
  <span>Add Prescriptions</span>
</div>
    );
  }

  return (
    <div className="flex w-full justify-between items-center ">
      {/* Left-aligned Prescription Card */}
      <div className="w-3/4 bg-white p-4 rounded-lg shadow-md flex items-center">
        <div className="text-center">
          <p className="text-gray-500">{date.day}</p>
          <p className="text-xl font-bold text-gray-800">{date.number}</p>
        </div>
        <div className="flex-1 pl-4">
          <p className="text-gray-600">{date.time}</p>
          <p className="text-gray-800 font-semibold">{doctor}</p>
          <p className="text-gray-600">Issue: {issue}</p>
        </div>
        <button className="text-blue-600 "><u>View Documents</u></button>
      </div>
    </div>
  );
}