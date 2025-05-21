"use client";

import { useAuth } from "@/context/userContext";
import DashBoardWrapper from "@/components/DashboardWrapper";


export default function DashBoard() {
  const { user } = useAuth();


  return (
    <DashBoardWrapper>
      <div className="min-h-screen min-w-full bg-gray-900"></div>
    </DashBoardWrapper>
  );
}
