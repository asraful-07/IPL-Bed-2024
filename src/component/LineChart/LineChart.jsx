import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChart = () => {
  const students = [
    { id: 1, name: "Ayaan", marks: { Math: 78, Science: 85, English: 90 } },
    { id: 2, name: "Zara", marks: { Math: 85, Science: 88, English: 82 } },
    { id: 3, name: "Ibrahim", marks: { Math: 92, Science: 91, English: 95 } },
    { id: 4, name: "Maya", marks: { Math: 76, Science: 80, English: 78 } },
    { id: 5, name: "Arjun", marks: { Math: 88, Science: 86, English: 84 } },
    { id: 6, name: "Leah", marks: { Math: 90, Science: 89, English: 92 } },
    { id: 7, name: "Rohan", marks: { Math: 79, Science: 75, English: 80 } },
    { id: 8, name: "Sana", marks: { Math: 83, Science: 82, English: 85 } },
    { id: 9, name: "Kabir", marks: { Math: 91, Science: 94, English: 93 } },
    { id: 10, name: "Meera", marks: { Math: 87, Science: 90, English: 88 } },
  ];

  // Transform data for the chart
  const chartData = students.map((student) => ({
    name: student.name,
    Math: student.marks.Math,
    Science: student.marks.Science,
    English: student.marks.English,
  }));

  return (
    <div>
      <h1>Student Marks Line Chart</h1>
      <LChart width={600} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Math" stroke="#8884d8" />
        <Line type="monotone" dataKey="Science" stroke="#82ca9d" />
        <Line type="monotone" dataKey="English" stroke="#ffc658" />
      </LChart>
    </div>
  );
};

export default LineChart;
