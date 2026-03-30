"use client"

import { useState } from "react";
import { ComicPanel, SpeechBubble } from "@repo/ui/patterns"
import {
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Activity,
} from "lucide-react";

const tasks = [
  { id: 1, text: "Deploy v2.4 to production", status: "done", priority: "high" },
  { id: 2, text: "Review pull request #847", status: "active", priority: "medium" },
  { id: 3, text: "Fix auth token expiry bug", status: "active", priority: "high" },
  { id: 4, text: "Update API documentation", status: "pending", priority: "low" },
  { id: 5, text: "Database migration script", status: "pending", priority: "medium" },
];

const stats = [
  { label: "VISITORS", value: "12,847", change: "+14%", up: true },
  { label: "REVENUE", value: "$48.2K", change: "+8%", up: true },
  { label: "ERRORS", value: "23", change: "-31%", up: false },
  { label: "UPTIME", value: "99.97%", change: "+0.02%", up: true },
];

const activityFeed = [
  { time: "2m ago", text: "Server CPU spike detected", type: "warning" },
  { time: "8m ago", text: "User 'jake' deployed build #1204", type: "success" },
  { time: "15m ago", text: "New signup: enterprise tier", type: "info" },
  { time: "1h ago", text: "Backup completed successfully", type: "success" },
  { time: "2h ago", text: "SSL certificate renewed", type: "info" },
];

const sparkData = [3, 7, 4, 8, 5, 9, 6, 10, 7, 12, 8, 11];

