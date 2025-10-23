type Props = {
  text: string;
  width: number;
};

export const SecondaryButtonComponent = ({ text, width }: Props) => {
  return (
    <button
      style={{ width: `${width}px` }}
      className={`font-medium bg-transparent border rounded-[4px] py-4 text-center block cursor-pointer transition-transform duration-300 hover:scale-105`}
    >
      {text}
    </button>
  );
};
