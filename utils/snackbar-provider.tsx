"use client";

import React from "react";
import { SnackbarProvider } from "notistack";

export default function SnackbarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SnackbarProvider>{children}</SnackbarProvider>;
}
