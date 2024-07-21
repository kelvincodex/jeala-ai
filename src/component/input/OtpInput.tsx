import React, { CSSProperties, createRef, useMemo, useRef } from "react";

type OtpInputProps = {
  numberOfInputs?: number;
  onChangeText: (text: string) => void;
  otp: string;
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  disableInputs?: boolean;
};
export const OtpInput = ({
  numberOfInputs=5,
  onChangeText,
  otp,
  containerStyle,
  inputStyle,
  disableInputs,
}: OtpInputProps) => {
  const ref = useRef<any>(
    [...Array<any>(numberOfInputs)].map(() => createRef())
  );
  // const ref = useRef<HTMLInputElement>(null)
  const regex = useMemo(() => {
    return new RegExp(/^\d+$/);
  }, []);

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    if (e.key !== "Backspace" || target.value !== "") {
      return;
    }

    target.setSelectionRange(0, targetValue.length);
    focusToPrevInput(target);
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    target.setSelectionRange(0, target.value.length);
  };

  const otpItems = useMemo(() => {
    const otpArray = otp.split("");
    const items: Array<string> = [];

    for (let i = 0; i < numberOfInputs; i++) {
      const char = otpArray[i];

      if (regex.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [otp, numberOfInputs, regex]);

  const handleOnChangeText = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = regex.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue = otp.substring(0, i) + targetValue + otp.substring(i + 1);

      onChangeText(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      focusToNextInput(target);
    } else if (targetValueLength === numberOfInputs) {
      onChangeText(targetValue);

      target.blur();
    }
  };

  return (
    <div
      className={
        "w-full select-none h-[auto] flex max-[440px]:flex-wrap items-center justify-center gap-3 my-3"
      }
      style={containerStyle}
    >
      {otpItems?.map((_, i) => {
        return (
          <input
            disabled={disableInputs}
            inputMode="numeric"
            pattern="\d{1}"
            value={_}
            key={i}
            ref={ref.current[i]}
            // onKeyUp={(e) => handleKeyUp(e.key, i)}
            onKeyDown={inputOnKeyDown}
            onChange={(e) => handleOnChangeText(e, i)}
            onFocus={inputOnFocus}
            maxLength={1}
            className={
              "select-none selection:bg-transparent  text-primary-100 w-[80px] h-[70px] font-medium text-[24px] max-[425px]:w-[40px] max-[425px]:h-[40px] max-[850px]:w-[60px] max-[850px]:h-[60px] focus:outline-0 text-center border-[3px]  bg-inherit border-gray-300  rounded-[10px]"
            }
            style={inputStyle}
          />
        );
      })}
    </div>
  );
};

