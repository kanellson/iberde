"use client";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react"

type Props = {
  placeholder: string;
  password?: boolean;
  filled?: boolean;
  icon?: IconDefinition;
  value?: string;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
};
export const Input = ({
  placeholder,
  password,
  filled,
  icon,
  value,
  onChange,
  onEnter,
}: Props) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === 'enter' && onEnter) {
      onEnter()
    }
  }

  return (
    <div
      className={`flex items-center h-12 rounded-3xl border-2 border-gray-500 has-[:focus]:hover:border-white ${filled && "bg-gray-700"}`}
    >
      {icon && (
        <FontAwesomeIcon className="ml-4 size-5 text-gray-500" icon={icon} />
      )}
      <input
        type={password && !showPassword ? "password" : "type"}
        className="flex-1 px-4 outline-none bg-transparent h-full"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      {password && (
        <FontAwesomeIcon
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer mr-4 size-6 text-gray-500"
          icon={showPassword ? faEye : faEyeSlash}
        />
      )}
    </div>
  );
};
