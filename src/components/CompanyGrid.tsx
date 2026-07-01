"use client";

import { useState } from "react";
import CompanyCard from "./CompanyCard";

interface Company {
  id: string;
  name: string;
  logo: string;
  difficulty: "Easy" | "Medium" | "Hard";
  focus: string[];
  color: string;
}

interface CompanyGridProps {
  companies: Company[];
  selectedCompany: string | null;
  onSelectCompany: (id: string) => void;
}

export default function CompanyGrid({ companies, selectedCompany, onSelectCompany }: CompanyGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {companies.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
          isSelected={selectedCompany === company.id}
          onClick={() => onSelectCompany(company.id)}
        />
      ))}
    </div>
  );
}
