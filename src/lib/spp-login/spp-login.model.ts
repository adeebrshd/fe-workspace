export interface SPPLoginStateDefinition {
  username: string;
  password: string;
}

export interface SppLoginResourcesDefinition {
  loginResponse: ErrorResponse;
}

export interface ErrorResponse {
  status?: number;
  error?: string;
  message: string;
  timestamp?: string;
}

export interface SuccessResponse {
  accessToken: string;
  tokenType: string;
}
