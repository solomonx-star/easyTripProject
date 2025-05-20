"use client";

import { useAuth } from "@/context/userContext";
import DashBoardWrapper from "@/components/DashboardWrapper";


export default function DashBoard() {
  const { user } = useAuth();


  return (
    <DashBoardWrapper>
      <div className="bg-gray-800">
        <h1>Admin DashBoard </h1>
      </div>
    </DashBoardWrapper>
  );
}
