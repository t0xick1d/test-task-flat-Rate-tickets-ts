import { ErrorWithStatus } from "types/errorTypes";

type ErrorMessagesType = { 
  [x: number ] : string
}

const errorMessageList : ErrorMessagesType = {
  400: 'Bad request',
  401: 'Email or password is wrong',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Email in use',
};

const HttpError = (status: number, message = errorMessageList[status]) => {
  const error = new Error(message) as ErrorWithStatus;
  error.status = status;
  return error;
};

module.exports = { HttpError };
