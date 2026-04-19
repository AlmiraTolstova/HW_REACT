import BreadCrumbs from "../../components/breadcrumbs";

const localBreadCrumps = [
  {
    label: "Main page",
    path: "/",
  },
  {
    label: "Categories",
    path: "",
  },
];

function CategoriesPage() {
  return (
    <div>
      CategoriesPage
      <BreadCrumbs crumbs={localBreadCrumps}></BreadCrumbs>
    </div>
  );
}

export default CategoriesPage;
