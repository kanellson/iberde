type Props = {
  label: string;
  onClick?: () => void;
  size: "g" | "m" | "p";
};

export const Button = ({ label, onClick, size }: Props) => {
  return (
    <div
      className={`flex justify-center items-center cursor-pointer bg-white text-black font-semibold rounded-3xl
         ${size === "g" && "h-12 text-lg"}
         ${size === "m" && "h-10 text-md"}
         ${size === "p" && "h-6 text-sm"}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
