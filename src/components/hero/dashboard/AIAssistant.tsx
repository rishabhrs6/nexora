"use client";

import { motion } from "framer-motion";
import { Bot, Mic, Calendar, MessageSquare } from "lucide-react";

export default function AIAssistant() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-[#0F172A] p-5"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">
          <Bot className="text-cyan-400" size={24} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            AI Receptionist
          </h3>
          <p className="text-sm text-gray-400">
            Online • Handling patient conversations
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
          <div className="flex items-center gap-3">
            <MessageSquare className="text-cyan-400" size={18} />
            <span className="text-sm text-gray-300">
              WhatsApp Replies
            </span>
          </div>

          <span className="font-semibold text-white">247</span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
          <div className="flex items-center gap-3">
            <Calendar className="text-cyan-400" size={18} />
            <span className="text-sm text-gray-300">
              Appointments Today
            </span>
          </div>

          <span className="font-semibold text-white">18</span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
          <div className="flex items-center gap-3">
            <Mic className="text-cyan-400" size={18} />
            <span className="text-sm text-gray-300">
              Voice Calls Answered
            </span>
          </div>

          <span className="font-semibold text-white">42</span>
        </div>
      </div>
    </motion.div>
  );
}