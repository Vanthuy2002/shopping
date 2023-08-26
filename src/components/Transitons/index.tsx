import { CSSTransition } from 'react-transition-group';
import { ChildProps } from 'src/utils/types';

interface TransitionGroupProps {
  inTo: boolean;
  nodeRef: React.MutableRefObject<null>;
  className: string;
  // eslint-disable-next-line no-unused-vars
  onExit: (value: boolean) => void;
  timeout?: number;
  children: ChildProps;
}

const TransitionComp = ({
  inTo,
  nodeRef,
  className,
  onExit,
  children,
  timeout = 500,
}: TransitionGroupProps) => {
  return (
    <CSSTransition
      in={inTo}
      nodeRef={nodeRef}
      timeout={timeout}
      classNames={className}
      unmountOnExit
      onExited={() => onExit}
    >
      {children}
    </CSSTransition>
  );
};

export default TransitionComp;
