"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Play,
  Scissors,
  Wrench,
  Box,
  Database,
  Layers,
  Cloud,
  Repeat,
} from "lucide-react";

const tabData = [
  {
    id: "background",
    title: "Background & Pain Points",
    content: (
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900">
          Reusable research objects, without the pain
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          Why zipping code + data isn’t enough
        </p>
        <ul className="list-disc pl-6 text-gray-700 text-sm leading-relaxed">
          <li>
            Bundles get stale as data sources change; recreating the environment
            is error-prone.
          </li>
          <li>
            Colleagues can’t easily re-run, slice, or tweak steps without
            dependency hunts.
          </li>
          <li>
            Provenance (what used what, when) is either missing or too detailed
            to be useful.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "what",
    title: "What is Sciunit?",
    content: (
      <div className="grid md:grid-cols-3 gap-3">
        <div className="border rounded-lg p-4 bg-white">
          <Box className="w-5 h-5 mb-2 text-gray-800" />
          <h4 className="font-semibold text-gray-900 text-sm">
            Application Virtualization
          </h4>
          <p className="text-gray-700 text-sm mt-1 leading-snug">
            Intercept system calls during a run to capture binaries, libraries,
            scripts, env vars, and optional data.
          </p>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <Database className="w-5 h-5 mb-2 text-gray-800" />
          <h4 className="font-semibold text-gray-900 text-sm">
            Provenance Graph
          </h4>
          <p className="text-gray-700 text-sm mt-1 leading-snug">
            Process↔file lineage is recorded and summarized so humans can
            navigate and pick slices.
          </p>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <Layers className="w-5 h-5 mb-2 text-gray-800" />
          <h4 className="font-semibold text-gray-900 text-sm">
            Deduplicated Versions
          </h4>
          <p className="text-gray-700 text-sm mt-1 leading-snug">
            Store many versions cheaply via content-defined chunking (shared
            blocks across runs).
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how",
    title: "How it Solves It",
    content: (
      <div className="grid md:grid-cols-3 gap-3">
        <div className="border rounded-lg p-4 bg-white">
          <Wrench className="w-5 h-5 mb-2 text-gray-800" />
          <h4 className="font-semibold text-gray-900 text-sm">
            Stable Runtime
          </h4>
          <p className="text-gray-700 text-sm leading-snug">
            Runs inside a captured sandbox—same binaries, libs, env—no manual
            re-installs.
          </p>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <Repeat className="w-5 h-5 mb-2 text-gray-800" />
          <h4 className="font-semibold text-gray-900 text-sm">
            Repeat Any Way
          </h4>
          <p className="text-gray-700 text-sm leading-snug">
            Exact repeat, slice part, or modify and rerun—guided by provenance.
          </p>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <Cloud className="w-5 h-5 mb-2 text-gray-800" />
          <h4 className="font-semibold text-gray-900 text-sm">
            Local & Remote
          </h4>
          <p className="text-gray-700 text-sm leading-snug">
            Run on your laptop or send to a compatible remote server; results
            come back to you.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "modes",
    title: "Three Modes",
    content: (
      <div className="grid md:grid-cols-3 gap-3">
        <div className="border rounded-lg p-4 bg-white">
          <Play className="w-5 h-5 mb-2 text-gray-800" />
          <h4 className="font-semibold text-gray-900 text-sm">
            As-is (Exact Repeat)
          </h4>
          <p className="text-gray-700 text-sm leading-snug">
            Reproduce the original run exactly — great for audits & papers.
          </p>
          <ul className="list-disc pl-4 mt-2 text-sm text-gray-700 leading-snug">
            <li>Reproduce original run exactly</li>
            <li>Optional: freeze inputs</li>
          </ul>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <Scissors className="w-5 h-5 mb-2 text-gray-800" />
          <h4 className="font-semibold text-gray-900 text-sm">
            Smaller Part (Partial Repeat)
          </h4>
          <p className="text-gray-700 text-sm leading-snug">
            Pick one or more steps to rerun; auto-includes required ancestors.
          </p>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <Wrench className="w-5 h-5 mb-2 text-gray-800" />
          <h4 className="font-semibold text-gray-900 text-sm">
            Modify & Rerun
          </h4>
          <p className="text-gray-700 text-sm leading-snug">
            Edit configs and re-execute; compare outputs across versions.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "hello",
    title: "Hello World Example",
    content: (
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border rounded-xl p-4 bg-white shadow-sm">
          <h4 className="font-mono text-sm mb-2">hello.py</h4>
          <pre className="bg-gray-100 rounded-lg p-3 text-sm overflow-x-auto">
{`print("hello sciunit")`}
          </pre>
        </div>
        <div className="space-y-3 text-sm text-gray-800">
          <h4 className="font-semibold">Run your script under Sciunit:</h4>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
{`scu package --cmd "python hello.py" --name hello-sciunit`}
          </pre>
          <h4 className="font-semibold mt-3">Repeat it anywhere:</h4>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
{`scu repeat hello-sciunit`}
          </pre>
        </div>
      </div>
    ),
  },
];

export default function SciunitTabs() {
  const [activeTab, setActiveTab] = useState("background");

  return (
    <section
      id="sciunit-tabs"
      className="w-full max-w-6xl mx-auto bg-gray-50 rounded-2xl p-6 mt-6 shadow-sm"
    >
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex flex-wrap justify-center bg-white border rounded-lg p-1 shadow-sm w-full">
          {tabData.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                "data-[state=active]:bg-[#F1B82D] data-[state=active]:text-black data-[state=active]:shadow-sm"
              )}
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="border rounded-2xl bg-white px-5 pt-4 pb-0 min-h-[200px]"
            >
              {tabData.find((t) => t.id === activeTab)?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </section>
  );
}
