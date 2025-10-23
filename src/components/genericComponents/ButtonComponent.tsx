type Props = {
  text: string;
  width: number;
};

export const ButtonComponent = ({ text, width }: Props) => {
  return (
    <button
      style={{ width: `${width}px` }}
      className={`font-medium text-[#FAFAFA] bg-[#DB4444] rounded-[4px] py-4 text-center block cursor-pointer hover:bg-[#db4444a1] transition duration-300  hover:scale-105`}
    >
      {text}
    </button>
  );
};
