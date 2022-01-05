import React, { useCallback, useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import DelayedFallback from "../DelayFallBack";
import PaginatePage from "../PaginatePage";
import CardList from "./CardList";
import CardStyle from "./CardStyle";

type IProps = {
  setExtendBar: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: string;
};

type Data = {
  userId: number,
  id: number,
  title: string,
  body: string
}

const CardData: React.FC<IProps> = ({ setExtendBar, toggle }: IProps) => {
  const [data, setData] = useState<Data[]>([]);
  const [page, setPage] = useState<object>({ currentPage: 0, offset: 0 });

  // Fetch  Data
  const getData = useCallback(
    async (page) => {
      const res = await fetchData(
        `https://jsonplaceholder.typicode.com/posts?_page=${
          page.currentPage + 1
        }&_limit=${toggle === "list" ? 5 : 6}`
      );
      setData(res);
    },
    [page, toggle]
  );
  useEffect(() => {
    getData(page);
  }, [getData]);

  // Delete Card
  const handleDelete = (id: string) => {
    setData(data.filter((user: any) => user.id !== id));
  };

  //Page Count
  const pageCount = Math.ceil(toggle === "list" ? 15 / 5 : 18 / 6);

  //Change Page
  const changePage = (e: any) => {
    console.log(e)
    const selectedPage = e.selected;
    const offset = selectedPage * (toggle === "list" ? 5 : 6);
    setPage({ currentPage: selectedPage, offset: offset });
  };
  return (
    <div
      style={{
        position: "absolute",
        width: "70%",
        marginLeft: "30%",
        height: "110vh",
      }}
      onClick={() => setExtendBar(false)}
      className="bg d-flex justify-content-center"
    >
      <div className="my-3 d-flex align-items-center">
        {/* List Card */}
        {toggle === "list" && (
          <DelayedFallback>    
            <div>
              {data.map((user: Data) => (
                <CardList
                  key={user.id}
                  user={user}
                  handleDelete={handleDelete}
                />
              ))}
              {/* Pagination */}
              <PaginatePage pageCount={pageCount} changePage={changePage} />
            </div>
          </DelayedFallback>
        )}
        {/*Card */}
        {toggle === "card" && (
          <DelayedFallback>
            <div className="row">
              {data.map((user: Data) => (
                <CardStyle
                  key={user.id}
                  user={user}
                  handleDelete={handleDelete}
                />
              ))}
              {/* Pagination */}
              <PaginatePage pageCount={pageCount} changePage={changePage} />
            </div>
          </DelayedFallback>
        )}
      </div>
    </div>
  );
};
export default CardData;
