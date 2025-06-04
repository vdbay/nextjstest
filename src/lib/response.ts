// lib/api-response.ts
import { NextResponse } from "next/server";
import { ApiResponse } from "./interface/response";

export function success<T>(message: string, data: T) {
  const response: ApiResponse<T> = {
    status: "success",
    message,
    data,
  };
  return NextResponse.json(response);
}

export function error(message: string, errorData: any = null) {
  const response: ApiResponse<null> = {
    status: "error",
    message,
    data: errorData,
  };
  return NextResponse.json(response);
}
