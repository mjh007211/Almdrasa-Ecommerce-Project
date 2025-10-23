type Props = {
  secondaryTitle: string;
};

export const SecondarySectionTitle = ({ secondaryTitle }: Props) => {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="20"
        height="40"
        viewBox="0 0 20 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="40" rx="4" fill="#DB4444" />
      </svg>
      <h3 className="text-[#DB4444] font-semibold">{secondaryTitle}</h3>
    </div>
  );
};
