import * as U from "../utils";

type Props = {
  category: string;
  city?: string;
  results?: number;
};

const Title: React.FC<Props> = ({ category = "", city = '', results = 0 }: Props) => {
  const categoryName = U.getCategoryBySlug(category);
  const cityName = city ? U.getCityBySlug(city) : '';
  return (
    <div className="text-6xl mt-4 flex">
      <span>{results} results for</span>{" "}
      <span className="text-primary mx-2">{categoryName}</span>
      {!!city && (
        <>
          <span>near</span> <span className="text-primary mx-2">{cityName}</span>
        </>
      )}
    </div>
  );
};

export default Title;
