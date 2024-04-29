import ArticleList from "./components/ArticleList/ArticleList";
import Header from "./components/Header";

const app = () => {
  return (
    <div className="w-screen h-screen sm:px-5 flex flex-col justify-start items-center">
      <Header />
      <ArticleList />
    </div>
  )
}

export default app;
