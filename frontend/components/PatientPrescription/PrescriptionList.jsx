const prescriptions = [
    { date: "Thu 15", time: "09:00am - 09:30am", patient: "Stevan dux", issue: "Fever" },
    { date: "Fri 16", time: "09:00am - 09:30am", patient: "Stevan dux", issue: "Fever" },
    { date: "Mon 19", time: "09:00am - 09:30am", patient: "Stevan dux", issue: "Fever" },
    { date: "Mon 02", time: "09:00am - 09:30am", patient: "Stevan dux", issue: "Fever" },
    { date: "Tue 03", time: "09:00am - 09:30am", patient: "Stevan dux", issue: "Fever" },
    { date: "Wed 04", time: "09:00am - 09:30am", patient: "Stevan dux", issue: "Fever" },
  ];
  
  export default function PrescriptionList() {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        {prescriptions.map((item, index) => (
          <div key={index} className="border-b p-4 flex justify-between items-center last:border-0">
            <div className="flex items-center space-x-4">
            <div className="bg-gray-200 w-20 h-15 px-3 py-2 rounded-lg text-center">
                <p className="text-lg font-semibold">{item.date.split(" ")[0]}</p>
                <p className="text-sm">{item.date.split(" ")[1]}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.time}</p>
                <p className="font-medium">{item.patient}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Issue: {item.issue}</p>
              <button className="text-blue-600 text-sm"><u>View Documents</u></button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  