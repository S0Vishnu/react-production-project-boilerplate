import { ReactNode } from "react";
import ReactDOM from "react-dom";

// Define the props interface for the component, which requires `children` as a ReactNode type
interface PortalProps {
  children: ReactNode;
}

// The `RenderOverlay` component allows rendering of its children into a specific DOM node (`root-over`) outside of the regular React component tree
const RenderOverlay = ({ children }: PortalProps) => {
  // Retrieve the DOM element with the id `root-over` which serves as the mounting point for the overlay content.
  const rootOver = document.getElementById("root-over");

  // If the `rootOver` element exists in the DOM, use `ReactDOM.createPortal` to render the `children` inside this element
  // `ReactDOM.createPortal` allows rendering outside of the usual React component tree, useful for overlays, modals, and tooltips
  // If `rootOver` is null (i.e., does not exist), return null, rendering nothing
  return rootOver ? ReactDOM.createPortal(children, rootOver) : null;
};

// Export the `RenderOverlay` component as the default export for use in other parts of the application
export default RenderOverlay;
