import renderer from "react-test-renderer";
import Tribute from "../components/common/Tribute/Tribute";

it("changes the class when hovered", () => {
  const component = renderer.create(
    <Tribute
      title={"منصة عربية واعدة لتوصيل الشركات بأصحاب الأعمال"}
      image={"/images/coffee.png"}
    ></Tribute>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
