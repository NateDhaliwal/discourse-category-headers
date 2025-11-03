import { apiInitializer } from "discourse/lib/api";
import CategoryHeader from "../components/category-header";

export default apiInitializer((api) => {
  api.renderInOutlet("discovery-list-controls-above", CategoryHeader);
});
