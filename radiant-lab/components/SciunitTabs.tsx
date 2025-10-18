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
  Cpu,
  Shuffle,
  ArrowRight,
} from "lucide-react";

const tabData = [
  {
    id: "background",
    title: "Background & Pain Points",
    content: (
      <div className="space-y-3 text-black/80">
        <h3 className="text-lg font-semibold">
          Reusable research objects, without the pain
        </h3>
        <p className="text-black/70 text-sm">
          Why zipping code + data isn’t enough
        </p>
        <ul className="list-disc pl-5 text-sm leading-relaxed">
          <li>Environments drift: dependencies change or disappear over time.</li>
          <li>Bundles rarely capture binaries, OS libraries, and execution order.</li>
          <li>
            Provenance is often missing or too raw to navigate, making reruns
            difficult.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "what",
    title: "What is Sciunit?",
    content: (
      <>
        <h3 className="text-lg font-semibold text-black/90 mb-1">
          What is Sciunit?
        </h3>
        <p className="text-black/70 text-sm mb-4">
          Executable research objects with embedded provenance
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <Box className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">
                Application Virtualization
              </h4>
            </div>
            <p className="text-sm text-black/70">
              Traces system calls while a run executes to capture the concrete
              runtime: binaries, libraries, scripts, environment variables, and
              optionally input data.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <Database className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">Provenance Graph</h4>
            </div>
            <p className="text-sm text-black/70">
              Builds process↔file lineage during execution and summarizes it so
              users can understand dependencies and carve out slices.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <Layers className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">
                Content-Deduplicated Storage
              </h4>
            </div>
            <p className="text-sm text-black/70">
              Stores versions using content-defined chunking so repeated or
              shared blocks across runs don’t duplicate on disk.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "solve",
    title: "How it Solves It",
    content: (
      <>
        <h3 className="text-lg font-semibold text-black/90 mb-1">
          How Sciunit addresses reproducibility
        </h3>
        <p className="text-black/70 text-sm mb-4">
          Stable runtime, navigable lineage, flexible re-execution
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <Cpu className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">Stable Re-execution</h4>
            </div>
            <p className="text-sm text-black/70">
              Replays inside the captured sandbox—same binaries, libraries, and
              environment—so no manual re-installs are required.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <Shuffle className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">
                Exact / Partial / Modified
              </h4>
            </div>
            <p className="text-sm text-black/70">
              Repeat the full run, re-execute a selected slice defined by
              provenance, or modify code/configs and run again as a new version.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <Cloud className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">Local or Remote</h4>
            </div>
            <p className="text-sm text-black/70">
              Runs on the originating machine or on compatible remote hosts,
              with results returned to the user.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "modes",
    title: "Three Modes",
    content: (
      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="flex items-center gap-2 mb-1">
            <Play className="h-5 w-5 text-black/70" />
            <h4 className="font-semibold text-black/80">As-is (Exact Repeat)</h4>
          </div>
          {/* <p className="text-xs text-black/60 mb-1">Learn by doing in the Try-It lab</p> */}
          <ul className="list-disc pl-5 text-sm text-black/70 leading-snug">
            <li>Reproduce the original execution faithfully.</li>
            <li>Useful for audits, reviews, and archival reruns.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="flex items-center gap-2 mb-1">
            <Scissors className="h-5 w-5 text-black/70" />
            <h4 className="font-semibold text-black/80">
              Smaller Part (Partial Repeat)
            </h4>
          </div>
          {/* Commented out */}
          {/* <p className="text-xs text-black/60 mb-1">Learn by doing in the Try-It lab</p> */}
          <p className="text-sm text-black/70">
            Select a subset of steps derived from the provenance graph. Sciunit
            auto-includes the necessary ancestors and files.
          </p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="flex items-center gap-2 mb-1">
            <Wrench className="h-5 w-5 text-black/70" />
            <h4 className="font-semibold text-black/80">Modify & Rerun</h4>
          </div>
          {/* Commented out */}
          {/* <p className="text-xs text-black/60 mb-1">Learn by doing in the Try-It lab</p> */}
          <p className="text-sm text-black/70">
            Change scripts/configuration and re-execute in the captured runtime.
            Results are tracked as a new, deduplicated version.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "hello",
    title: "Hello World Example",
    content: (
      <>
        <h3 className="text-lg font-semibold text-black/90 mb-1">
          “Hello, Sciunit” — tiny example
        </h3>
        <p className="text-black/70 text-sm mb-4">
          Package → Repeat in under a minute
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <h4 className="font-mono text-sm mb-1">hello.py</h4>
            <p className="text-xs text-black/60 mb-2">Minimal script</p>
            <pre className="bg-gray-100 rounded-lg p-3 text-sm overflow-x-auto">
{`print("hello sciunit")`}
            </pre>
          </div>

          <div className="space-y-2 text-sm text-black/80">
            <p>
              <strong>Step 1:</strong> Run your script under Sciunit to capture the run:
            </p>
            <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
{`scu package --cmd "python hello.py" --name hello-sciunit`}
            </pre>
            <p>
              <strong>Step 2:</strong> Repeat it anywhere compatible (same output, no setup):
            </p>
            <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
{`scu repeat hello-sciunit`}
            </pre>
            <p className="text-xs text-black/60">
              Tip: add <code>--include data/*.csv</code> to freeze inputs or omit to refetch live data.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-black/10 bg-white p-3">
            <div className="flex items-center gap-2">
              <Box className="h-4 w-4 text-black/70" />
              <p className="text-sm font-semibold text-black/80">Code + Env</p>
            </div>
            <p className="text-xs text-black/60">Captured</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-3">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-black/70" />
              <p className="text-sm font-semibold text-black/80">Process↔File</p>
            </div>
            <p className="text-xs text-black/60">Provenance</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-3">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-black/70" />
              <p className="text-sm font-semibold text-black/80">
                Exact / Partial / Modified
              </p>
            </div>
            <p className="text-xs text-black/60">Repeat</p>
          </div>
        </div>
      </>
    ),
  },
];

export default function SciunitTabs() {
  const [activeTab, setActiveTab] = useState("background");

  return (
    <section
      id="sciunit-tabs"
      className="w-full max-w-6xl mx-auto bg-white rounded-2xl p-6 mt-8 ring-1 ring-black/10"
    >
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex flex-wrap justify-center bg-white ring-1 ring-black/10 rounded-xl p-1 w-full">
          {tabData.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                "data-[state=active]:bg-[#F1B82D] data-[state=active]:text-black"
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
              className="rounded-2xl bg-white ring-1 ring-black/10 px-6 pt-5 pb-4"
            >
              {tabData.find((t) => t.id === activeTab)?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </section>
  );
}
