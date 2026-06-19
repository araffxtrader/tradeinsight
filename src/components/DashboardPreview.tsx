"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign, BarChart3, PieChart, Activity } from "lucide-react";

const trades = [
  { pair: "EUR/USD", type: "BUY", pnl: "+$1,247.50", win: true, time: "14:32" },
  { pair: "GBP/JPY", type: "SELL", pnl: "+$892.30", win: true, time: "13:15" },
  { pair: "XAU/USD", type: "BUY", pnl: "-$324.10", win: false, time: "11:48" },
  { pair: "USD/CAD", type: "SELL", pnl: "+$1,089.75", win: true, time: "10:22" },
  { pair: "BTC/USD", type: "BUY", pnl: "+$2,156.00", win: true, time: "09:05" },
];

const chartBars = [65, 45, 78, 52, 88, 72, 95, 68, 82, 91, 76, 84];

function MiniChart() {
  return (
    <div className="flex items-end gap-1 h-16">
      {chartBars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
          className={`w-full rounded-sm ${i >= chartBars.length - 3 ? "bg-primary" : "bg-primary/30"}`}
        />
      ))}
    </div>
  );
}

function DonutChart() {
  return (
    <div className="relative h-20 w-20">
      <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
        <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3" className="text-border" />
        <motion.circle
          cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3"
          className="text-success"
          strokeDasharray="65 100"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3"
          className="text-primary"
          strokeDasharray="25 100"
          strokeDashoffset="-65"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3"
          className="text-warning"
          strokeDasharray="10 100"
          strokeDashoffset="-90"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-foreground">72%</span>
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 blur-2xl opacity-50" />

      <div className="relative rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-2xl shadow-primary/5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <div className="h-3 w-3 rounded-full bg-warning" />
            <div className="h-3 w-3 rounded-full bg-success" />
          </div>
          <span className="text-xs text-muted-foreground">TradeVault Dashboard</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {[
            { label: "Total P&L", value: "$12,847", icon: DollarSign, color: "text-success" },
            { label: "Win Rate", value: "72.4%", icon: TrendingUp, color: "text-primary" },
            { label: "Trades", value: "284", icon: BarChart3, color: "text-amber-500" },
            { label: "Sharpe", value: "2.14", icon: Activity, color: "text-purple-500" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-border bg-background/50 p-3"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <stat.icon className={`h-3.5 w-3.5 ${stat.color}`} />
                <span className="text-[10px] text-muted-foreground">{stat.label}</span>
              </div>
              <span className="text-sm font-bold text-foreground">{stat.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-xl border border-border bg-background/50 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-foreground">Performance</span>
              <span className="text-[10px] text-muted-foreground">Last 12 trades</span>
            </div>
            <MiniChart />
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-border bg-background/50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-foreground">Win/Loss</span>
                <DonutChart />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background/50 p-3">
              <div className="flex items-center gap-1.5 mb-2">
                <PieChart className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold text-foreground">Risk Score</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "35%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full bg-success"
                  />
                </div>
                <span className="text-[10px] font-medium text-success">Low</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border bg-background/50 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-foreground">Recent Trades</span>
            <span className="text-[10px] text-muted-foreground">Live</span>
          </div>
          <div className="space-y-2">
            {trades.map((trade, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center justify-between rounded-lg bg-background/50 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-6 w-6 items-center justify-center rounded-md ${trade.win ? "bg-success/10" : "bg-destructive/10"}`}>
                    {trade.win ? (
                      <TrendingUp className="h-3 w-3 text-success" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-destructive" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-foreground">{trade.pair}</span>
                    <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded font-medium ${trade.type === "BUY" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                      {trade.type}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-bold ${trade.win ? "text-success" : "text-destructive"}`}>{trade.pnl}</span>
                  <span className="ml-2 text-[10px] text-muted-foreground">{trade.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