function HandDrawnLine({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-full h-1 ${className}`} viewBox="0 0 400 4" preserveAspectRatio="none">
      <path d="M0 2 C 40 0.5, 80 3.5, 120 2 C 160 0.5, 200 3.5, 240 2 C 280 0.5, 320 3, 360 1.5 C 380 2.5, 395 1, 400 2" stroke="black" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function Sparkline({ data, color = "black" }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 120;
  const h = 30;
  const points = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`).join(" ");
  return (
    <svg width={w} height={h} className="inline-block">
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function StatusIcon({ status }: { status: string }) {
  if (status === "done") return <CheckCircle size={16} className="text-black" />;
  if (status === "active") return <Zap size={16} className="text-black" />;
  return <Clock size={16} className="text-black opacity-40" />;
}

export default function App() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f5f0e8] p-4 md:p-6 lg:p-8" style={{
      backgroundImage: `
        repeating-linear-gradient(transparent, transparent 27px, rgba(170,190,210,0.2) 27px, rgba(170,190,210,0.2) 28px),
        url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.03'%3E%3Cpath d='M3 0L3 6'/%3E%3C/g%3E%3C/svg%3E")
      `,
    }}>
      {/* HEADER - Comic Title Banner */}
      <div className="mb-6 border-[4px] border-black bg-black text-white p-4 relative" style={{ boxShadow: "6px 6px 0 rgba(0,0,0,0.3)" }}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="font-['Bangers',cursive] tracking-[0.15em] text-white" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
              MISSION CONTROL
            </h1>
            <p className="font-['Patrick_Hand',cursive] text-gray-300 mt-1" style={{ fontSize: "1rem" }}>
              Chapter 47: "The Dashboard Awakens" — March 27, 2026
            </p>
          </div>
          <SpeechBubble variant="speech" direction="left">
            <span className="font-['Patrick_Hand',cursive]" style={{ fontSize: "0.85rem" }}>
              All systems<br /><strong>OPERATIONAL!</strong>
            </span>
          </SpeechBubble>
        </div>
      </div>

      {/* NARRATOR BOX */}
      <div className="mb-5 border-2 border-black bg-white px-4 py-2 inline-block" style={{ boxShadow: "3px 3px 0 black" }}>
        <p className="font-['Special_Elite',monospace] text-black italic" style={{ fontSize: "0.85rem" }}>
          <strong>MEANWHILE,</strong> at the operations center, the team monitors the vital signs of the system...
        </p>
      </div>

      {/* STATS ROW - Comic panels */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-5">
        {stats.map((stat, i) => (
          <ComicPanel
            key={stat.label}
            className="cursor-pointer transition-transform hover:-translate-y-1"
            borderWidth={hoveredStat === i ? 4 : 3}
            title={stat.label}
          >
            <div
              className="p-3 md:p-4"
              onMouseEnter={() => setHoveredStat(i)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="flex items-end justify-between">
                <span className="font-['Bangers',cursive] text-black" style={{ fontSize: "2rem", lineHeight: 1 }}>
                  {stat.value}
                </span>
                {stat.up ? <TrendingUp size={20} className="text-black" /> : <TrendingDown size={20} className="text-black" />}
              </div>
              <div className="mt-2">
                <Sparkline data={sparkData.map((d, j) => d + i * 2 + (stat.up ? j : -j * 0.3))} />
              </div>
              <HandDrawnLine className="mt-2" />
              <div className="mt-1 flex items-center gap-1">
                <span className="font-['Patrick_Hand',cursive] text-black" style={{ fontSize: "0.95rem" }}>
                  {stat.change}
                </span>
                <span className="font-['Special_Elite',monospace] text-black opacity-50" style={{ fontSize: "0.7rem" }}>
                  vs last week
                </span>
              </div>
            </div>
          </ComicPanel>
        ))}
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 mb-5">
        {/* TASK LIST - Big panel */}
        <ComicPanel className="lg:col-span-2" notebookLines title="QUEST LOG">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <SpeechBubble variant="thought">
                <span className="font-['Patrick_Hand',cursive]" style={{ fontSize: "0.8rem" }}>
                  What should I<br />tackle first...?
                </span>
              </SpeechBubble>
            </div>
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-3 py-2.5 border-b border-dashed border-black/20 last:border-0 group"
              >
                <StatusIcon status={task.status} />
                <span
                  className={`flex-1 font-['Special_Elite',monospace] ${
                    task.status === "done" ? "line-through opacity-40" : "text-black"
                  }`}
                  style={{ fontSize: "0.9rem" }}
                >
                  {task.text}
                </span>
                <span
                  className={`font-['Bangers',cursive] px-2 py-0.5 border border-black text-[0.7rem] tracking-wider ${
                    task.priority === "high"
                      ? "bg-black text-white"
                      : task.priority === "medium"
                      ? "bg-white text-black"
                      : "bg-white text-black opacity-50"
                  }`}
                >
                  {task.priority.toUpperCase()}
                </span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-black" />
              </div>
            ))}
          </div>
        </ComicPanel>

        {/* ACTIVITY FEED - Side panel */}
        <ComicPanel title="DISPATCHES" notebookLines>
          <div className="p-3">
            {activityFeed.map((item, i) => (
              <div key={i} className="flex gap-2 py-2 border-b border-dotted border-black/15 last:border-0">
                <div className="mt-0.5">
                  {item.type === "warning" ? (
                    <AlertTriangle size={14} className="text-black" />
                  ) : item.type === "success" ? (
                    <CheckCircle size={14} className="text-black" />
                  ) : (
                    <Star size={14} className="text-black opacity-50" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-['Special_Elite',monospace] text-black truncate" style={{ fontSize: "0.8rem" }}>
                    {item.text}
                  </p>
                  <span className="font-['Patrick_Hand',cursive] text-black/40" style={{ fontSize: "0.75rem" }}>
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-3 text-center">
              <SpeechBubble variant="shout">
                <span className="font-['Bangers',cursive] tracking-wider" style={{ fontSize: "0.85rem" }}>
                  STAY ALERT!
                </span>
              </SpeechBubble>
            </div>
          </div>
        </ComicPanel>
      </div>

      {/* BOTTOM ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-5">
        {/* PERFORMANCE CHART */}
        <ComicPanel title="POWER LEVELS">
          <div className="p-4">
            <div className="space-y-3">
              {[
                { label: "CPU", value: 67 },
                { label: "RAM", value: 43 },
                { label: "DISK", value: 81 },
                { label: "NET", value: 29 },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between mb-1">
                    <span className="font-['Bangers',cursive] tracking-wider text-black" style={{ fontSize: "0.85rem" }}>
                      {metric.label}
                    </span>
                    <span className="font-['Special_Elite',monospace] text-black" style={{ fontSize: "0.8rem" }}>
                      {metric.value}%
                    </span>
                  </div>
                  <div className="h-4 border-2 border-black bg-white relative">
                    <div
                      className="h-full bg-black transition-all"
                      style={{
                        width: `${metric.value}%`,
                        backgroundImage: metric.value > 70
                          ? "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 6px)"
                          : "none",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ComicPanel>

        {/* TEAM ROSTER */}
        <ComicPanel title="THE CREW" notebookLines>
          <div className="p-4 space-y-3">
            {[
              { name: "Commander Ada", role: "Lead Engineer", active: true },
              { name: "Agent Brooks", role: "DevOps", active: true },
              { name: "Oracle Chen", role: "Data Analyst", active: false },
              { name: "Scout Davis", role: "Frontend", active: true },
            ].map((member) => (
              <div key={member.name} className="flex items-center gap-3">
                <div className={`w-8 h-8 border-2 border-black flex items-center justify-center ${member.active ? "bg-black" : "bg-white"}`}>
                  <Users size={14} className={member.active ? "text-white" : "text-black"} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-['Bangers',cursive] tracking-wide text-black truncate" style={{ fontSize: "0.95rem" }}>
                    {member.name}
                  </p>
                  <p className="font-['Patrick_Hand',cursive] text-black/50" style={{ fontSize: "0.75rem" }}>
                    {member.role}
                  </p>
                </div>
                <div className={`w-2.5 h-2.5 rounded-full border-2 border-black ${member.active ? "bg-black" : "bg-white"}`} />
              </div>
            ))}
          </div>
        </ComicPanel>

        {/* INCIDENT LOG */}
        <ComicPanel title="!! ALERTS !!">
          <div className="p-4">
            <div className="border-2 border-black p-3 mb-3 bg-white relative" style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(0,0,0,0.03) 8px, rgba(0,0,0,0.03) 16px)",
            }}>
              <div className="flex items-start gap-2">
                <AlertTriangle size={18} className="text-black flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-['Bangers',cursive] text-black tracking-wider" style={{ fontSize: "1rem" }}>
                    CPU SPIKE DETECTED!
                  </p>
                  <p className="font-['Special_Elite',monospace] text-black/60 mt-1" style={{ fontSize: "0.75rem" }}>
                    Server node-03 exceeded 90% threshold at 14:23 UTC
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 border-black border-dashed p-3 bg-white">
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-black opacity-40" />
                <p className="font-['Patrick_Hand',cursive] text-black/50" style={{ fontSize: "0.85rem" }}>
                  No other incidents. The city sleeps...
                </p>
              </div>
            </div>
            <div className="mt-4">
              <SpeechBubble direction="right">
                <span className="font-['Patrick_Hand',cursive]" style={{ fontSize: "0.8rem" }}>
                  Keep your eyes<br />on node-03!
                </span>
              </SpeechBubble>
            </div>
          </div>
        </ComicPanel>
      </div>

      {/* FOOTER NARRATOR */}
      <div className="border-t-[3px] border-black pt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="font-['Special_Elite',monospace] text-black/50 italic" style={{ fontSize: "0.75rem" }}>
          TO BE CONTINUED... in the next sprint cycle
        </p>
        <div className="font-['Bangers',cursive] text-black tracking-[0.2em] flex items-center gap-2" style={{ fontSize: "0.85rem" }}>
          <span className="opacity-40">PAGE 47 OF 52</span>
          <ArrowRight size={14} className="text-black opacity-40" />
        </div>
      </div>
    </div>
  );
}
