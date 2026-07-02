"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const schedule = [
  {
    time: "09:30",
    patient: "Rahul Sharma",
    treatment: "Root Canal",
    live: false,
  },
  {
    time: "11:00",
    patient: "Priya Gupta",
    treatment: "Teeth Whitening",
    live: true,
  },
  {
    time: "02:30",
    patient: "Ankit Verma",
    treatment: "Dental Implant",
    live: false,
  },
  {
    time: "04:00",
    patient: "Neha Singh",
    treatment: "Follow-up",
    live: false,
  },
];

export default function Schedule() {
  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-cyan-400">
            Today's Schedule
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            Appointments
          </h3>

        </div>

        <div className="rounded-2xl bg-cyan-500/15 p-3">

          <CalendarDays
            size={24}
            className="text-cyan-400"
          />

        </div>

      </div>

      {/* Timeline */}

      <div className="mt-8 space-y-5">

        {schedule.map((item, index) => (

          <motion.div
            key={item.time}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className={`rounded-2xl border p-4 transition ${
              item.live
                ? "border-cyan-400/40 bg-cyan-500/10"
                : "border-white/5 bg-black/20"
            }`}
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-400">
                  {item.time}
                </p>

                <h4 className="mt-1 font-bold text-white">
                  {item.patient}
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  {item.treatment}
                </p>

              </div>

              {item.live && (

                <span className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                  LIVE

                </span>

              )}

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}