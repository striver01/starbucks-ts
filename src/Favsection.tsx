import Coffee from "./Coffee.webp";

interface Props {
  title: string;
}

const Favsection: React.FC<Props> = (props) => {
  return (
    <div className="bg-Primary-400 md:hidden">
      <div className="aspect-w-4 aspect-h-2">
        <img alt="none" className="w-full h-full" src={Coffee} />
      </div>
      <div className="text-lg text-center font-semibold">{props.title}</div>
      <div className="text-xxl text-center p-7 pt-2 pb-12">
      {props.children}
      </div>
    </div>
  );
};
Favsection.defaultProps = {};
export default Favsection;
