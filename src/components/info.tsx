interface InfoProps {
  title: string;
}

export const Info: React.FC<InfoProps> = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-center h-full ">
        <h2 className="text-2xl">{title}</h2>
      </div>
    </>
  );
};
