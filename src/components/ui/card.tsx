import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";

export const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`rounded-lg shadow-md bg-white p-4 ${className || ""}`}>{children}</div>
);

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`border-b pb-2 mb-2 ${className || ""}`}>{children}</div>
);

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <h2 className={`text-lg font-bold ${className || ""}`}>{children}</h2>
);

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={className || ""}>{children}</div>
);

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`pt-2 mt-2 border-t ${className || ""}`}>{children}</div>
);