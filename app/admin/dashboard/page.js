"use client";

import { useAuth } from "@/context/userContext";
import DashBoardWrapper from "@/components/DashboardWrapper";


export default function DashBoard() {
  const { user } = useAuth();


  return (
    <DashBoardWrapper>
      <div>
        <h1>Admin DashBoard </h1>
      </div>
    </DashBoardWrapper>
  );
}
