"use client";

import React, { useState, useMemo } from "react";
import HeroSection from "./HeroSection";
import DirectAnswerSection from "./DirectAnswerSection";
import CoverageFinderSection from "./CoverageFinderSection";
import CurrentCoverageResultsSection from "./CurrentCoverageResultsSection";
import SelectedMarketDetailSection from "./SelectedMarketDetailSection";
import HowManagedComplianceFitsSection from "./HowManagedComplianceFitsSection";
import StatusSemanticsSection from "./StatusSemanticsSection";
import CapabilityBoundaryMatrixSection from "./CapabilityBoundaryMatrixSection";
import ProofCrosslinksSection from "./ProofCrosslinksSection";
import FAQSection from "./FAQSection";
import FinalConversionBandSection from "./FinalConversionBandSection";
import { SPECIMEN_RECORDS, SpecimenRecord } from "./types";

export default function ManagedComplianceCoverageContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All public states");
  const [scopeFilter, setScopeFilter] = useState("Any stated scope");
  const [selectedRecord, setSelectedRecord] = useState<SpecimenRecord>(SPECIMEN_RECORDS[0]);

  const filteredRecords = useMemo(() => {
    return SPECIMEN_RECORDS.filter((rec) => {
      // Search text filter
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const matchesName = rec.market.toLowerCase().includes(query);
        const matchesScope = rec.scopeText.toLowerCase().includes(query);
        if (!matchesName && !matchesScope) return false;
      }

      // Governed status filter
      if (statusFilter !== "All public states") {
        if (
          !rec.publicState.toLowerCase().includes(statusFilter.toLowerCase()) &&
          !rec.operationalState.toLowerCase().includes(statusFilter.toLowerCase()) &&
          !rec.underlyingState.toLowerCase().includes(statusFilter.toLowerCase())
        ) {
          return false;
        }
      }

      // Controlled scope filter
      if (scopeFilter !== "Any stated scope") {
        if (!rec.scopeText.toLowerCase().includes(scopeFilter.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, statusFilter, scopeFilter]);

  const handleReset = () => {
    setSearchTerm("");
    setStatusFilter("All public states");
    setScopeFilter("Any stated scope");
    setSelectedRecord(SPECIMEN_RECORDS[0]);
  };

  return (
    <div className="bg-[#FAF8FA] w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <CoverageFinderSection
        onSearchChange={setSearchTerm}
        onStatusChange={setStatusFilter}
        onScopeChange={setScopeFilter}
        onReset={handleReset}
      />
      <CurrentCoverageResultsSection
        selectedId={selectedRecord?.id}
        onSelectRecord={setSelectedRecord}
        filteredRecords={filteredRecords}
      />
      <SelectedMarketDetailSection record={selectedRecord} />
      <HowManagedComplianceFitsSection />
      <StatusSemanticsSection />
      <CapabilityBoundaryMatrixSection />
      <ProofCrosslinksSection />
      <FAQSection />
      <FinalConversionBandSection />
    </div>
  );
}
