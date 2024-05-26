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
    <div className="text-6xl mt-4 flex flex-col md:flex-row">
      <div className="mr-1">{results} results for</div>
      <div className="text-primary mx-0 md:mx-2">{categoryName}</div>
      {!!city && (
        <div className="flex">
          <div>near</div> <div className="text-primary mx-2">{cityName}</div>
        </div>
      )}
    </div>
  );
};

export default Title;
