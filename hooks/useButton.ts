import { useState } from 'react';

interface Props {
  buttonText: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
  buttonDisabled: boolean;
  setButtonText:  React.Dispatch<React.SetStateAction<string>>;
  setButtonTextColor:  React.Dispatch<React.SetStateAction<string>>;
  setButtonBackgroundColor:  React.Dispatch<React.SetStateAction<string>>;
  setButtonDisabled:  React.Dispatch<React.SetStateAction<boolean>>;
}

interface InitialProps {
  buttonText?: string;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  buttonDisabled?: boolean;
}

function useButton(props?: InitialProps): Props {
  const [buttonText, setButtonText] = useState(props?.buttonText || 'Button');
  const [buttonTextColor, setButtonTextColor] = useState(props?.buttonTextColor || '#000');
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState(props?.buttonBackgroundColor || '#FFF');
  const [buttonDisabled, setButtonDisabled] = useState(props?.buttonDisabled || false);

  return {
    buttonText,
    buttonTextColor,
    buttonBackgroundColor,
    buttonDisabled,
    setButtonText,
    setButtonTextColor,
    setButtonBackgroundColor,
    setButtonDisabled,
  }
}

export { useButton };
