import InputFocusExample from "../components/InputFocusExample";
import DeferredValueExample from "../components/UseDeferredValueExample";
import UseIdExample from "../components/UseIdExample";
import ParentComponent from "../components/UseImperativeHandle";
import UseTransitionExample from "../components/UseTransitionExample";

export default function ExamplePage() {
  return (
    <div>
      <h1>ExamplePage</h1>
      <InputFocusExample />
      <ParentComponent />
      <UseIdExample />
      <DeferredValueExample />
      <UseTransitionExample />
    </div>
  );
}
