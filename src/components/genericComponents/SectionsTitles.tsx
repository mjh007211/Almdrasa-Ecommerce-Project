type Props = {
  sectionTitle: string;
};

export const SectionsTitles = ({ sectionTitle }: Props) => {
  return (
    <h2 className="font-Inter text-4xl font-semibold leading-[48px] tracking-[0.64px]">
      {sectionTitle}
    </h2>
  );
};
