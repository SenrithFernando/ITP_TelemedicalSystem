import PrescriptionCard from "./PrescriptionCard";

export default function PrescriptionsUI() {
  const prescriptions = [
    { date: { day: "Thu", number: "15", time: "09:00am - 09:30am" }, doctor: "Stephine Claire", issue: "Fever" },
    { date: { day: "Fri", number: "16", time: "09:00am - 09:30am" }, doctor: "Stephine Claire", issue: "Fever" },
    { date: { day: "Mon", number: "19", time: "09:00am - 09:30am" }, doctor: "Stephine Claire", issue: "-" }
  ];

  return (
    <div className="flex justify-between p-6">
      {/* Left Side: Previous Prescriptions */}
      <div className="w-3/5">
        <h2 className="text-lg font-semibold mb-4">Previous Prescriptions</h2>
        <div className="space-y-4">
          {prescriptions.map((prescription, index) => (
            <PrescriptionCard key={index} date={prescription.date} doctor={prescription.doctor} issue={prescription.issue} />
          ))}
        </div>
      </div>

      {/* Right Side: Add Prescriptions Button */}
      <div className="flex flex-col items-center">
        <PrescriptionCard addButton />
      </div>
    </div>
  );
}