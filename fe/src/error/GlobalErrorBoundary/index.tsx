import NotFound from '@Components/common/NotFound';
import Redirect from '@Components/common/Redirect';
import { LocalError } from '@Error/LocalError';
import React, { ReactNode } from 'react';
import { ERROR_MESSAGE } from '@Constants/index';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error;
}

export class GlobalErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: new Error(),
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render(): ReactNode {
    const { hasError, error } = this.state;

    if (hasError && error instanceof LocalError) {
      if (error.message === ERROR_MESSAGE.refresh) {
        return <Redirect errorMessage={error.message} />;
      }
      return <NotFound errorMessage={ERROR_MESSAGE.default} />;
    }
    return this.props.children;
  }
}
