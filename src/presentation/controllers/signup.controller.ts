import { MissingParamError } from '../erros/missing-param.error';
import { HttpRequest, HttpResponse } from '../protocols/http';

export class SignupController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name'),
      };
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      };
    }

    if (!httpRequest.body.password) {
      return {
        statusCode: 400,
        body: new MissingParamError('password'),
      };
    }

    if (!httpRequest.body.passwordConfirmation) {
      return {
        statusCode: 400,
        body: new MissingParamError('passwordConfirmation'),
      };
    }
  }
}
