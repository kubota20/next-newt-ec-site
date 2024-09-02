interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto px-4 md:px-10 max-w-7xl">{children}</div>;
};

export default Container;
