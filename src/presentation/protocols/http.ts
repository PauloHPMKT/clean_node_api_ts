export interface HttpResponse {
  statusCode: number;
  body: any; // body pode ser qualquer tipo de objeto
}

export interface HttpRequest {
  body?: any; // request pode ou não ter um body
}
