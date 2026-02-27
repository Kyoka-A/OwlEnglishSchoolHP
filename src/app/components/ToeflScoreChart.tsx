"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { date: "25年11月①", score: 75 },
  { date: "25年11月②", score: 76 },
  { date: "25年12月①", score: 82 },
  { date: "25年12月②", score: 92 },
];

const CustomTooltip = ({ active, payload, label }: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #EAE6DF",
          padding: "10px 14px",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.75rem",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        }}
      >
        <p style={{ color: "#8FA3AD", marginBottom: "6px", letterSpacing: "0.08em" }}>{label}</p>
        {payload.map((p) => (
          <p key={p.name} style={{ color: p.color, margin: "2px 0", letterSpacing: "0.06em" }}>
            {p.name === "score" ? "受験スコア" : "MyBest"}: <strong>{p.value}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ToeflScoreChart() {
  return (
    <div style={{ width: "100%", fontFamily: "'Montserrat', sans-serif" }}>
      {/* Score badges */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <p style={{ fontSize: "0.65rem", color: "#8FA3AD", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>
            受講開始
          </p>
          <p style={{ fontSize: "1.75rem", fontWeight: 300, color: "#4A4A4A", lineHeight: 1 }}>
            75 <span style={{ fontSize: "0.75rem", color: "#8FA3AD" }}>点</span>
          </p>
        </div>
        <div style={{ textAlign: "center", color: "#9CA795", fontSize: "1.5rem", fontWeight: 200 }}>→</div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "0.65rem", color: "#1A4A52", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>
            MyBest
          </p>
          <p style={{ fontSize: "1.75rem", fontWeight: 600, color: "#1A4A52", lineHeight: 1 }}>
            92 <span style={{ fontSize: "0.75rem", fontWeight: 400 }}>点</span>
          </p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 8, right: 16, left: -20, bottom: 36 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#EAE6DF" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 9, fill: "#8FA3AD", fontFamily: "'Montserrat', sans-serif" }}
            axisLine={{ stroke: "#EAE6DF" }}
            tickLine={false}
            interval={0}
            angle={-40}
            textAnchor="end"
            dy={4}
          />
          <YAxis
            domain={[70, 100]}
            tick={{ fontSize: 10, fill: "#8FA3AD", fontFamily: "'Montserrat', sans-serif" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={92} stroke="#1A4A52" strokeDasharray="4 4" strokeOpacity={0.3} />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#1A4A52"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#1A4A52", strokeWidth: 0 }}
            activeDot={{ r: 6 }}
            name="score"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 mt-3">
        <span style={{ display: "block", width: "20px", height: "2.5px", backgroundColor: "#1A4A52" }} />
        <span style={{ fontSize: "0.65rem", color: "#8FA3AD", letterSpacing: "0.1em", fontFamily: "'Montserrat', sans-serif" }}>
          受験スコア推移
        </span>
      </div>
    </div>
  );
}
