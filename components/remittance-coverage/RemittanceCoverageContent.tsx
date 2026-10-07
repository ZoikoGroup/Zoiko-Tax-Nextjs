"use client";

import React, { useState, useMemo } from "react";
import HeroSection from "./HeroSection";
import DirectAnswerSection from "./DirectAnswerSection";
import CoverageFinderSection from "./CoverageFinderSection";
import CurrentCoverageResultsSection from "./CurrentCoverageResultsSection";
import SelectedMarketDetailSection from "./SelectedMarketDetailSection";
import HowRemittanceFitsSection from "./HowRemittanceFitsSection";
import StatusSemanticsSection from "./StatusSemanticsSection";
import CapabilityBoundaryMatrixSection from "./CapabilityBoundaryMatrixSection";
import ProofCrosslinksSection from "./ProofCrosslinksSection";
import FAQSection from "./FAQSection";
import ConversionBandSection from "./ConversionBandSection";
import { REMITTANCE_SPECIMEN_RECORDS, RemittanceRecord } from "./types";

export default function RemittanceCoverageContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Governed status");
  const [scopeFilter, setScopeFilter] = useState("Controlled scope");
  const [sortOrder, setSortOrder] = useState("Sort: Identity A–Z");
  const [selectedRecord, setSelectedRecord] = useState<RemittanceRecord>(
    REMITTANCE_SPECIMEN_RECORDS[0]
  );

  const filteredRecords = useMemo(() => {
    const result = REMITTANCE_SPECIMEN_RECORDS.filter((rec) => {
      // Search text filter
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const matchesName = rec.market.toLowerCase().includes(query);
        const matchesScope = rec.controlledScope.toLowerCase().includes(query);
        const matchesState = rec.currentState.toLowerCase().includes(query);
        if (!matchesName && !matchesScope && !matchesState) return false;
      }

      // Governed status filter
      if (statusFilter !== "Governed status") {
        if (rec.currentState.toLowerCase() !== statusFilter.toLowerCase()) {
          return false;
        }
      }

      // Controlled scope filter
      if (scopeFilter !== "Controlled scope") {
        if (scopeFilter === "stated" && rec.controlledScope.includes("Omitted")) {
          return false;
        }
        if (scopeFilter === "unknown" && !rec.controlledScope.includes("unknown")) {
          return false;
        }
        if (scopeFilter === "conflict" && !rec.controlledScope.includes("conflict")) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    if (sortOrder === "Sort: Identity A–Z") {
      result.sort((a, b) => a.market.localeCompare(b.market));
    } else if (sortOrder === "Sort: Identity Z–A") {
      result.sort((a, b) => b.market.localeCompare(a.market));
    } else if (sortOrder === "Sort: Status") {
      result.sort((a, b) => a.currentState.localeCompare(b.currentState));
    }

    return result;
  }, [searchTerm, statusFilter, scopeFilter, sortOrder]);

  const handleReset = () => {
    setSearchTerm("");
    setStatusFilter("Governed status");
    setScopeFilter("Controlled scope");
    setSortOrder("Sort: Identity A–Z");
    setSelectedRecord(REMITTANCE_SPECIMEN_RECORDS[0]);
  };

  return (
    <div className="bg-[#FAF8FA] w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <CoverageFinderSection
        onSearchChange={setSearchTerm}
        onStatusChange={setStatusFilter}
        onScopeChange={setScopeFilter}
        onSortChange={setSortOrder}
        onReset={handleReset}
      />
      <CurrentCoverageResultsSection
        records={filteredRecords}
        selectedId={selectedRecord?.id}
        onSelectRecord={setSelectedRecord}
      />
      <SelectedMarketDetailSection record={selectedRecord} />
      <HowRemittanceFitsSection />
      <StatusSemanticsSection />
      <CapabilityBoundaryMatrixSection />
      <ProofCrosslinksSection />
      <FAQSection />
      <ConversionBandSection />
    </div>
  );
}
