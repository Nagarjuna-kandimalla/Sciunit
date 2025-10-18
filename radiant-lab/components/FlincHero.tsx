"use client";

import { Rocket, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const GOLD = "#F1B82D"; // Mizzou gold

export default function FlincHero() {
  return (
    <section className="pt-10 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid items-start gap-8 md:grid-cols-2 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* ---- LEFT CONTENT ---- */}
        <div>
          <Badge
            className="ring-1"
            style={{
              backgroundColor: GOLD,
              color: "black",
              borderColor: "rgba(0,0,0,0.1)",
            }}
          >
            FLINC • Reproducible Notebooks
          </Badge>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Reproducible notebooks <br /> with{" "}
            <span style={{ color: GOLD }}>FLINC</span>
          </h2>

          <p className="mt-4 max-w-xl text-black/70">
            FLINC integrates Sciunit into Jupyter via two dedicated kernels. Use
            the <strong>Audit</strong> kernel to capture your notebook’s exact
            runtime (code, libraries, binaries), then switch to the{" "}
            <strong>Repeat</strong> kernel to re-execute reliably—on the same
            machine or another one.
          </p>
        </div>

        {/* ---- RIGHT CONTENT ---- */}
        <div className="flex flex-col items-end gap-4">
          {/* Quickstart Button */}
          <Button
            className="gap-2 self-end"
            style={{ backgroundColor: GOLD, color: "black" }}
          >
            <Rocket className="h-4 w-4" /> Try Quickstart
          </Button>

          {/* Video Placeholder */}
          <div className="group relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-black/10 bg-black/5 flex items-center justify-center">
            <button className="inline-flex items-center gap-3 rounded-full px-5 py-3 ring-1 ring-black/20 transition hover:bg-black/5">
              <Play className="h-5 w-5" />
              <span>Play FLINC Overview</span>
            </button>
          </div>

          {/* Subtext */}
          <p className="text-xs text-black/60">
            Watch the player for a quick understanding of FLINC.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
