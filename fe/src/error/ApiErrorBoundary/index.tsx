import NotFound from '@Components/common/NotFound';
import Redirect from '@Components/common/Redirect';
import { ApiError } from '@Error/ApiError';
import React, { ReactNode } from 'react';
import { ERROR_MESSAGE } from '@Constants/index';
import { SERVER_MESSAGE } from '@Constants/server';

interface Props {
  children?: ReactNode;
}

interface State {
  shouldHandleError: boolean;
  shouldRethrow: boolean;
  error?: ApiError;
}

export class ApiErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      shouldHandleError: false,
      shouldRethrow: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: Error) {
    if (error instanceof ApiError) {
      return {
        shouldHandleError: true,
        shouldRethrow: false,
        error,
      };
    }
    return {
      shouldHandleError: false,
      shouldRethrow: true,
      error,
    };
  }

  render() {
    if (this.state.shouldRethrow) {
      throw this.state.error;
    }
    if (!this.state.shouldHandleError) {
      return this.props.children;
    }
    if (this.state.error?.message === SERVER_MESSAGE.USER_TOKEN_EXPIRED) {
      return <Redirect errorMessage={this.state.error?.message} />;
    }

    return <NotFound errorMessage={ERROR_MESSAGE.default} />;
  }
}
