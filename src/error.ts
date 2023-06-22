export enum ErrorCode {
    NotFound = 'NOT_FOUND',
    Unauthorized = 'UNAUTHORIZED',
    InternalServerError = 'INTERNAL_SERVER_ERROR',
    ServiceUnavailable = 'SERVICE_UNAVAILABLE'
    // Add more error codes as needed
  }

  export interface Error{
    code:ErrorCode
    message:""
  }

  

