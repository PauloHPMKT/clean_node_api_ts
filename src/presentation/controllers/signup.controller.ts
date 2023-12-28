import { HttpRequest, HttpResponse } from '../protocols/http';

export class SignupController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name'),
      };
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email'),
      };
    }

    if (!httpRequest.body.password) {
      return {
        statusCode: 400,
        body: new Error('Missing param: password'),
      };
    }

    if (!httpRequest.body.passwordConfirmation) {
      return {
        statusCode: 400,
        body: new Error('Missing param: passwordConfirmation'),
      };
    }
  }
}
